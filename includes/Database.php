<?php
// Файл: includes/Database.php

class Database {
    private $pdo;
    private $dbFile;
    private static $instance = null;
    
    /**
     * Конструктор (синглтон)
     */
    public static function getInstance($dbFile = null) {
        if (self::$instance === null) {
            self::$instance = new self($dbFile);
        }
        return self::$instance;
    }
    
    private function __construct($dbFile = null) {
        if ($dbFile === null) {
            $this->dbFile = __DIR__ . '/../database/aircomfort.db';
        } else {
            $this->dbFile = $dbFile;
        }
        
        $this->connect();
    }
    
    /**
     * Подключение к базе данных
     */
    private function connect() {
        try {
            // Проверяем существование директории
            $dbDir = dirname($this->dbFile);
            if (!is_dir($dbDir)) {
                throw new Exception("Директория базы данных не существует: $dbDir. Запустите install.php");
            }
            
            // Проверяем существование файла
            if (!file_exists($this->dbFile)) {
                throw new Exception("Файл базы данных не существует: " . $this->dbFile . ". Запустите install.php");
            }
            
            // Подключаемся
            $this->pdo = new PDO('sqlite:' . $this->dbFile);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            
            // Включаем поддержку внешних ключей
            $this->pdo->exec('PRAGMA foreign_keys = ON');
            
        } catch (PDOException $e) {
            die('Ошибка подключения к базе данных: ' . $e->getMessage());
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }
    
    /**
     * Выполнить запрос с параметрами
     */
    public function query($sql, $params = []) {
        try {
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            // Логируем ошибку
            error_log('SQL Error: ' . $e->getMessage() . "\nSQL: " . $sql);
            throw $e;
        }
    }
    
    /**
     * Получить все записи
     */
    public function fetchAll($sql, $params = []) {
        return $this->query($sql, $params)->fetchAll();
    }
    
    /**
     * Получить одну запись
     */
    public function fetchOne($sql, $params = []) {
        return $this->query($sql, $params)->fetch();
    }
    
    /**
     * Получить значение одного поля
     */
    public function fetchValue($sql, $params = []) {
        $result = $this->fetchOne($sql, $params);
        return $result ? reset($result) : null;
    }
    
    /**
     * Вставить запись и получить ID
     */
    public function insert($sql, $params = []) {
        $this->query($sql, $params);
        return $this->pdo->lastInsertId();
    }
    
    /**
     * Обновить запись
     */
    public function update($sql, $params = []) {
        return $this->query($sql, $params)->rowCount();
    }
    
    /**
     * Удалить запись
     */
    public function delete($sql, $params = []) {
        return $this->query($sql, $params)->rowCount();
    }
    
    /**
     * Начать транзакцию
     */
    public function beginTransaction() {
        return $this->pdo->beginTransaction();
    }
    
    /**
     * Подтвердить транзакцию
     */
    public function commit() {
        return $this->pdo->commit();
    }
    
    /**
     * Откатить транзакцию
     */
    public function rollback() {
        return $this->pdo->rollBack();
    }
    
    /**
     * Получить PDO объект
     */
    public function getPDO() {
        return $this->pdo;
    }
    
    /**
     * Получить все товары с основной информацией
     */
    public function getProducts($limit = null, $offset = 0) {
        $sql = "
            SELECT p.*, b.name as brand_name,
                   (SELECT image_url FROM product_images WHERE product_id = p.id AND is_main = 1 LIMIT 1) as main_image
            FROM products p
            LEFT JOIN brands b ON p.brand_id = b.id
            WHERE p.status = 'active'
            ORDER BY p.created_at DESC
        ";
        
        if ($limit) {
            $sql .= " LIMIT " . intval($limit) . " OFFSET " . intval($offset);
        }
        
        return $this->fetchAll($sql);
    }
    
    /**
     * Получить товар по ID со всеми связанными данными
     */
    public function getProduct($id) {
        $product = $this->fetchOne("
            SELECT p.*, b.name as brand_name
            FROM products p
            LEFT JOIN brands b ON p.brand_id = b.id
            WHERE p.id = ? AND p.status = 'active'
        ", [$id]);
        
        if (!$product) {
            return null;
        }
        
        // Получаем изображения
        $product['images'] = $this->fetchAll("
            SELECT image_url, is_main 
            FROM product_images 
            WHERE product_id = ? 
            ORDER BY sort_order
        ", [$id]);
        
        // Получаем характеристики
        $product['specs'] = $this->fetchAll("
            SELECT spec_key, spec_value 
            FROM product_specs 
            WHERE product_id = ? 
            ORDER BY sort_order
        ", [$id]);
        
        // Получаем теги
        $product['tags'] = $this->fetchAll("
            SELECT tag 
            FROM product_tags 
            WHERE product_id = ?
        ", [$id]);
        
        return $product;
    }
    
    /**
     * Получить бренды
     */
    public function getBrands() {
        return $this->fetchAll("SELECT * FROM brands ORDER BY name");
    }
    
    /**
     * Получить настройки сайта
     */
    public function getSettings() {
        $settings = [];
        $rows = $this->fetchAll("SELECT setting_key, setting_value FROM settings");
        foreach ($rows as $row) {
            $settings[$row['setting_key']] = $row['setting_value'];
        }
        return $settings;
    }
    
    /**
     * Создать заказ
     */
    public function createOrder($customerData, $cartItems) {
        $this->beginTransaction();
        
        try {
            // Генерируем номер заказа
            $orderNumber = 'ORD-' . date('Ymd') . '-' . rand(1000, 9999);
            
            // Вставляем заказ
            $orderId = $this->insert("
                INSERT INTO orders (order_number, customer_name, customer_phone, customer_address, customer_email, payment_method, total_amount, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, 'новый')
            ", [
                $orderNumber,
                $customerData['name'],
                $customerData['phone'],
                $customerData['address'],
                $customerData['email'] ?? null,
                $customerData['payment'] ?? 'Наличные',
                $customerData['total']
            ]);
            
            // Вставляем товары
            foreach ($cartItems as $item) {
                $this->insert("
                    INSERT INTO order_items (order_id, product_id, item_name, item_price, quantity, total_price)
                    VALUES (?, ?, ?, ?, ?, ?)
                ", [
                    $orderId,
                    $item['product_id'] ?? null,
                    $item['name'],
                    $item['price'],
                    $item['quantity'],
                    $item['price'] * $item['quantity']
                ]);
            }
            
            $this->commit();
            return $orderNumber;
            
        } catch (Exception $e) {
            $this->rollback();
            throw $e;
        }
    }
}
