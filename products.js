// products.js
window.productsData = [
  {
    id: 1,
    name: 'Ballu BSO-07HN1',
    brand: 'Ballu',
    price: 850,
    oldPrice: 950,
    area: 'до 20',
    type: 'Настенный',
    inverter: 'Нет',
    heat: '-7',
    color: 'белый',
    specs: [
      'Мощность охлаждения: 2.1 кВт',
      'Мощность обогрева: 2.3 кВт',
      'Энергопотребление: 0.75 кВт',
      'Уровень шума: 23 дБ',
      'Хладагент: R410A'
    ],
    images: [
      'https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+1',
      'https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+2',
      'https://via.placeholder.com/600x400?text=Ballu+BSO-07HN1+3'
    ],
    description: 'Надежный кондиционер для небольших помещений.',
    fullDescription: 'Ballu BSO-07HN1 - надежная сплит-система для помещений до 20 м². Энергосберегающий режим, низкий шум. Идеальное решение для спальни или небольшой гостиной.',
    tags: ['хит'],
    status: 'active',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Electrolux EACS-07HAT/N3',
    brand: 'Electrolux',
    price: 1100,
    oldPrice: null,
    area: '21-29',
    type: 'Настенный',
    inverter: 'Да',
    heat: '-15',
    color: 'серебристый',
    specs: [
      'Мощность охлаждения: 2.5 кВт',
      'Мощность обогрева: 2.7 кВт',
      'Энергопотребление: 0.8 кВт',
      'Уровень шума: 22 дБ',
      'Wi-Fi управление'
    ],
    images: [
      'https://via.placeholder.com/600x400?text=Electrolux+1',
      'https://via.placeholder.com/600x400?text=Electrolux+2'
    ],
    description: 'Инверторная модель с низким уровнем шума.',
    fullDescription: 'Electrolux EACS-07HAT/N3 - инверторный кондиционер, 22 дБ, высокая энергоэффективность. Современный дизайн и удобное управление.',
    tags: ['новинка'],
    status: 'active',
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    name: 'LG P09EP',
    brand: 'LG',
    price: 1450,
    oldPrice: 1650,
    area: '30-39',
    type: 'Настенный',
    inverter: 'Да',
    heat: '-10',
    color: 'белый',
    specs: [
      'Мощность охлаждения: 2.8 кВт',
      'Мощность обогрева: 3.0 кВт',
      'Энергопотребление: 0.9 кВт',
      'Уровень шума: 25 дБ',
      'Плазменный фильтр'
    ],
    images: [
      'https://via.placeholder.com/600x400?text=LG+P09EP+1',
      'https://via.placeholder.com/600x400?text=LG+P09EP+2',
      'https://via.placeholder.com/600x400?text=LG+P09EP+3'
    ],
    description: 'Wi-Fi управление, мощный обогрев.',
    fullDescription: 'LG P09EP - современный кондиционер с Wi-Fi, плазменный фильтр. Высокая производительность и стильный внешний вид.',
    tags: ['распродажа'],
    status: 'active',
    createdAt: new Date().toISOString()
  }
];

console.log('products.js загружен, товаров:', window.productsData.length);
