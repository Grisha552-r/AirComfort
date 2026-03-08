<?php
// upload.php - Загрузка изображений товаров
header('Content-Type: application/json');

$uploadDir = __DIR__ . '/uploads/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$response = ['success' => false, 'message' => ''];

if ($_FILES && isset($_FILES['image'])) {
    $file = $_FILES['image'];
    $fileName = time() . '_' . preg_replace('/[^a-zA-Z0-9\._-]/', '', $file['name']);
    $targetPath = $uploadDir . $fileName;
    
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!in_array($file['type'], $allowedTypes)) {
        $response['message'] = 'Недопустимый тип файла';
    } elseif ($file['size'] > 5 * 1024 * 1024) { // 5MB max
        $response['message'] = 'Файл слишком большой';
    } elseif (move_uploaded_file($file['tmp_name'], $targetPath)) {
        $response['success'] = true;
        $response['url'] = '/uploads/' . $fileName; // Измените путь в зависимости от вашей структуры
        $response['message'] = 'Файл загружен успешно';
    } else {
        $response['message'] = 'Ошибка загрузки файла';
    }
} else {
    $response['message'] = 'Файл не отправлен';
}

echo json_encode($response);
?>
