<?php
// api.php - API для работы с товарами
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$method = $_SERVER['REQUEST_METHOD'];
$action = isset($_GET['action']) ? $_GET['action'] : '';

// Путь к файлу с товарами
$productsFile = __DIR__ . '/products.json';

// Инициализация файла если не существует
if (!file_exists($productsFile)) {
    $initialProducts = [
        ['id' => 1, 'name' => 'Ballu BSO-07HN1', 'brand' => 'Ballu', 'price' => 850, 'oldPrice' => 950, 'area' => 'до 20', 'type' => 'Настенный', 'inverter' => 'Нет', 'heat' => '-7', 'color' => 'белый', 'specs' => ['Мощность охлаждения: 2.1 кВт', 'Мощность обогрева: 2.3 кВт', 'Энергопотребление: 0.75 кВт', 'Уровень шума: 23 дБ', 'Хладагент: R410A'], 'images' => ['https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+1', 'https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+2', 'https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+3'], 'description' => 'Надежный кондиционер для небольших помещений.', 'fullDescription' => 'Ballu BSO-07HN1 - надежная сплит-система для помещений до 20 м². Энергосберегающий режим, низкий шум. Идеальное решение для спальни или небольшой гостиной.', 'tags' => ['хит'], 'status' => 'active', 'createdAt' => date('c')],
        ['id' => 2, 'name' => 'Electrolux EACS-07HAT/N3', 'brand' => 'Electrolux', 'price' => 1100, 'oldPrice' => null, 'area' => '21-29', 'type' => 'Настенный', 'inverter' => 'Да', 'heat' => '-15', 'color' => 'серебристый', 'specs' => ['Мощность охлаждения: 2.5 кВт', 'Мощность обогрева: 2.7 кВт', 'Энергопотребление: 0.8 кВт', 'Уровень шума: 22 дБ', 'Wi-Fi управление'], 'images' => ['https://via.placeholder.com/600x400?text=Electrolux+1', 'https://via.placeholder.com/600x400?text=Electrolux+2'], 'description' => 'Инверторная модель с низким уровнем шума.', 'fullDescription' => 'Electrolux EACS-07HAT/N3 - инверторный кондиционер, 22 дБ, высокая энергоэффективность. Современный дизайн и удобное управление.', 'tags' => ['новинка'], 'status' => 'active', 'createdAt' => date('c')],
        ['id' => 3, 'name' => 'LG P09EP', 'brand' => 'LG', 'price' => 1450, 'oldPrice' => 1650, 'area' => '30-39', 'type' => 'Настенный', 'inverter' => 'Да', 'heat' => '-10', 'color' => 'белый', 'specs' => ['Мощность охлаждения: 2.8 кВт', 'Мощность обогрева: 3.0 кВт', 'Энергопотребление: 0.9 кВт', 'Уровень шума: 25 дБ', 'Плазменный фильтр'], 'images' => ['https://via.placeholder.com/600x400?text=LG+P09EP+1', 'https://via.placeholder.com/600x400?text=LG+P09EP+2', 'https://via.placeholder.com/600x400?text=LG+P09EP+3'], 'description' => 'Wi-Fi управление, мощный обогрев.', 'fullDescription' => 'LG P09EP - современный кондиционер с Wi-Fi, плазменный фильтр. Высокая производительность и стильный внешний вид.', 'tags' => ['распродажа'], 'status' => 'active', 'createdAt' => date('c')]
    ];
    file_put_contents($productsFile, json_encode($initialProducts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

switch ($action) {
    case 'getProducts':
        // Получить все товары
        $products = json_decode(file_get_contents($productsFile), true);
        echo json_encode(['success' => true, 'products' => $products]);
        break;

    case 'saveProduct':
        // Сохранить новый товар или обновить существующий
        if ($method !== 'POST') {
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Метод не разрешен']);
            break;
        }

        $input = json_decode(file_get_contents('php://input'), true);
        $products = json_decode(file_get_contents($productsFile), true);

        if (isset($input['id'])) {
            // Обновление существующего товара
            foreach ($products as &$product) {
                if ($product['id'] == $input['id']) {
                    $product = array_merge($product, $input);
                    break;
                }
            }
        } else {
            // Добавление нового товара
            $input['id'] = count($products) > 0 ? max(array_column($products, 'id')) + 1 : 1;
            $input['createdAt'] = date('c');
            $products[] = $input;
        }

        file_put_contents($productsFile, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Товар сохранен', 'products' => $products]);
        break;

    case 'deleteProduct':
        // Удалить товар
        if ($method !== 'DELETE') {
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Метод не разрешен']);
            break;
        }

        $input = json_decode(file_get_contents('php://input'), true);
        $productId = $input['id'];
        $products = json_decode(file_get_contents($productsFile), true);
        
        $products = array_filter($products, function($p) use ($productId) {
            return $p['id'] != $productId;
        });
        
        $products = array_values($products); // Переиндексировать массив
        
        file_put_contents($productsFile, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Товар удален', 'products' => $products]);
        break;

    case 'deleteSelected':
        // Удалить несколько товаров
        if ($method !== 'POST') {
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Метод не разрешен']);
            break;
        }

        $input = json_decode(file_get_contents('php://input'), true);
        $ids = $input['ids'];
        $products = json_decode(file_get_contents($productsFile), true);
        
        $products = array_filter($products, function($p) use ($ids) {
            return !in_array($p['id'], $ids);
        });
        
        $products = array_values($products); // Переиндексировать массив
        
        file_put_contents($productsFile, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Товары удалены', 'products' => $products]);
        break;

    default:
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Неизвестное действие']);
        break;
}
?>
