'use client';
import React, { useRef } from 'react';
import ProductCard from './ProductCard';

interface Product {
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

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllHref?: string;
}

export default function ProductSection({ title, products, viewAllHref }: ProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-[#1a1a1a]">{title}</h3>
        {viewAllHref && (
          <a href={viewAllHref} className="text-sm text-[#0077cc] hover:underline">
            Смотреть все
          </a>
        )}
      </div>
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Scroll left"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M7 1L1 7L7 13" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Products scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map((product, idx) => (
            <div key={idx} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Scroll right"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M1 1L7 7L1 13" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
