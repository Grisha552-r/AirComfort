<?php
// =====================================================
// УСТАНОВЩИК БАЗЫ ДАННЫХ AirComfort
// Запустите этот файл ОДИН РАЗ для создания базы данных
// =====================================================

// Отключаем вывод ошибок в браузер (включим только для отладки)
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<!DOCTYPE html>
<html>
<head>
    <title>Установка AirComfort</title>
    <style>
        body { font-family: Arial; max-width: 800px; margin: 50px auto; padding: 20px; background: #f5f5f5; }
        .success { background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .error { background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .info { background: #e2e3e5; color: #383d41; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .warning { background: #fff3cd; color: #856404; padding: 15px; border-radius: 5px; margin: 10px 0; }
        code { background: #f4f4f4; padding: 2px 5px; border-radius: 3px; }
    </style>
</head>
<body>
    <h1>🔧 Установка базы данных AirComfort</h1>";

try {
    // Проверяем наличие PDO
    if (!class_exists('PDO')) {
        throw new Exception('PDO не установлен. Включите расширение PDO в PHP.');
    }
    
    if (!in_array('sqlite', PDO::getAvailableDrivers())) {
        throw new Exception('PDO SQLite драйвер не установлен.');
    }
    
    echo "<div class='success'>✅ PDO SQLite доступен</div>";
    
    // Создаем папку database
    $dbDir = __DIR__ . '/database';
    if (!is_dir($dbDir)) {
        if (mkdir($dbDir, 0755, true)) {
            echo "<div class='success'>✅ Папка database создана</div>";
        } else {
            throw new Exception('Не удалось создать папку database');
        }
    } else {
        echo "<div class='info'>ℹ️ Папка database уже существует</div>";
    }
    
    // Создаем папку для бэкапов
    $backupDir = $dbDir . '/backups';
    if (!is_dir($backupDir)) {
        mkdir($backupDir, 0755, true);
        echo "<div class='success'>✅ Папка backups создана</div>";
    }
    
    // Путь к файлу базы данных
    $dbFile = $dbDir . '/aircomfort.db';
    
    // Подключаемся к базе (файл создастся автоматически)
    $pdo = new PDO('sqlite:' . $dbFile);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('PRAGMA foreign_keys = ON');
    
    echo "<div class='success'>✅ Файл базы данных создан: " . $dbFile . "</div>";
    
    // SQL для создания таблиц
    $sql = "
    -- =====================================================
    -- Таблица брендов
    -- =====================================================
    CREATE TABLE IF NOT EXISTS brands (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- =====================================================
    -- Таблица товаров (кондиционеров)
    -- =====================================================
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        brand_id INTEGER,
        price DECIMAL(10,2) NOT NULL,
        old_price DECIMAL(10,2),
        area TEXT,
        type TEXT,
        inverter TEXT,
        heat TEXT,
        color TEXT,
        description TEXT,
        full_description TEXT,
        status TEXT DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL
    );

    -- =====================================================
    -- Таблица изображений товаров
    -- =====================================================
    CREATE TABLE IF NOT EXISTS product_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        image_url TEXT NOT NULL,
        is_main BOOLEAN DEFAULT 0,
        sort_order INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    );

    -- =====================================================
    -- Таблица характеристик товаров
    -- =====================================================
    CREATE TABLE IF NOT EXISTS product_specs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        spec_key TEXT NOT NULL,
        spec_value TEXT NOT NULL,
        sort_order INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    );

    -- =====================================================
    -- Таблица тегов товаров
    -- =====================================================
    CREATE TABLE IF NOT EXISTS product_tags (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        tag TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        UNIQUE(product_id, tag)
    );

    -- =====================================================
    -- Таблица заказов
    -- =====================================================
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_number TEXT UNIQUE,
        customer_name TEXT NOT NULL,
        customer_phone TEXT NOT NULL,
        customer_address TEXT NOT NULL,
        customer_email TEXT,
        payment_method TEXT DEFAULT 'Наличные',
        total_amount DECIMAL(10,2) NOT NULL,
        status TEXT DEFAULT 'новый',
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- =====================================================
    -- Таблица элементов заказа
    -- =====================================================
    CREATE TABLE IF NOT EXISTS order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER,
        item_name TEXT NOT NULL,
        item_price DECIMAL(10,2) NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 1,
        total_price DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
    );

    -- =====================================================
    -- Таблица администраторов
    -- =====================================================
    CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        email TEXT UNIQUE,
        role TEXT DEFAULT 'admin',
        last_login TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- =====================================================
    -- Таблица логов действий
    -- =====================================================
    CREATE TABLE IF NOT EXISTS action_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        admin_id INTEGER,
        action_type TEXT NOT NULL,
        action_description TEXT NOT NULL,
        ip_address TEXT,
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE SET NULL
    );

    -- =====================================================
    -- Таблица настроек сайта
    -- =====================================================
    CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        setting_key TEXT NOT NULL UNIQUE,
        setting_value TEXT,
        setting_type TEXT DEFAULT 'string',
        description TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- =====================================================
    -- Таблица посещений
    -- =====================================================
    CREATE TABLE IF NOT EXISTS visits (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        visit_date DATE NOT NULL,
        visit_count INTEGER DEFAULT 0,
        total_visits INTEGER DEFAULT 0,
        UNIQUE(visit_date)
    );

    -- Индексы для оптимизации
    CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand_id);
    CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
    CREATE INDEX IF NOT EXISTS idx_product_images_product ON product_images(product_id);
    CREATE INDEX IF NOT EXISTS idx_product_specs_product ON product_specs(product_id);
    CREATE INDEX IF NOT EXISTS idx_product_tags_product ON product_tags(product_id);
    CREATE INDEX IF NOT EXISTS idx_orders_phone ON orders(customer_phone);
    CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
    CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at);
    ";
    
    // Выполняем SQL
    $pdo->exec($sql);
    echo "<div class='success'>✅ Все таблицы успешно созданы</div>";
    
    // Добавляем начальные данные
    echo "<div class='info'>📝 Загружаем начальные данные...</div>";
    
    // Администратор по умолчанию
    $pdo->exec("INSERT OR IGNORE INTO admins (username, password_hash, email, role) VALUES ('admin', 'admin123', 'admin@aircomfort.by', 'superadmin')");
    
    // Настройки сайта
    $settings = [
        ['site_name', 'AirComfort', 'string', 'Название сайта'],
        ['site_email', 'aircomfortbel@gmail.com', 'string', 'Email для уведомлений'],
        ['site_phone', '+375291050694', 'string', 'Контактный телефон'],
        ['site_address', 'г. Гомель', 'string', 'Адрес'],
        ['site_currency', 'BYN', 'string', 'Валюта'],
        ['site_seo_title', 'Установка кондиционеров в Гомеле | AirComfort', 'string', 'SEO заголовок'],
        ['site_seo_description', 'Профессиональная установка кондиционеров в Гомеле и области', 'string', 'SEO описание']
    ];
    
    foreach ($settings as $s) {
        $pdo->prepare("INSERT OR IGNORE INTO settings (setting_key, setting_value, setting_type, description) VALUES (?, ?, ?, ?)")
            ->execute($s);
    }
    
    // Бренды
    $brands = ['Ballu', 'Electrolux', 'LG', 'Mitsubishi', 'Samsung', 'Panasonic', 'Daikin', 'Toshiba', 'Gree', 'Midea'];
    $brandIds = [];
    foreach ($brands as $b) {
        $pdo->prepare("INSERT OR IGNORE INTO brands (name) VALUES (?)")->execute([$b]);
    }
    
    // Получаем ID брендов
    $stmt = $pdo->query("SELECT id, name FROM brands");
    while ($row = $stmt->fetch()) {
        $brandIds[$row['name']] = $row['id'];
    }
    
    // Товары
    $products = [
        [
            'name' => 'Ballu BSO-07HN1',
            'brand' => 'Ballu',
            'price' => 850,
            'old_price' => 950,
            'area' => 'до 20',
            'type' => 'Настенный',
            'inverter' => 'Нет',
            'heat' => '-7',
            'color' => 'белый',
            'description' => 'Надежный кондиционер для небольших помещений',
            'full_description' => 'Ballu BSO-07HN1 - надежная сплит-система для помещений до 20 м². Энергосберегающий режим, низкий шум. Идеальное решение для спальни или небольшой гостиной.',
            'tags' => ['хит'],
            'specs' => [
                'Мощность охлаждения: 2.1 кВт',
                'Мощность обогрева: 2.3 кВт',
                'Энергопотребление: 0.75 кВт',
                'Уровень шума: 23 дБ',
                'Хладагент: R410A'
            ],
            'images' => [
                'https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+1',
                'https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+2',
                'https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+3'
            ]
        ],
        [
            'name' => 'Electrolux EACS-07HAT/N3',
            'brand' => 'Electrolux',
            'price' => 1100,
            'old_price' => null,
            'area' => '21-29',
            'type' => 'Настенный',
            'inverter' => 'Да',
            'heat' => '-15',
            'color' => 'серебристый',
            'description' => 'Инверторная модель с низким уровнем шума',
            'full_description' => 'Electrolux EACS-07HAT/N3 - инверторный кондиционер, 22 дБ, высокая энергоэффективность. Современный дизайн и удобное управление.',
            'tags' => ['новинка'],
            'specs' => [
                'Мощность охлаждения: 2.5 кВт',
                'Мощность обогрева: 2.7 кВт',
                'Энергопотребление: 0.8 кВт',
                'Уровень шума: 22 дБ',
                'Wi-Fi управление'
            ],
            'images' => [
                'https://via.placeholder.com/600x400?text=Electrolux+1',
                'https://via.placeholder.com/600x400?text=Electrolux+2'
            ]
        ],
        [
            'name' => 'LG P09EP',
            'brand' => 'LG',
            'price' => 1450,
            'old_price' => 1650,
            'area' => '30-39',
            'type' => 'Настенный',
            'inverter' => 'Да',
            'heat' => '-10',
            'color' => 'белый',
            'description' => 'Wi-Fi управление, мощный обогрев',
            'full_description' => 'LG P09EP - современный кондиционер с Wi-Fi, плазменный фильтр. Высокая производительность и стильный внешний вид.',
            'tags' => ['распродажа'],
            'specs' => [
                'Мощность охлаждения: 2.8 кВт',
                'Мощность обогрева: 3.0 кВт',
                'Энергопотребление: 0.9 кВт',
                'Уровень шума: 25 дБ',
                'Плазменный фильтр'
            ],
            'images' => [
                'https://via.placeholder.com/600x400?text=LG+P09EP+1',
                'https://via.placeholder.com/600x400?text=LG+P09EP+2',
                'https://via.placeholder.com/600x400?text=LG+P09EP+3'
            ]
        ]
    ];
    
    foreach ($products as $p) {
        // Вставляем товар
        $stmt = $pdo->prepare("
            INSERT INTO products (name, brand_id, price, old_price, area, type, inverter, heat, color, description, full_description, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
        ");
        $stmt->execute([
            $p['name'],
            $brandIds[$p['brand']],
            $p['price'],
            $p['old_price'],
            $p['area'],
            $p['type'],
            $p['inverter'],
            $p['heat'],
            $p['color'],
            $p['description'],
            $p['full_description']
        ]);
        
        $productId = $pdo->lastInsertId();
        
        // Добавляем теги
        foreach ($p['tags'] as $tag) {
            $pdo->prepare("INSERT OR IGNORE INTO product_tags (product_id, tag) VALUES (?, ?)")
                ->execute([$productId, $tag]);
        }
        
        // Добавляем характеристики
        foreach ($p['specs'] as $index => $spec) {
            $parts = explode(':', $spec, 2);
            $key = trim($parts[0]);
            $value = isset($parts[1]) ? trim($parts[1]) : '';
            $pdo->prepare("INSERT INTO product_specs (product_id, spec_key, spec_value, sort_order) VALUES (?, ?, ?, ?)")
                ->execute([$productId, $key, $value, $index]);
        }
        
        // Добавляем изображения
        foreach ($p['images'] as $index => $img) {
            $pdo->prepare("INSERT INTO product_images (product_id, image_url, is_main, sort_order) VALUES (?, ?, ?, ?)")
                ->execute([$productId, $img, $index === 0 ? 1 : 0, $index]);
        }
    }
    
    echo "<div class='success'>✅ Загружено " . count($products) . " тестовых товаров</div>";
    
    // Проверяем результат
    $counts = [
        'products' => $pdo->query("SELECT COUNT(*) FROM products")->fetchColumn(),
        'brands' => $pdo->query("SELECT COUNT(*) FROM brands")->fetchColumn(),
        'orders' => $pdo->query("SELECT COUNT(*) FROM orders")->fetchColumn()
    ];
    
    echo "<div class='success'>";
    echo "📊 Статистика базы данных:<br>";
    echo "- Товаров: {$counts['products']}<br>";
    echo "- Брендов: {$counts['brands']}<br>";
    echo "- Заказов: {$counts['orders']}<br>";
    echo "</div>";
    
    echo "<div class='warning'>⚠️ ВАЖНО: Удалите файл install.php после установки!</div>";
    echo "<div class='info'>🔐 Данные для входа в админку: логин <strong>admin</strong>, пароль <strong>admin123</strong></div>";
    
} catch (Exception $e) {
    echo "<div class='error'>❌ ОШИБКА: " . $e->getMessage() . "</div>";
    echo "<div class='error'>Файл: " . $e->getFile() . " строка " . $e->getLine() . "</div>";
}
?>
</body>
</html>
