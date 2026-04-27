'use client';
import React, { useState } from 'react';

export default function Header() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="w-full"
      style={{ backgroundColor: '#f7f8fa' }}
    >
      {/* Top row */}
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-10">
        {/* Left: city + links */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:text-[#e52e6b] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z" fill="#e52e6b"/>
            </svg>
            <span>г. Минск</span>
          </button>

          <div className="flex items-center gap-4">
            <a href="/special_offers/partly_pay.html" className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:text-[#e52e6b] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="#e52e6b" strokeWidth="1.5"/>
                <path d="M1 6h14" stroke="#e52e6b" strokeWidth="1.5"/>
                <path d="M4 10h3" stroke="#e52e6b" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Оплата частями</span>
            </a>
            <a href="/b2b/" className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:text-[#e52e6b] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="5" width="12" height="9" rx="1" stroke="#0077cc" strokeWidth="1.5"/>
                <path d="M5 5V4a3 3 0 0 1 6 0v1" stroke="#0077cc" strokeWidth="1.5"/>
              </svg>
              <span>Для бизнеса</span>
            </a>
            <button className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:text-[#e52e6b] transition-colors">
              <span>Покупателям</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right: telegram, phone, contact center */}
        <div className="flex items-center gap-4">
          <a href="https://t.me/online21vekbybot" className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:text-[#e52e6b] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" fill="#2AABEE"/>
              <path d="M3.5 7.8l7.5-2.9-1.1 5.5-2.2-1.7-1.1 1.1V8.5L9.5 6.5 5.5 8.8 3.5 7.8z" fill="white"/>
            </svg>
            <span>Telegram</span>
          </a>
          <div className="flex items-center gap-1 text-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h3l1 3-1.5 1.5a8 8 0 0 0 3 3L9 8l3 1v3a1 1 0 0 1-1 1A11 11 0 0 1 1 3a1 1 0 0 1 1-1z" fill="#e52e6b"/>
            </svg>
            <span className="font-bold">+375 29</span>
            <span>302 10 21</span>
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-0.5 text-sm text-[#1a1a1a] hover:text-[#e52e6b]"
            >
              <span>Еще</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#1a1a1a]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#1a1a1a" strokeWidth="1.5"/>
              <path d="M8 4v4l2.5 2.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-[#a0a1a3]">контакт-центр</span>
              <span className="text-xs">с 8:00 до 22:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
