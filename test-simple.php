<?php
// Максимально простой тест
echo "<h1>🔍 Диагностика сайта</h1>";

// 1. Проверяем версию PHP
echo "<p><b>Версия PHP:</b> " . phpversion() . "</p>";

// 2. Проверяем, есть ли папка database
echo "<p><b>Проверка папки database:</b> ";
if (file_exists('database')) {
    echo "✅ Папка существует</p>";
    
    // 3. Проверяем права на запись
    if (is_writable('database')) {
        echo "<p>✅ Папка доступна для записи</p>";
    } else {
        echo "<p>❌ Папка НЕ доступна для записи</p>";
    }
    
    // 4. Проверяем файл базы данных
    if (file_exists('database/aircomfort.db')) {
        echo "<p>✅ Файл базы данных существует</p>";
        echo "<p>Размер файла: " . filesize('database/aircomfort.db') . " байт</p>";
    } else {
        echo "<p>❌ Файл базы данных НЕ найден</p>";
    }
} else {
    echo "❌ Папка НЕ существует</p>";
    // Пробуем создать папку
    if (mkdir('database', 0777)) {
        echo "<p>✅ Папка database создана</p>";
    } else {
        echo "<p>❌ Не удалось создать папку database</p>";
    }
}

// 5. Проверяем PDO
echo "<p><b>Проверка PDO:</b> ";
if (class_exists('PDO')) {
    echo "✅ PDO доступен</p>";
    
    // 6. Проверяем драйверы PDO
    $drivers = PDO::getAvailableDrivers();
    echo "<p><b>Доступные драйверы:</b> " . implode(', ', $drivers) . "</p>";
    
    if (in_array('sqlite', $drivers)) {
        echo "<p>✅ SQLite драйвер доступен</p>";
        
        // 7. Пробуем подключиться к базе
        try {
            $pdo = new PDO('sqlite:database/aircomfort.db');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "<p>✅ Подключение к базе успешно</p>";
            
            // 8. Проверяем таблицы
            $tables = $pdo->query("SELECT name FROM sqlite_master WHERE type='table'");
            echo "<p><b>Таблицы в базе:</b></p>";
            echo "<ul>";
            $hasTables = false;
            while ($table = $tables->fetch()) {
                echo "<li>" . $table['name'] . "</li>";
                $hasTables = true;
            }
            if (!$hasTables) {
                echo "<li>Нет таблиц (база пустая)</li>";
            }
            echo "</ul>";
            
            // 9. Проверяем товары
            $products = $pdo->query("SELECT COUNT(*) as count FROM products")->fetch();
            echo "<p><b>Товаров в базе:</b> " . $products['count'] . "</p>";
            
        } catch (PDOException $e) {
            echo "<p style='color:red'>❌ Ошибка подключения: " . $e->getMessage() . "</p>";
        }
    } else {
        echo "<p style='color:red'>❌ SQLite драйвер НЕ доступен</p>";
    }
} else {
    echo "<p style='color:red'>❌ PDO НЕ доступен</p>";
}

// 10. Проверяем файл install.php
echo "<p><b>Проверка install.php:</b> ";
if (file_exists('install.php')) {
    echo "✅ Файл существует</p>";
    echo "<p>👉 <a href='install.php'>Запустить install.php</a> (если база не создана)</p>";
} else {
    echo "❌ Файл не найден</p>";
}

echo "<hr>";
echo "<h3>📋 Что делать дальше:</h3>";
echo "<ol>";
echo "<li>Если есть ❌ ошибки - скопируйте этот текст и отправьте мне</li>";
echo "<li>Если всё ✅ - значит база работает!</li>";
echo "<li>Если база пустая - запустите <a href='install.php'>install.php</a></li>";
echo "</ol>";
?>
