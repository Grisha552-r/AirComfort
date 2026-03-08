// products.js
const productsData = [
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
      'https://raw.githubusercontent.com/Grisha552-r/AirCom-fort/main/img/products/ballu-1.jpg',
      'https://raw.githubusercontent.com/Grisha552-r/AirCom-fort/main/img/products/ballu-2.jpg'
    ],
    description: 'Надежный кондиционер для небольших помещений.',
    fullDescription: 'Ballu BSO-07HN1 - надежная сплит-система для помещений до 20 м²...',
    tags: ['хит'],
    status: 'active',
    createdAt: '2024-01-01T00:00:00.000Z'
  }
  // ... остальные товары
];

// Если нужно, можно добавить функцию для синхронизации с localStorage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData; // для Node.js среды
}
