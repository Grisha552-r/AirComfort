'use client';
import React from 'react';

interface BrandItem {
  name: string;
  subtitle: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const brands: BrandItem[] = [
{
  name: 'Xiaomi',
  subtitle: 'выгодные предложения',
  href: 'https://www.21vek.by/special_offers/xiaomi21.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/brands/xiaomi.png',
  imgAlt: 'Xiaomi'
},
{
  name: 'Смартфоны',
  subtitle: 'восстановленные Apple',
  href: 'https://www.21vek.by/mobile/all/apple/?order%5Bpopularity%5D=desc&filter%5Bsa%5D=&filter%5B2478%5D%5B0%5D=4079074',
  imgSrc: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/brands/apple.png',
  imgAlt: 'Смартфоны'
},
{
  name: 'Guard',
  subtitle: 'входные двери',
  href: 'https://www.21vek.by/doors/all/guard/',
  imgSrc: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/brands/guard.png',
  imgAlt: 'Guard'
},
{
  name: 'Mio Tesor',
  subtitle: 'кухонные уголки и этажерки',
  href: 'https://www.21vek.by/special_offers/mio_tesoro_kitchen.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/brands/mio_tesoro.png',
  imgAlt: 'Mio Tesoro'
},
{
  name: 'Sundays Home',
  subtitle: 'рулонные шторы',
  href: 'https://www.21vek.by/blinds/all/sundays_home/?order%5Bpopularity%5D=desc&filter%5Bsa%5D=&filter%5B7835%5D%5B0%5D=28631',
  imgSrc: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/brands/sundays_home.png',
  imgAlt: 'Sundays Home'
},
{
  name: 'Mio Tesoro',
  subtitle: 'коврики',
  href: 'https://www.21vek.by/carpets/all/mio_tesoro/',
  imgSrc: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/brands/mio_tesoro2.png',
  imgAlt: 'Mio Tesoro'
},
{
  name: 'Garvill',
  subtitle: 'мойки высокого давления',
  href: 'https://www.21vek.by/pressure_washers/all/garvill/',
  imgSrc: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/brands/garvill.png',
  imgAlt: 'Garvill'
},
{
  name: 'Kitfort',
  subtitle: 'фабрика новинок',
  href: 'https://www.21vek.by/special_offers/kitfort_tech.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/brands/kitfort.png',
  imgAlt: 'Kitfort'
}];


export default function BrandPanel() {
  return (
    <div className="flex flex-col gap-2">
      {brands.map((brand, idx) =>
      <a
        key={idx}
        href={brand.href}
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
        target="_blank"
        rel="noreferrer">

          {/* Brand logo placeholder */}
          <div
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-gray-100">

            <span className="text-xs font-bold text-gray-500 text-center leading-tight px-1">
              {brand.name.substring(0, 6)}
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#e52e6b] transition-colors truncate">
              {brand.name}
            </span>
            <span className="text-xs text-[#a0a1a3] truncate">{brand.subtitle}</span>
          </div>
        </a>
      )}
    </div>);

}