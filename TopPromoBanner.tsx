'use client';
import React, { useState, useEffect } from 'react';

const slides = [
{
  id: 1,
  src: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/main/desktop/69e206352fe48.jpg',
  alt: 'Большая распродажа до -70%',
  href: 'https://www.21vek.by/special_offers/appsale.html'
},
{
  id: 2,
  src: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/main/desktop/69dbf0c1ca407.jpg',
  alt: 'Культиваторы, навесное, прицепы',
  href: 'https://www.21vek.by/special_offers/cultivators.html'
},
{
  id: 3,
  src: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/main/desktop/69dbf31e8b4e8.jpg',
  alt: 'Уличное освещение СТМ',
  href: 'https://www.21vek.by/special_offers/street_lighting.html'
},
{
  id: 4,
  src: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/main/desktop/69dbf2851231d.jpg',
  alt: 'Вентиляторы, кондиционеры',
  href: 'https://www.21vek.by/special_offers/air21.html'
},
{
  id: 5,
  src: 'https://cdn21vek.by/imgproxy/quality_90/plain/img/banners/main/desktop/69dcca3daaa29.jpg',
  alt: 'Мебель новинки',
  href: 'https://www.21vek.by/special_offers/furnituresale.html'
}];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides?.length) % slides?.length);
  const next = () => setCurrent((c) => (c + 1) % slides?.length);

  return (
    <div className="relative overflow-hidden" style={{ height: '360px' }}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}>

        {slides?.map((slide) =>
        <a
          key={slide?.id}
          href={slide?.href}
          className="flex-shrink-0 w-full h-full block"
          target="_blank"
          rel="noreferrer">

            <img
            src={slide?.src}
            alt={slide?.alt}
            className="w-full h-full object-cover" />

          </a>
        )}
      </div>
      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Previous slide">

        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M7 1L1 7L7 13" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        aria-label="Next slide">

        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M1 1L7 7L1 13" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {slides?.map((_, idx) =>
        <button
          key={idx}
          onClick={() => setCurrent(idx)}
          className={`w-2 h-2 rounded-full transition-all ${
          idx === current ? 'bg-white w-4' : 'bg-white/50'}`
          } />

        )}
      </div>
    </div>);

}