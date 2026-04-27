'use client';
import React from 'react';

const navItems = [
  { label: 'Уценка', href: '/special_offers/promo.html?discountTypes=sale' },
  { label: 'Велосипеды', href: '/bikes/' },
  { label: 'Ветаптека', href: '/flea_and_tick_prevention/' },
  { label: 'Услуги', href: '/service/' },
  { label: 'Стройка', href: '/construction/' },
  { label: 'Телевизоры', href: '/tv/' },
  { label: 'Кофе', href: '/coffee/' },
  { label: 'Ноутбуки', href: '/notebooks/' },
  { label: 'Смартфоны', href: '/mobile/' },
  { label: '20% кэшбэк для юрлиц', href: '/special_offers/business_cashback.html' },
  { label: 'Холодильники', href: '/refrigerators/' },
];

export default function NavBar() {
  return (
    <div
      className="w-full border-b border-[#dcdde0]"
      style={{ backgroundColor: '#f7f8fa' }}
    >
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex items-center h-[42px] gap-0">
          {/* All promotions */}
          <a
            href="/special_offers/promo.html"
            className="flex items-center gap-1.5 px-3 h-full text-sm font-medium text-[#1a1a1a] hover:text-[#e52e6b] transition-colors flex-shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7L7 1L13 7V13H9V9H5V13H1V7Z" fill="#e52e6b"/>
            </svg>
            <span className="font-semibold">Все акции</span>
          </a>

          <div className="w-px h-5 bg-[#dcdde0] mx-1"></div>

          {/* Nav items */}
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {navItems?.map((item, idx) => (
              <a
                key={idx}
                href={`https://www.21vek.by${item?.href}`}
                className="px-3 h-[42px] flex items-center text-sm text-[#1a1a1a] hover:text-[#e52e6b] transition-colors whitespace-nowrap flex-shrink-0"
              >
                {item?.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
