<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Получаем действие из запроса
$action = isset($_GET['action']) ? $_GET['action'] : '';

// Подключаемся к базе данных SQLite (файл будет создан автоматически)
try {
    $db = new PDO('sqlite:aircomfort.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Создаем таблицу товаров, если её нет
    $db->exec("CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        brand TEXT,
        price REAL NOT NULL,
        oldPrice REAL,
        area TEXT,
        type TEXT,
        inverter TEXT,
        heat TEXT,
        color TEXT,
        specs TEXT,
        images TEXT,
        description TEXT,
        fullDescription TEXT,
        tags TEXT,
        status TEXT DEFAULT 'active',
        createdAt TEXT
    )");
    
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Обработка действий
switch ($action) {
    case 'getProducts':
        getProducts($db);
        break;
        
    case 'saveProduct':
        saveProduct($db);
        break;
        
    case 'deleteProduct':
        deleteProduct($db);
        break;
        
    case 'deleteSelected':
        deleteSelected($db);
        break;
        
    default:
        echo json_encode(['success' => false, 'error' => 'Invalid action']);
        break;
}

function getProducts($db) {
    try {
        $stmt = $db->query("SELECT * FROM products ORDER BY id DESC");
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Преобразуем JSON строки обратно в массивы
        foreach ($products as &$product) {
            $product['specs'] = json_decode($product['specs'], true) ?: [];
            $product['images'] = json_decode($product['images'], true) ?: [];
            $product['tags'] = json_decode($product['tags'], true) ?: [];
        }
        
        echo json_encode(['success' => true, 'products' => $products]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

function saveProduct($db) {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Преобразуем массивы в JSON для сохранения
        $specs = isset($data['specs']) ? json_encode($data['specs'], JSON_UNESCAPED_UNICODE) : '[]';
        $images = isset($data['images']) ? json_encode($data['images'], JSON_UNESCAPED_UNICODE) : '[]';
        $tags = isset($data['tags']) ? json_encode($data['tags'], JSON_UNESCAPED_UNICODE) : '[]';
        
        if (isset($data['id'])) {
            // Обновление существующего товара
            $stmt = $db->prepare("UPDATE products SET 
                name = :name,
                brand = :brand,
                price = :price,
                oldPrice = :oldPrice,
                area = :area,
                type = :type,
                inverter = :inverter,
                heat = :heat,
                color = :color,
                specs = :specs,
                images = :images,
                description = :description,
                fullDescription = :fullDescription,
                tags = :tags
                WHERE id = :id");
            
            $stmt->execute([
                ':id' => $data['id'],
                ':name' => $data['name'],
                ':brand' => $data['brand'] ?? '',
                ':price' => $data['price'],
                ':oldPrice' => $data['oldPrice'] ?? null,
                ':area' => $data['area'] ?? 'до 20',
                ':type' => $data['type'] ?? 'Настенный',
                ':inverter' => $data['inverter'] ?? 'Да',
                ':heat' => $data['heat'] ?? '-15',
                ':color' => $data['color'] ?? '',
                ':specs' => $specs,
                ':images' => $images,
                ':description' => $data['description'] ?? '',
                ':fullDescription' => $data['fullDescription'] ?? '',
                ':tags' => $tags
            ]);
        } else {
            // Добавление нового товара
            $stmt = $db->prepare("INSERT INTO products 
                (name, brand, price, oldPrice, area, type, inverter, heat, color, specs, images, description, fullDescription, tags, createdAt) 
                VALUES 
                (:name, :brand, :price, :oldPrice, :area, :type, :inverter, :heat, :color, :specs, :images, :description, :fullDescription, :tags, :createdAt)");
            
            $stmt->execute([
                ':name' => $data['name'],
                ':brand' => $data['brand'] ?? '',
                ':price' => $data['price'],
                ':oldPrice' => $data['oldPrice'] ?? null,
                ':area' => $data['area'] ?? 'до 20',
                ':type' => $data['type'] ?? 'Настенный',
                ':inverter' => $data['inverter'] ?? 'Да',
                ':heat' => $data['heat'] ?? '-15',
                ':color' => $data['color'] ?? '',
                ':specs' => $specs,
                ':images' => $images,
                ':description' => $data['description'] ?? '',
                ':fullDescription' => $data['fullDescription'] ?? '',
                ':tags' => $tags,
                ':createdAt' => date('Y-m-d H:i:s')
            ]);
        }
        
        // Возвращаем обновленный список товаров
        getProducts($db);
        
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

function deleteProduct($db) {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $stmt = $db->prepare("DELETE FROM products WHERE id = :id");
        $stmt->execute([':id' => $data['id']]);
        
        // Возвращаем обновленный список
        getProducts($db);
        
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

function deleteSelected($db) {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $ids = $data['ids'];
        
        if (!empty($ids)) {
            $placeholders = implode(',', array_fill(0, count($ids), '?'));
            $stmt = $db->prepare("DELETE FROM products WHERE id IN ($placeholders)");
            $stmt->execute($ids);
        }
        
        // Возвращаем обновленный список
        getProducts($db);
        
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}
?>
