// Основные функции магазина
class AirComfortShop {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.init();
  }
  
  init() {
    this.updateCartCount();
    this.bindEvents();
    this.loadCategories();
  }
  
  // Обновление счетчика корзины
  updateCartCount() {
    const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartElement = document.getElementById('cart-count');
    if (cartElement) {
      cartElement.textContent = count;
    }
  }
  
  // Добавление товара в корзину
  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += product.quantity || 1;
    } else {
      this.cart.push({
        ...product,
        quantity: product.quantity || 1,
        addedAt: new Date().toISOString()
      });
    }
    
    this.saveCart();
    this.updateCartCount();
    this.showNotification(`Товар "${product.name}" добавлен в корзину`, 'success');
  }
  
  // Удаление товара из корзины
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartCount();
    this.showNotification('Товар удален из корзины', 'info');
  }
  
  // Обновление количества товара
  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
  }
  
  // Сохранение корзины в localStorage
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  
  // Расчет общей суммы корзины
  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  // Показать уведомление
  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const colors = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      info: 'bg-blue-500',
      warning: 'bg-yellow-500'
    };
    
    notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Автоматическое скрытие
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
  
  // Загрузка категорий товаров
  async loadCategories() {
    try {
      const response = await fetch('/data/categories.json');
      const categories = await response.json();
      this.renderCategories(categories);
    } catch (error) {
      console.error('Ошибка загрузки категорий:', error);
    }
  }
  
  // Отображение категорий
  renderCategories(categories) {
    const container = document.getElementById('categories-container');
    if (!container) return;
    
    container.innerHTML = categories.map(category => `
      <div class="category-card">
        <a href="/catalog/${category.slug}" class="block">
          <div class="category-icon">
            <i class="${category.icon}"></i>
          </div>
          <h3>${category.name}</h3>
          <p>${category.description}</p>
        </a>
      </div>
    `).join('');
  }
  
  // Поиск товаров
  searchProducts(query) {
    // Реализация поиска
  }
  
  // Фильтрация товаров
  filterProducts(filters) {
    // Реализация фильтрации
  }
  
  // Привязка событий
  bindEvents() {
    // Добавление товаров в корзину
    document.addEventListener('click', (e) => {
      if (e.target.closest('.add-to-cart')) {
        const button = e.target.closest('.add-to-cart');
        const productId = button.dataset.productId;
        const productName = button.dataset.productName;
        const productPrice = parseFloat(button.dataset.productPrice);
        
        this.addToCart({
          id: productId,
          name: productName,
          price: productPrice
        });
      }
    });
  }
}

// Инициализация магазина
const shop = new AirComfortShop();
