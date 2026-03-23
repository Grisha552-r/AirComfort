// Products Data
const products = [
    {
        id: 1,
        name: "Сплит-система AirGreen GRI-07IC3 / GRO-07IC3",
        brand: "AirGreen",
        price: 1100,
        oldPrice: null,
        area: "до 20",
        type: "Настенный",
        inverter: "Да",
        heat: "-15",
        specs: [
            "Тип кондиционера: сплит-система",
            "Тип внутреннего блока: настенный",
            "Режимы работы: охлаждение / обогрев",
            "Обслуживаемая площадь: 20 м2",
            "Инверторный: да",
            "Мощность охлаждения: 2,05 кВт",
            "Мощность обогрева: 2,05 кВт"
        ],
        images: [
            "img/products/airgreen-07.jpg",
            "img/products/airgreen-07-2.jpg"
        ],
        description: "Сплит-система AirGreen GRI-07IC3 / GRO-07IC3, обслуживаемая площадь 20 м2, мощность обогрева 2,05 кВт, мощность охлаждения 2,05 кВт",
        fullDescription: "Инверторная сплит-система AIRGREEN серии IC3 Inverter предоставляет множество актуальных возможностей и результативно выполняет охлаждение, нагрев, движение воздушных масс и осушение.",
        tags: [],
        metaTitle: "Купить сплит-систему AirGreen GRI-07IC3 в Гомеле | Цена 1100 BYN",
        metaDesc: "Сплит-система AirGreen GRI-07IC3 по цене 1100 BYN в Гомеле. Площадь 20 м², инвертор, обогрев до -15°C. Доставка, установка, гарантия 3 года."
    },
    {
        id: 2,
        name: "Сплит-система AirGreen GRI-09IC3 / GRO-09IC3",
        brand: "AirGreen",
        price: 1190,
        oldPrice: null,
        area: "21-29",
        type: "Настенный",
        inverter: "Да",
        heat: "-15",
        specs: [
            "Тип кондиционера: сплит-система",
            "Тип внутреннего блока: настенный",
            "Режимы работы: охлаждение / обогрев",
            "Обслуживаемая площадь: 25 м2",
            "Инверторный: да",
            "Мощность охлаждения: 2,63 кВт",
            "Мощность обогрева: 2,63 кВт"
        ],
        images: ["img/products/airgreen-09.jpg"],
        description: "Сплит-система AirGreen GRI-09IC3 / GRO-09IC3, обслуживаемая площадь 25 м2, мощность обогрева 2,63 кВт, мощность охлаждения 2,63 кВт",
        fullDescription: "Инверторная сплит-система AIRGREEN серии IC3 Inverter для помещений до 25 м². Энергоэффективность класса А, хладагент R32.",
        tags: [],
        metaTitle: "Купить сплит-систему AirGreen GRI-09IC3 в Гомеле | Цена 1190 BYN",
        metaDesc: "Сплит-система AirGreen GRI-09IC3 по цене 1190 BYN в Гомеле. Площадь 25 м², инвертор, обогрев до -15°C."
    },
    {
        id: 3,
        name: "Сплит-система AirGreen GRI-12IC3 / GRO-12IC3",
        brand: "AirGreen",
        price: 1350,
        oldPrice: null,
        area: "30-39",
        type: "Настенный",
        inverter: "Да",
        heat: "-15",
        specs: [
            "Тип кондиционера: сплит-система",
            "Тип внутреннего блока: настенный",
            "Режимы работы: охлаждение / обогрев",
            "Обслуживаемая площадь: 35 м2",
            "Инверторный: да",
            "Мощность охлаждения: 3.52 кВт",
            "Мощность обогрева: 3.52 кВт"
        ],
        images: ["img/products/airgreen-12.jpg"],
        description: "Сплит-система AirGreen GRI-12IC3 / GRO-12IC3, обслуживаемая площадь 35 м2, мощность обогрева 3,52 кВт, мощность охлаждения 3,52 кВт",
        fullDescription: "Инверторная сплит-система AIRGREEN серии IC3 Inverter для помещений до 35 м². Энергоэффективность класса А, хладагент R32.",
        tags: ["хит"],
        metaTitle: "Купить сплит-систему AirGreen GRI-12IC3 в Гомеле | Хит продаж",
        metaDesc: "Сплит-система AirGreen GRI-12IC3 по цене 1350 BYN в Гомеле. Площадь 35 м², инвертор, обогрев до -15°C. Хит продаж!"
    },
    {
        id: 4,
        name: "Кондиционер Mitsudai Sento MD-SNC07AI",
        brand: "Mitsudai",
        price: 825,
        oldPrice: null,
        area: "до 20",
        type: "Настенный",
        inverter: "Нет",
        heat: "-7",
        specs: [
            "Тип: Настенный",
            "Площадь помещения: 22 м2",
            "Инвертор: Нет",
            "Мощность обогрева: 2.07 кВт",
            "Мощность охлаждения: 2.01 кВт"
        ],
        images: ["img/products/mitsudai-07.jpg"],
        description: "сплит-система, мощность охлаждения 2.05 кВт, мощность обогрева 2.2 кВт, обслуживаемая площадь 21 м², шум 24-34 дБ",
        fullDescription: "Кондиционер MITSUDAI MD-SNC07AI с режимами холод/тепло/осушение/вентиляция. Имеет 4D air-flow, режим iFEEL, Turbo режим, ECO режим, функцию «Глубокий сон».",
        tags: [],
        metaTitle: "Кондиционер Mitsudai Sento MD-SNC07AI - купить в Гомеле | AirComfort",
        metaDesc: "Купить Кондиционер Mitsudai Sento MD-SNC07AI по цене 825 BYN в Гомеле. Характеристики, фото, отзывы. Доставка и установка."
    },
    {
        id: 5,
        name: "Кондиционер Electrolux Smartline DC EACS/I-07HSM/N8_V2",
        brand: "Electrolux",
        price: 1580,
        oldPrice: null,
        area: "до 20",
        type: "Настенный",
        inverter: "Да",
        heat: "-15",
        specs: [
            "Тип кондиционера: сплит-система",
            "Тип внутреннего блока: настенный",
            "Режимы работы: охлаждение / обогрев",
            "Мощность охлаждения: 2.20 кВт",
            "Мощность обогрева: 2.78 кВт"
        ],
        images: ["img/products/electrolux-07.jpg"],
        description: "Инверторный кондиционер с Wi-Fi управлением. Мощность охлаждения 2.20 кВт, мощность обогрева 2.78 кВт.",
        fullDescription: "Серия Electrolux Smartline DC N8_V2 — революция в мире интеллектуального кондиционирования! Инверторный компрессор с технологией DC Inverter, интеллектуальное управление через Wi-Fi, голосовое управление с Алисой.",
        tags: ["новинка"],
        metaTitle: "Кондиционер Electrolux Smartline DC EACS/I-07HSM/N8_V2 - купить в Гомеле",
        metaDesc: "Купить Кондиционер Electrolux Smartline DC по цене 1580 BYN в Гомеле. Инвертор, Wi-Fi, голосовое управление. Доставка и установка."
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('aircom_cart')) || [];

function updateCartBadge() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(badge => {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    });
}

function saveCart() {
    localStorage.setItem('aircom_cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.images[0]
        });
    }
    saveCart();
    showNotification(`${product.name} добавлен в корзину`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartPage();
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            renderCartPage();
        }
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Cart Page Rendering
function renderCartPage() {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="ri-shopping-cart-line"></i>
                <h3>Корзина пуста</h3>
                <p>Добавьте товары в корзину, чтобы оформить заказ</p>
                <a href="catalog.html" class="btn btn-primary">Перейти в каталог</a>
            </div>
        `;
        document.getElementById('cart-total').textContent = '0';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">${item.price} BYN</div>
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-total">
                    ${itemTotal} BYN
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="ri-delete-bin-line"></i>
                    </button>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML = html;
    document.getElementById('cart-total').textContent = total;
}

// Product Grid Rendering
function renderProductsGrid(productsToRender, containerId = 'products-grid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!productsToRender || productsToRender.length === 0) {
        container.innerHTML = '<div class="no-products">Товары не найдены</div>';
        return;
    }

    container.innerHTML = productsToRender.map(product => {
        const tagsHtml = product.tags.map(tag => {
            const tagClass = tag === 'хит' ? 'hit' : 'new';
            return `<span class="product-tag ${tagClass}">${tag}</span>`;
        }).join('');

        const oldPriceHtml = product.oldPrice ? `<span class="product-old-price">${product.oldPrice} BYN</span>` : '';

        return `
            <div class="product-card" onclick="location.href='product.html?id=${product.id}'">
                <div class="product-image">
                    <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                    <div class="product-tags">${tagsHtml}</div>
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">
                        ${oldPriceHtml}
                        ${product.price} BYN
                    </div>
                    <div class="product-description">${product.description.substring(0, 80)}...</div>
                    <button class="product-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        В корзину
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Filtering
let filteredProducts = [...products];
let currentPage = 1;
const itemsPerPage = 9;

function filterProducts() {
    const selectedBrands = Array.from(document.querySelectorAll('#brand-filters input:checked')).map(cb => cb.value);
    const selectedTypes = Array.from(document.querySelectorAll('#type-filters input:checked')).map(cb => cb.value);
    const selectedAreas = Array.from(document.querySelectorAll('#area-filters input:checked')).map(cb => cb.value);
    const inverterOnly = document.querySelector('#inverter-filter input:checked')?.value === 'Да';
    
    const minPrice = parseInt(document.getElementById('price-min')?.value || 0);
    const maxPrice = parseInt(document.getElementById('price-max')?.value || 3000);

    filteredProducts = products.filter(product => {
        if (selectedBrands.length && !selectedBrands.includes(product.brand)) return false;
        if (selectedTypes.length && !selectedTypes.includes(product.type)) return false;
        if (selectedAreas.length && !selectedAreas.includes(product.area)) return false;
        if (inverterOnly && product.inverter !== 'Да') return false;
        if (product.price < minPrice || product.price > maxPrice) return false;
        return true;
    });

    currentPage = 1;
    updateProductsDisplay();
    updateProductsCount();
}

function updateProductsDisplay() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);
    renderProductsGrid(paginatedProducts);
    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }
    paginationContainer.innerHTML = html;
}

function goToPage(page) {
    currentPage = page;
    updateProductsDisplay();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProductsCount() {
    const countSpan = document.getElementById('products-count');
    if (countSpan) {
        countSpan.textContent = filteredProducts.length;
    }
}

function resetFilters() {
    document.querySelectorAll('#brand-filters input, #type-filters input, #area-filters input').forEach(cb => cb.checked = false);
    if (document.getElementById('inverter-filter')) {
        document.querySelectorAll('#inverter-filter input').forEach(rb => rb.checked = false);
    }
    if (document.getElementById('price-min')) {
        document.getElementById('price-min').value = 0;
        document.getElementById('price-max').value = 3000;
        document.getElementById('price-min-val').textContent = 0;
        document.getElementById('price-max-val').textContent = 3000;
    }
    filterProducts();
}

function sortProducts() {
    const sortValue = document.getElementById('sort-select')?.value || 'default';
    
    if (sortValue === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name-asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    currentPage = 1;
    updateProductsDisplay();
}

// Calculator
function initCalculator() {
    const serviceSelect = document.getElementById('calc-service');
    const lengthInput = document.getElementById('calc-length');
    const lengthMinus = document.querySelector('.length-minus');
    const lengthPlus = document.querySelector('.length-plus');
    const demontageCheck = document.getElementById('calc-demontage');
    const serviceCheck = document.getElementById('calc-service');
    const totalSpan = document.getElementById('calc-total');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    if (!serviceSelect) return;

    function calculateTotal() {
        let total = parseInt(serviceSelect.value);
        const length = parseInt(lengthInput.value);
        
        if (serviceSelect.value !== '100') {
            total += Math.max(0, length - 3) * 50;
        }
        
        if (demontageCheck?.checked) total += 100;
        if (serviceCheck?.checked) total += 100;
        
        if (totalSpan) totalSpan.textContent = total + ' BYN';
    }

    if (lengthMinus && lengthPlus) {
        lengthMinus.addEventListener('click', () => {
            let val = parseInt(lengthInput.value);
            if (val > 3) {
                lengthInput.value = val - 1;
                calculateTotal();
            }
        });
        
        lengthPlus.addEventListener('click', () => {
            let val = parseInt(lengthInput.value);
            lengthInput.value = val + 1;
            calculateTotal();
        });
    }

    serviceSelect.addEventListener('change', calculateTotal);
    if (demontageCheck) demontageCheck.addEventListener('change', calculateTotal);
    if (serviceCheck) serviceCheck.addEventListener('change', calculateTotal);
    
    calculateTotal();

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
            const total = parseInt(totalSpan.textContent);
            
            cart.push({
                id: 'calc-' + Date.now(),
                name: serviceName,
                price: total,
                quantity: 1,
                image: 'img/icons/service-icon.png'
            });
            saveCart();
            showNotification('Услуга добавлена в корзину');
        });
    }
}

// FAQ Accordion
function initFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-visible');
        });
    }
}

// Mobile Filters
function initMobileFilters() {
    const filterSidebar = document.querySelector('.catalog-filters');
    if (filterSidebar && window.innerWidth <= 768) {
        const filterToggle = document.createElement('button');
        filterToggle.className = 'btn btn-outline mobile-filter-toggle';
        filterToggle.textContent = 'Показать фильтры';
        filterToggle.addEventListener('click', () => {
            filterSidebar.classList.toggle('mobile-visible');
        });
        
        const catalogHeader = document.querySelector('.catalog-header');
        if (catalogHeader) {
            catalogHeader.parentNode.insertBefore(filterToggle, catalogHeader);
        }
    }
}

// Price Range Slider
function initPriceRange() {
    const minSlider = document.getElementById('price-min');
    const maxSlider = document.getElementById('price-max');
    const minVal = document.getElementById('price-min-val');
    const maxVal = document.getElementById('price-max-val');
    
    if (minSlider && maxSlider) {
        function updatePriceRange() {
            let min = parseInt(minSlider.value);
            let max = parseInt(maxSlider.value);
            if (min > max) {
                [min, max] = [max, min];
                minSlider.value = min;
                maxSlider.value = max;
            }
            minVal.textContent = min;
            maxVal.textContent = max;
            filterProducts();
        }
        
        minSlider.addEventListener('input', updatePriceRange);
        maxSlider.addEventListener('input', updatePriceRange);
    }
}

// Popular Products on Homepage
function loadPopularProducts() {
    const container = document.getElementById('popular-products');
    if (container) {
        const popular = products.filter(p => p.tags && p.tags.includes('хит')).slice(0, 3);
        renderProductsGrid(popular, 'popular-products');
    }
}

// Product Page
function loadProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) return;
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        document.querySelector('.product-page-content').innerHTML = '<h2>Товар не найден</h2>';
        return;
    }
    
    // Update meta tags
    document.title = product.metaTitle || `${product.name} | AirComfort`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = product.metaDesc || `Купить ${product.name} по цене ${product.price} BYN в Гомеле. Характеристики, фото, отзывы. Доставка и установка.`;
    
    // Render product
    const container = document.querySelector('.product-page-content');
    if (!container) return;
    
    const mainImage = product.images[0];
    const thumbnails = product.images.slice(1).map(img => `<img src="${img}" onclick="changeMainImage(this.src)">`).join('');
    
    const tagsHtml = product.tags.map(tag => {
        const tagClass = tag === 'хит' ? 'hit' : 'new';
        return `<span class="product-tag ${tagClass}">${tag}</span>`;
    }).join('');
    
    const oldPriceHtml = product.oldPrice ? `<span class="product-old-price">${product.oldPrice} BYN</span>` : '';
    
    const specsHtml = product.specs.map(spec => {
        const parts = spec.split(':');
        if (parts.length > 1) {
            return `<div class="spec-row"><span class="spec-label">${parts[0]}:</span><span class="spec-value">${parts.slice(1).join(':')}</span></div>`;
        }
        return `<div class="spec-row"><span class="spec-value">${spec}</span></div>`;
    }).join('');
    
    container.innerHTML = `
        <div class="product-detail">
            <div class="product-gallery">
                <div class="main-image">
                    <img src="${mainImage}" alt="${product.name}" id="main-product-image">
                </div>
                <div class="thumbnails">
                    ${thumbnails}
                </div>
            </div>
            <div class="product-info-detail">
                <div class="product-tags">${tagsHtml}</div>
                <h1>${product.name}</h1>
                <div class="product-price-detail">
                    ${oldPriceHtml}
                    <span class="current-price">${product.price} BYN</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="ri-shopping-cart-line"></i> В корзину
                    </button>
                </div>
                <div class="product-meta">
                    <p><i class="ri-shield-check-line"></i> Гарантия до 5 лет</p>
                    <p><i class="ri-truck-line"></i> Бесплатная доставка по Гомелю</p>
                    <p><i class="ri-install-line"></i> Профессиональный монтаж</p>
                </div>
            </div>
        </div>
        <div class="product-tabs">
            <div class="tabs-header">
                <button class="tab-btn active" data-tab="specs">Характеристики</button>
                <button class="tab-btn" data-tab="description">Описание</button>
            </div>
            <div class="tabs-content">
                <div class="tab-pane active" id="specs">
                    <div class="specs-table">${specsHtml}</div>
                </div>
                <div class="tab-pane" id="description">
                    <p>${product.fullDescription || product.description}</p>
                </div>
            </div>
        </div>
    `;
    
    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });
}

function changeMainImage(src) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) mainImage.src = src;
}

// Checkout Page
function renderCheckoutPage() {
    const cartItemsContainer = document.getElementById('checkout-cart-items');
    const totalSpan = document.getElementById('checkout-total');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Корзина пуста. <a href="catalog.html">Перейти в каталог</a></p>';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <div class="checkout-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>${itemTotal} BYN</span>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    totalSpan.textContent = total;
}

function submitOrder() {
    const name = document.getElementById('order-name')?.value;
    const phone = document.getElementById('order-phone')?.value;
    const address = document.getElementById('order-address')?.value;
    const email = document.getElementById('order-email')?.value;
    const payment = document.querySelector('input[name="payment"]:checked')?.value;
    
    if (!name || !phone || !address) {
        alert('Заполните все обязательные поля');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemsList = cart.map(item => `${item.name} - ${item.quantity} шт x ${item.price} BYN = ${item.price * item.quantity} BYN`).join('\n');
    
    const orderText = `Новый заказ\n\nКлиент: ${name}\nТелефон: ${phone}\nАдрес: ${address}\nEmail: ${email || 'не указан'}\nОплата: ${payment}\n\nСостав заказа:\n${itemsList}\n\nОбщая сумма: ${total} BYN`;
    
    // Send to Formspree
    fetch('https://formspree.io/f/mrbkdwwe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email || 'aircomfortbel@gmail.com',
            message: orderText,
            _subject: 'НОВЫЙ ЗАКАЗ',
            _replyto: email || 'aircomfortbel@gmail.com'
        })
    })
    .then(response => {
        if (response.ok) {
            cart = [];
            saveCart();
            document.getElementById('order-success').style.display = 'block';
            document.getElementById('checkout-form').style.display = 'none';
            setTimeout(() => {
                window.location.href = 'catalog.html';
            }, 3000);
        } else {
            alert('Ошибка при оформлении заказа. Попробуйте позже или свяжитесь с нами по телефону.');
        }
    })
    .catch(() => {
        alert('Ошибка при оформлении заказа. Попробуйте позже или свяжитесь с нами по телефону.');
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    initCalculator();
    initFaq();
    initMobileMenu();
    initMobileFilters();
    initPriceRange();
    loadPopularProducts();
    
    // Check if on catalog page
    if (document.getElementById('products-grid')) {
        filterProducts();
        
        const applyBtn = document.querySelector('.filter-apply');
        const resetBtn = document.querySelector('.filter-reset');
        const sortSelect = document.getElementById('sort-select');
        
        if (applyBtn) applyBtn.addEventListener('click', filterProducts);
        if (resetBtn) resetBtn.addEventListener('click', resetFilters);
        if (sortSelect) sortSelect.addEventListener('change', sortProducts);
    }
    
    // Check if on cart page
    if (document.getElementById('cart-items')) {
        renderCartPage();
    }
    
    // Check if on checkout page
    if (document.getElementById('checkout-cart-items')) {
        renderCheckoutPage();
        
        const submitBtn = document.getElementById('submit-order');
        if (submitBtn) submitBtn.addEventListener('click', submitOrder);
    }
    
    // Check if on product page
    if (document.querySelector('.product-page-content')) {
        loadProductPage();
    }
    
    // Floating buttons
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .mobile-visible {
            display: block !important;
        }
        
        .notification {
            animation: slideIn 0.3s ease;
        }
        
        .empty-cart {
            text-align: center;
            padding: 40px;
        }
        
        .empty-cart i {
            font-size: 4rem;
            color: var(--gray);
            margin-bottom: 16px;
        }
        
        .cart-item {
            display: flex;
            gap: 20px;
            padding: 20px;
            border-bottom: 1px solid var(--border);
        }
        
        .cart-item-image {
            width: 80px;
            height: 80px;
            flex-shrink: 0;
        }
        
        .cart-item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }
        
        .cart-item-info {
            flex: 1;
        }
        
        .cart-item-info h4 {
            font-size: 1rem;
            margin-bottom: 8px;
        }
        
        .cart-item-price {
            color: var(--gray);
            font-size: 0.875rem;
            margin-bottom: 8px;
        }
        
        .cart-item-quantity {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .cart-item-quantity button {
            width: 30px;
            height: 30px;
            border: 1px solid var(--border);
            background: var(--white);
            border-radius: 6px;
            cursor: pointer;
        }
        
        .cart-item-total {
            text-align: right;
            font-weight: 600;
            min-width: 100px;
        }
        
        .remove-btn {
            background: none;
            border: none;
            color: #ef4444;
            cursor: pointer;
            margin-top: 8px;
        }
        
        .checkout-item {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid var(--border);
        }
        
        .product-detail {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .product-gallery .main-image img {
            width: 100%;
            border-radius: var(--radius);
        }
        
        .thumbnails {
            display: flex;
            gap: 10px;
            margin-top: 16px;
        }
        
        .thumbnails img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            border: 2px solid transparent;
        }
        
        .thumbnails img:hover {
            border-color: var(--primary);
        }
        
        .product-info-detail h1 {
            font-size: 1.75rem;
            margin-bottom: 16px;
        }
        
        .product-price-detail {
            margin-bottom: 24px;
        }
        
        .current-price {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary);
        }
        
        .product-meta {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid var(--border);
        }
        
        .product-meta p {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .product-tabs {
            margin-top: 40px;
        }
        
        .tabs-header {
            display: flex;
            gap: 16px;
            border-bottom: 2px solid var(--border);
        }
        
        .tab-btn {
            padding: 12px 24px;
            background: none;
            border: none;
            cursor: pointer;
            font-weight: 500;
            color: var(--gray);
        }
        
        .tab-btn.active {
            color: var(--primary);
            border-bottom: 2px solid var(--primary);
            margin-bottom: -2px;
        }
        
        .tab-pane {
            display: none;
            padding: 24px 0;
        }
        
        .tab-pane.active {
            display: block;
        }
        
        .specs-table {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .spec-row {
            display: flex;
            padding: 8px 0;
            border-bottom: 1px dashed var(--border);
        }
        
        .spec-label {
            font-weight: 600;
            width: 200px;
            flex-shrink: 0;
        }
        
        .spec-value {
            color: var(--gray);
        }
        
        @media (max-width: 768px) {
            .product-detail {
                grid-template-columns: 1fr;
            }
            
            .spec-row {
                flex-direction: column;
            }
            
            .spec-label {
                width: auto;
                margin-bottom: 4px;
            }
            
            .cart-item {
                flex-direction: column;
            }
            
            .cart-item-total {
                text-align: left;
            }
        }
    `;
    document.head.appendChild(style);
});
