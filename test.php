<?php
// Файл: test.php
// Проверка работоспособности базы данных

require_once 'includes/Database.php';

echo "<!DOCTYPE html>
<html>
<head>
    <title>Проверка базы данных AirComfort</title>
    <style>
        body { font-family: Arial; max-width: 1200px; margin: 50px auto; padding: 20px; background: #f5f5f5; }
        .success { background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .error { background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .info { background: #e2e3e5; color: #383d41; padding: 15px; border-radius: 5px; margin: 10px 0; }
        table { border-collapse: collapse; width: 100%; background: white; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #4CAF50; color: white; }
        tr:nth-child(even) { background: #f9f9f9; }
    </style>
</head>
<body>
    <h1>🔍 Проверка базы данных AirComfort</h1>";

try {
    $db = Database::getInstance();
    
    // Проверяем подключение
    $version = $db->fetchValue("SELECT sqlite_version()");
    echo "<div class='success'>✅ SQLite версия: $version</div>";
    
    // Получаем статистику
    $stats = [];
    $tables = ['products', 'brands', 'orders', 'admins', 'settings'];
    
    echo "<div class='info'>📊 Статистика таблиц:</div>";
    echo "<table>";
    echo "<tr><th>Таблица</th><th>Количество записей</th></tr>";
    
    foreach ($tables as $table) {
        $count = $db->fetchValue("SELECT COUNT(*) FROM $table");
        echo "<tr><td>$table</td><td>$count</td></tr>";
        $stats[$table] = $count;
    }
    
    echo "</table>";
    
    // Показываем товары
    if ($stats['products'] > 0) {
        echo "<div class='info'>📦 Последние товары:</div>";
        
        $products = $db->fetchAll("
            SELECT p.id, p.name, b.name as brand, p.price, p.status
            FROM products p
            LEFT JOIN brands b ON p.brand_id = b.id
            ORDER BY p.id DESC
            LIMIT 5
        ");
        
        echo "<table>";
        echo "<tr><th>ID</th><th>Название</th><th>Бренд</th><th>Цена</th><th>Статус</th></tr>";
        
        foreach ($products as $p) {
            echo "<tr>";
            echo "<td>{$p['id']}</td>";
            echo "<td>" . htmlspecialchars($p['name']) . "</td>";
            echo "<td>{$p['brand']}</td>";
            echo "<td>{$p['price']} BYN</td>";
            echo "<td>{$p['status']}</td>";
            echo "</tr>";
        }
        
        echo "</table>";
    }
    
    // Показываем бренды
    if ($stats['brands'] > 0) {
        echo "<div class='info'>🏷️ Бренды:</div>";
        
        $brands = $db->fetchAll("SELECT * FROM brands ORDER BY name");
        
        echo "<table>";
        echo "<tr><th>ID</th><th>Название</th></tr>";
        
        foreach ($brands as $b) {
            echo "<tr><td>{$b['id']}</td><td>{$b['name']}</td></tr>";
        }
        
        echo "</table>";
    }
    
    // Показываем настройки
    if ($stats['settings'] > 0) {
        echo "<div class='info'>⚙️ Настройки сайта:</div>";
        
        $settings = $db->fetchAll("SELECT setting_key, setting_value FROM settings");
        
        echo "<table>";
        echo "<tr><th>Ключ</th><th>Значение</th></tr>";
        
        foreach ($settings as $s) {
            echo "<tr><td>{$s['setting_key']}</td><td>" . htmlspecialchars($s['setting_value']) . "</td></tr>";
        }
        
        echo "</table>";
    }
    
    // Проверяем админа
    if ($stats['admins'] > 0) {
        $admin = $db->fetchOne("SELECT username, email, role FROM admins WHERE username = 'admin'");
        if ($admin) {
            echo "<div class='success'>✅ Администратор по умолчанию: логин <strong>admin</strong>, пароль <strong>admin123</strong></div>";
        }
    }
    
    echo "<div class='success'>🎉 База данных работает корректно!</div>";
    
} catch (Exception $e) {
    echo "<div class='error'>❌ Ошибка: " . $e->getMessage() . "</div>";
    echo "<div class='error'>Запустите install.php для создания базы данных</div>";
}
?>
</body>
</html>
