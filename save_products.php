<?php
// save_products.php
// Файл для автоматического обновления index.html из админ-панели

// Разрешаем запросы с любого домена (для локальной разработки)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Обработка предварительных OPTIONS запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Проверяем, что это POST запрос
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Получаем данные из запроса
$input = json_decode(file_get_contents('php://input'), true);

// Если нет JSON, пробуем получить из POST
if (!$input) {
    $input = $_POST;
}

// Проверка авторизации (секретный ключ)
$token = $input['token'] ?? '';
$valid_token = 'aircomfort2026secret'; // ИЗМЕНИТЕ НА СВОЙ СЕКРЕТНЫЙ КЛЮЧ!

if ($token !== $valid_token) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Invalid token']);
    exit();
}

$html = $input['html'] ?? '';
if (empty($html)) {
    echo json_encode(['success' => false, 'message' => 'No HTML data']);
    exit();
}

// Путь к файлу index.html (в той же папке)
$file_path = __DIR__ . '/index.html';

// Создаем резервную копию перед сохранением
$backup_path = __DIR__ . '/backups/';
if (!file_exists($backup_path)) {
    mkdir($backup_path, 0755, true);
}

$backup_file = $backup_path . 'index_' . date('Y-m-d_H-i-s') . '.html';
copy($file_path, $backup_file);

// Сохраняем новый файл
if (file_put_contents($file_path, $html)) {
    // Очищаем старые бэкапы (оставляем только 10 последних)
    $backups = glob($backup_path . 'index_*.html');
    if (count($backups) > 10) {
        usort($backups, function($a, $b) {
            return filemtime($a) - filemtime($b);
        });
        $to_delete = array_slice($backups, 0, count($backups) - 10);
        foreach ($to_delete as $file) {
            unlink($file);
        }
    }
    
    echo json_encode([
        'success' => true, 
        'message' => 'Файл успешно обновлен!',
        'backup' => basename($backup_file)
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка при записи файла']);
}
?>
