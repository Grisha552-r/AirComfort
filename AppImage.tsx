'use client';
import React, { useState } from 'react';

interface ProductCardProps {
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

export default function ProductCard({
  name,
  href,
  imgSrc,
  imgAlt,
  price,
  oldPrice,
  discount,
  badge,
  rating,
  reviewCount,
  deliveryDate,
  creditInfo,
}: ProductCardProps) {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="relative flex flex-col bg-white rounded-[10px] overflow-hidden hover:shadow-md transition-shadow group" style={{ minWidth: '180px', maxWidth: '220px' }}>
      {/* Image area */}
      <div className="relative bg-[#f7f8fa] rounded-t-[10px] overflow-hidden" style={{ height: '180px' }}>
        <a href={href} className="block w-full h-full">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-contain p-2"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://cdn21vek.by/desktop/_next/static/images/noImage.7700a60d.svg';
            }}
          />
        </a>

        {/* Discount badge */}
        {discount && (
          <div
            className="absolute top-2 left-2 px-1.5 py-0.5 text-xs font-bold text-white rounded"
            style={{ backgroundColor: '#e52e6b' }}
          >
            {discount}
          </div>
        )}

        {/* ШОПЦЕНА badge */}
        {badge && (
          <div
            className="absolute top-2 left-2 px-1.5 py-0.5 text-xs font-bold rounded"
            style={{ backgroundColor: 'rgba(250, 170, 50, 0.16)', color: '#1a1a1a', border: '1px solid rgba(250, 170, 50, 0.4)' }}
          >
            {badge}
          </div>
        )}

        {/* Favorite button */}
        <button
          onClick={() => setIsFav(!isFav)}
          className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Добавить в избранное"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 12.25l-1.05-.95C2.45 7.9.875 6.475.875 4.725.875 3.3 2.025 2.1 3.5 2.1c.84 0 1.645.385 2.1.98.455-.595 1.26-.98 2.1-.98 1.47 0 2.625 1.2 2.625 2.625 0 1.75-1.575 3.175-5.075 6.58L7 12.25z"
              fill={isFav ? '#e52e6b' : 'none'}
              stroke={isFav ? '#e52e6b' : '#a0a1a3'}
              strokeWidth="1.2"
            />
          </svg>
        </button>
      </div>

      {/* Rating */}
      {rating && (
        <div className="flex items-center gap-1 px-3 pt-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="#faaa32">
            <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8.02 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45L6 1z"/>
          </svg>
          <span className="text-xs text-[#1a1a1a] font-medium">{rating}</span>
          {reviewCount && <span className="text-xs text-[#a0a1a3]">({reviewCount})</span>}
        </div>
      )}

      {/* Product name */}
      <a href={href} className="px-3 pt-1 pb-1 block">
        <span className="text-xs text-[#1a1a1a] line-clamp-2 hover:text-[#e52e6b] transition-colors leading-tight">
          {name}
        </span>
      </a>

      {/* Price */}
      <div className="px-3 pb-1">
        <div className="flex items-baseline gap-1">
          <span className="text-base font-bold text-[#1a1a1a]">{price}</span>
        </div>
        {oldPrice && (
          <span className="text-xs text-[#a0a1a3] line-through">{oldPrice}</span>
        )}
        {creditInfo && (
          <div className="text-xs text-[#0077cc] mt-0.5">{creditInfo}</div>
        )}
      </div>

      {/* Add to cart button */}
      <div className="px-3 pb-3 mt-auto">
        <button
          className="w-full h-8 text-xs font-medium text-white rounded flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#e52e6b', borderRadius: '4px' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1h2l1.5 7h7l1.5-5H4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="6" cy="12" r="1" fill="white"/>
            <circle cx="11" cy="12" r="1" fill="white"/>
          </svg>
          {deliveryDate ? <span>{deliveryDate}</span> : <span>В корзину</span>}
        </button>
      </div>
    </div>
  );
}
