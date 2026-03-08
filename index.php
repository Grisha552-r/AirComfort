<?php
// Файл: index.php
// Главная страница с подключением к базе данных

require_once 'includes/Database.php';

try {
    $db = Database::getInstance();
    
    // Получаем данные из базы
    $products = $db->getProducts(9); // последние 9 товаров
    $brands = $db->getBrands();
    $settings = $db->getSettings();
    
    // Обновляем заголовок
    $pageTitle = $settings['site_name'] ?? 'AirComfort';
    $pageDescription = $settings['site_seo_description'] ?? 'Профессиональная установка кондиционеров в Гомеле';
    
} catch (Exception $e) {
    // Если база не работает, используем заглушки
    $products = [];
    $brands = [];
    $settings = [];
    $pageTitle = 'AirComfort';
    $pageDescription = 'Профессиональная установка кондиционеров в Гомеле';
    
    echo "<div style='background: #f8d7da; color: #721c24; padding: 10px; text-align: center;'>
            ⚠️ База данных не подключена. Запустите install.php
          </div>";
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($pageDescription); ?>">
    
    <!-- Здесь остальные мета-теги из вашего HTML -->
    
    <!-- Tailwind CSS и стили (как в вашем HTML) -->
    <script src="https://cdn.tailwindcss.com/3.4.16"></script>
    
    <!-- Шрифты и иконки -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" rel="stylesheet">
    
    <style>
        /* Все ваши CSS стили отсюда */
        <?php echo file_get_contents(__DIR__ . '/styles.css'); ?>
    </style>
</head>
<body>
    <!-- ВАШ ПОЛНЫЙ HTML КОД -->
    <!-- Замените только статичные товары на динамические -->
    
    <!-- Например, в блоке каталога: -->
    <section id="catalog" class="py-8 sm:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-2">Каталог кондиционеров</h2>
            
            <!-- Фильтры и поиск (как в вашем HTML) -->
            
            <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                <?php if (empty($products)): ?>
                    <p class="text-center text-gray-500 col-span-3">Товары временно недоступны</p>
                <?php else: ?>
                    <?php foreach ($products as $product): ?>
                    <div class="bg-white rounded-lg shadow-card overflow-hidden product-card" onclick="openProductPage(<?php echo $product['id']; ?>)">
                        <div class="relative">
                            <img src="<?php echo htmlspecialchars($product['main_image'] ?? 'https://via.placeholder.com/200x150?text=No+Image'); ?>" 
                                 alt="<?php echo htmlspecialchars($product['name']); ?>" 
                                 class="w-full h-28 sm:h-40 object-cover">
                        </div>
                        <div class="p-2 sm:p-4 flex-grow">
                            <div class="mb-1">
                                <?php 
                                // Получаем теги для этого товара (можно закешировать)
                                $tags = $db->fetchAll("SELECT tag FROM product_tags WHERE product_id = ?", [$product['id']]);
                                foreach ($tags as $tag): 
                                ?>
                                <span class="inline-block bg-<?php echo $tag['tag'] == 'хит' ? 'red' : ($tag['tag'] == 'новинка' ? 'green' : 'orange'); ?>-100 
                                                     text-<?php echo $tag['tag'] == 'хит' ? 'red' : ($tag['tag'] == 'новинка' ? 'green' : 'orange'); ?>-800 
                                                     text-xs px-1.5 py-0.5 rounded-full mr-1">
                                    <?php echo htmlspecialchars($tag['tag']); ?>
                                </span>
                                <?php endforeach; ?>
                            </div>
                            <h3 class="font-bold text-xs sm:text-base mb-1"><?php echo htmlspecialchars($product['name']); ?></h3>
                            <div class="mb-1">
                                <?php if ($product['old_price']): ?>
                                <span class="text-gray-400 line-through text-xs mr-1"><?php echo $product['old_price']; ?> BYN</span>
                                <?php endif; ?>
                                <span class="text-primary font-bold text-sm sm:text-lg"><?php echo $product['price']; ?> BYN</span>
                            </div>
                            <p class="text-xs text-gray-600 mb-2 product-description"><?php echo htmlspecialchars($product['description']); ?></p>
                            <button onclick="event.stopPropagation(); addToCart(<?php echo $product['id']; ?>)" 
                                    class="w-full gradient-bg text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-button btn-animate text-xs">
                                В корзину
                            </button>
                        </div>
                    </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            
            <div id="pagination" class="pagination"></div>
        </div>
    </section>
    
    <!-- В блоке фильтров замените бренды: -->
    <div id="brands-list" class="flex flex-wrap gap-1 sm:gap-2">
        <?php foreach ($brands as $brand): ?>
        <button onclick="filterByBrand('<?php echo htmlspecialchars($brand['name']); ?>')" 
                class="brand-chip px-2 sm:px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs transition-colors">
            <?php echo htmlspecialchars($brand['name']); ?>
        </button>
        <?php endforeach; ?>
    </div>
    
    <!-- ОСТАЛЬНАЯ ЧАСТЬ ВАШЕГО HTML КОДА -->
    <!-- (услуги, калькулятор, преимущества, FAQ, отзывы, контакты, футер) -->
    
    <script>
        // Передаем данные из PHP в JavaScript
        var phpProducts = <?php echo json_encode($products); ?>;
        var phpBrands = <?php echo json_encode($brands); ?>;
        
        // Функция добавления в корзину (адаптированная под БД)
        function addToCart(productId) {
            fetch('ajax/add-to-cart.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({product_id: productId})
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Товар добавлен в корзину');
                    updateCartCount(data.count);
                }
            });
        }
        
        // Функция открытия страницы товара
        function openProductPage(id) {
            window.location.href = 'product.php?id=' + id;
        }
        
        // Функция фильтрации по бренду
        function filterByBrand(brand) {
            document.getElementById('search-input').value = brand;
            filterProducts();
        }
    </script>
    
    <!-- ВАШИ ОСТАЛЬНЫЕ СКРИПТЫ -->
</body>
</html>
