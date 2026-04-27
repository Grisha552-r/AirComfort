'use client';
import React, { useState } from 'react';

interface PopularProduct {
  name: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  badge?: string;
  rating?: string;
  reviewCount?: string;
  deliveryDate?: string;
  creditInfo?: string;
}

const filterTabs = [
{ label: 'Все', value: 'all' },
{ label: 'до 100 р.', value: 'under100' },
{ label: '200 – 400 р.', value: '200-400' },
{ label: 'от 400 р.', value: 'over400' },
{ label: 'Скидки от 10%', value: 'disc10' },
{ label: 'Скидки от 30%', value: 'disc30' },
{ label: 'Скидки от 50%', value: 'disc50' }];


const popularProducts: PopularProduct[] = [
{
  name: 'Туалетная бумага Veiro Classic 2х слойная (24рул, белый)',
  href: 'https://www.21vek.by/tissue_papers/classic2_veiro.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/classic2/veiro/classic2_veiro_01.jpg',
  imgAlt: 'Туалетная бумага Veiro Classic 2х слойная (24рул)',
  price: '11,64 р.',
  badge: 'ШОПЦЕНА',
  rating: '4.9',
  reviewCount: '456',
  deliveryDate: 'Завтра'
},
{
  name: 'Зубная паста Elmex Caries Protection Whitening (75мл)',
  href: 'https://www.21vek.by/oral_care_products/cariesprotectionwhitening_elmex_8734543.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/8734/543/cariesprotectionwhitening_elmex_8734543_01.jpg',
  imgAlt: 'Зубная паста Elmex Caries Protection Whitening (75мл)',
  price: '11,72 р.',
  badge: 'ШОПЦЕНА',
  rating: '5.0',
  reviewCount: '136',
  deliveryDate: 'Завтра'
},
{
  name: 'Сухой корм для собак Chappi С говядиной по-домашнему с овощами (15кг)',
  href: 'https://www.21vek.by/animal_feeding/chappi_.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/chappi/chappi_01.jpg',
  imgAlt: 'Сухой корм для собак Chappi (15кг)',
  price: '89,99 р.',
  badge: 'ШОПЦЕНа',
  rating: '5.0',
  reviewCount: '736',
  deliveryDate: 'Завтра',
  creditInfo: 'от 3,20 р/мес'
},
{
  name: 'Пуф Mio Tesoro 25x25x25 / 1101-3-1 (серый)',
  href: 'https://www.21vek.by/cushioned_furniture/25x25x25110131_mio_tesoro_8895183.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/8895/183/25x25x25110131_mio_tesoro_8895183_01.jpg',
  imgAlt: 'Пуф Mio Tesoro 25x25x25 / 1101-3-1 (серый)',
  price: '22,22 р.',
  badge: 'ШОПЦЕНА',
  rating: '4.8',
  reviewCount: '218',
  deliveryDate: 'Завтра'
},
{
  name: 'Крем для лица ISISPHARMA Ruboril Metroruboril A.Z от сильных покраснений (30мл)',
  href: 'https://www.21vek.by/face_creams/ruborilmetroruborilaz_isis_pharma.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/ruboril/isis/ruborilmetroruborilaz_isis_pharma_01.jpg',
  imgAlt: 'Крем для лица ISISPHARMA Ruboril Metroruboril A.Z (30мл)',
  price: '63,55 р.',
  oldPrice: '74,50 р.',
  discount: '-15%',
  rating: '5.0',
  reviewCount: '295',
  deliveryDate: 'Завтра',
  creditInfo: 'от 2,26 р/мес'
},
{
  name: 'Соль для посудомоечных машин Finish Специальная (1.5кг)',
  href: 'https://www.21vek.by/dishwasher_products/finish_69583.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/finish/69583/finish_69583_01.jpg',
  imgAlt: 'Соль для посудомоечных машин Finish Специальная (1.5кг)',
  price: '9,99 р.',
  oldPrice: '13,00 р.',
  discount: '-23%',
  rating: '5.0',
  reviewCount: '363',
  deliveryDate: 'Завтра'
},
{
  name: 'Сухой корм для собак Рэкс Для взрослых собак средних и крупных пород (20кг)',
  href: 'https://www.21vek.by/animal_feeding/reks_03.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/reks/03/reks_03_01.jpg',
  imgAlt: 'Сухой корм для собак Рэкс (20кг)',
  price: '64,89 р.',
  badge: 'ШОПЦЕНА',
  rating: '4.9',
  reviewCount: '943',
  deliveryDate: 'Завтра',
  creditInfo: 'от 2,31 р/мес'
},
{
  name: 'Паста для укладки волос NishMan M1 Hair Defining Paste (30мл)',
  href: 'https://www.21vek.by/hair_styling_products/m1hairdefiningpaste_nish_man_9546542.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/9546/542/m1hairdefiningpaste_nish_man_9546542_01.jpg',
  imgAlt: 'Паста для укладки волос NishMan M1 Hair Defining Paste (30мл)',
  price: '19,50 р.',
  badge: 'ШОПЦЕНА',
  rating: '4.9',
  reviewCount: '167',
  deliveryDate: 'Завтра'
},
{
  name: 'Наполнитель для фильтра Мозырьсоль Соль таблетированная универсальная (25кг)',
  href: 'https://www.21vek.by/filter_accessories/mozyrsol_7316486.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7316/486/mozyrsol_7316486_01.jpg',
  imgAlt: 'Наполнитель для фильтра Мозырьсоль (25кг)',
  price: '25,99 р.',
  oldPrice: '30,50 р.',
  discount: '-15%',
  rating: '5.0',
  reviewCount: '257',
  deliveryDate: 'Завтра'
},
{
  name: 'Сотовый поликарбонат Werdeplast 2100x6000x4мм 0.45кг/м.кв (прозрачный)',
  href: 'https://www.21vek.by/polycarbonate/2100x6000x4045_werdeplast_9548767.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/9548/767/2100x6000x4045_werdeplast_9548767_01.jpg',
  imgAlt: 'Сотовый поликарбонат Werdeplast 2100x6000x4мм',
  price: '150,78 р.',
  oldPrice: '170,36 р.',
  discount: '-11%',
  rating: '4.7',
  reviewCount: '119',
  deliveryDate: 'Завтра',
  creditInfo: 'от 5,36 р/мес'
}];


function PopularProductCard({ product }: {product: PopularProduct;}) {
  return (
    <div className="flex flex-col bg-white rounded-[10px] overflow-hidden hover:shadow-md transition-shadow group">
      {/* Image */}
      <div className="relative bg-[#f7f8fa] rounded-t-[10px]" style={{ height: '160px' }}>
        <a href={product.href} className="block w-full h-full">
          <img
            src={product.imgSrc}
            alt={product.imgAlt}
            className="w-full h-full object-contain p-2"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://cdn21vek.by/desktop/_next/static/images/noImage.7700a60d.svg';
            }} />

        </a>
        {product.discount &&
        <div
          className="absolute top-2 left-2 px-1.5 py-0.5 text-xs font-bold text-white rounded"
          style={{ backgroundColor: '#e52e6b' }}>

            {product.discount}
          </div>
        }
        {product.badge && !product.discount &&
        <div
          className="absolute top-2 left-2 px-1.5 py-0.5 text-xs font-bold rounded"
          style={{ backgroundColor: 'rgba(250, 170, 50, 0.16)', color: '#1a1a1a', border: '1px solid rgba(250, 170, 50, 0.4)' }}>

            {product.badge}
          </div>
        }
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        {product.rating &&
        <div className="flex items-center gap-1 mb-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#faaa32">
              <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8.02 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45L6 1z" />
            </svg>
            <span className="text-xs text-[#1a1a1a] font-medium">{product.rating}</span>
            {product.reviewCount && <span className="text-xs text-[#a0a1a3]">({product.reviewCount})</span>}
          </div>
        }
        <a href={product.href} className="text-xs text-[#1a1a1a] hover:text-[#e52e6b] line-clamp-2 leading-tight mb-2 flex-1">
          {product.name}
        </a>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-sm font-bold text-[#1a1a1a]">{product.price}</span>
          {product.oldPrice &&
          <span className="text-xs text-[#a0a1a3] line-through">{product.oldPrice}</span>
          }
        </div>
        {product.creditInfo &&
        <div className="text-xs text-[#0077cc] mb-2">{product.creditInfo}</div>
        }
        <button
          className="w-full h-8 text-xs font-medium text-white rounded flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#e52e6b', borderRadius: '4px' }}>

          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1h1.5l1.2 5.5h5.5l1.2-4H3.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="5" cy="10.5" r="0.8" fill="white" />
            <circle cx="9" cy="10.5" r="0.8" fill="white" />
          </svg>
          {product.deliveryDate || 'В корзину'}
        </button>
      </div>
    </div>);

}

export default function PopularProducts() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <h6 className="text-xl font-bold text-[#1a1a1a]">Популярные</h6>
          <a href="https://www.21vek.by/special_offers/recommend.html" className="text-sm text-[#0077cc] hover:underline">
            Смотреть все
          </a>
        </div>
        {/* Filter tabs */}
        <div className="flex items-center gap-1 flex-wrap">
          {filterTabs.map((tab) =>
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
            activeTab === tab.value ?
            'border-[#e52e6b] text-[#e52e6b] bg-pink-50' :
            'border-[#dcdde0] text-[#1a1a1a] hover:border-[#e52e6b] hover:text-[#e52e6b]'}`
            }>

              {tab.label}
            </button>
          )}
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-5 gap-3">
        {popularProducts.map((product, idx) =>
        <PopularProductCard key={idx} product={product} />
        )}
      </div>

      {/* Show more button */}
      <div className="flex justify-center mt-4">
        <button
          className="px-8 py-2.5 text-sm font-medium text-[#0077cc] border border-[#0077cc] rounded-lg hover:bg-blue-50 transition-colors">

          Показать еще
        </button>
      </div>
    </div>);

}