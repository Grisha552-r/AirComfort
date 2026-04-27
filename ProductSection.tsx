'use client';
import React from 'react';

const footerColumns = [
{
  title: 'Покупателям',
  links: [
  { label: 'Доставка', href: '/services/delivery.html' },
  { label: 'Политика конфиденциальности', href: '/services/personal_data.html' },
  { label: 'Обработка файлов cookie', href: '/services/cookie_policy.html' },
  { label: 'Порядок обработки обращений', href: '/services/electronic_appeals.html' },
  { label: 'Политика видеонаблюдения', href: '/services/video_surveillance.html' },
  { label: 'Оплата', href: '/services/order.html' },
  { label: 'Самовывоз', href: '/services/self_delivery.html' },
  { label: 'Страхование', href: '/services/insurance.html' },
  { label: 'Публичная оферта', href: '/services/public_offer.html' },
  { label: 'Программа привилегий 21vek.by', href: '/services/premium_offer.html' },
  { label: 'Контакты', href: '/services/contacts.html' },
  { label: 'Отзывы', href: '/services/reviews.html' }]

},
{
  title: 'Выгодные предложения',
  links: [
  { label: 'Оплата частями', href: '/special_offers/partly_pay.html' },
  { label: 'Уцененные товары', href: '/special_offers/sales.html' },
  { label: 'Все акции', href: '/special_offers/promo.html' },
  { label: 'Рекомендуемые товары', href: '/special_offers/recommend.html' },
  { label: 'Умный подбор подарков', href: '/special_offers/presents.html' },
  { label: 'Товары премиум-класса', href: '/special_offers/luxury.html' }]

},
{
  title: 'Компания',
  links: [
  { label: 'Транспортные услуги', href: '/company/trucking.html' },
  { label: 'Новости', href: '/company/news/' },
  { label: 'Вакансии', href: '/company/vacancies.html' },
  { label: 'Для бизнеса', href: '/company/corporate_clients.html' },
  { label: 'Акция Бизнес-шоппинг', href: '/company/business_shopping.html' },
  { label: 'Отсрочка оплаты для юрлиц и ИП', href: '/company/payment_deferral.html' },
  { label: 'Оптовые продажи', href: '/company/wholesale.html' },
  { label: 'Партнерская программа', href: '/company/partnership.html' },
  { label: 'Партнерская программа «Мост»', href: '/company/partnership_most.html' },
  { label: 'Партнерская программа «Зараз»', href: '/company/partnership_zaraz.html' },
  { label: 'Поставщикам', href: '/company/suppliers.html' },
  { label: 'Перевозчикам', href: '/company/carriers.html' },
  { label: 'Арендодателям', href: '/company/landlords.html' },
  { label: 'О нас', href: '/company/about.html' },
  { label: 'Миссия и ценности', href: '/company/mission.html' },
  { label: 'Реквизиты', href: '/company/details.html' }]

},
{
  title: 'Полезная информация',
  links: [
  { label: 'Ремонт техники', href: '/info/repair.html' },
  { label: 'Замена и возврат товара', href: '/info/return.html' },
  { label: 'Программа «Надежная защита»', href: '/info/extended_warranty.html' },
  { label: 'Дополнительные услуги', href: '/info/maintenance.html' },
  { label: 'Подарочные сертификаты', href: '/info/gift_certificate.html' },
  { label: 'Сервисные центры', href: '/info/service_centres.html' },
  { label: 'Получайте бонусы за покупки', href: '/info/bonus.html' },
  { label: 'Как совершить покупку', href: '/info/how_to_buy.html' },
  { label: 'Как использовать промокод', href: '/info/about_promocodes.html' },
  { label: 'Помощь в выборе', href: '/info/howto/' },
  { label: 'Производители', href: '/info/brands/' },
  { label: 'Приложение «Электронный ЗНАК»', href: '/info/datamark.html' },
  { label: 'Каналы связи', href: '/info/contacts.html' }]

}];


export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f7f8fa' }}>
      {/* Subscription section */}
      <div className="border-t border-[#dcdde0]">
        <div className="max-w-[1280px] mx-auto px-4 py-6">
          <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm">
            {/* Mailbox icon */}
            <div className="flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="#fff0f5" />
                <path d="M8 16a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V16z" stroke="#e52e6b" strokeWidth="2" />
                <path d="M8 16l16 11L40 16" stroke="#e52e6b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#1a1a1a]">
                Подпишитесь и <strong>получайте больше скидок</strong> на весь ассортимент наших товаров!
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <input
                type="email"
                placeholder="Введите почту"
                className="h-10 px-4 border border-[#dcdde0] rounded-lg text-sm outline-none focus:border-[#0077cc] w-64" />

              <button
                className="h-10 w-10 flex items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: '#0077cc' }}>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer links */}
      <div className="border-t border-[#dcdde0]">
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <div className="grid grid-cols-5 gap-6">
            {/* 4 link columns */}
            {footerColumns?.map((col, idx) =>
            <div key={idx}>
                <h4 className="text-sm font-bold text-[#1a1a1a] mb-3">{col?.title}</h4>
                <ul className="space-y-1.5">
                  {col?.links?.map((link, lidx) =>
                <li key={lidx}>
                      <a
                    href={`https://www.21vek.by${link?.href}`}
                    className="text-xs text-[#1a1a1a] hover:text-[#e52e6b] transition-colors">

                        {link?.label}
                      </a>
                    </li>
                )}
                </ul>
              </div>
            )}

            {/* App download column */}
            <div>
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn21vek.by/desktop/_next/static/images/qr-code.593cea8a.png"
                  alt="QR code"
                  className="w-24 h-24 mb-2" />

                <p className="text-xs text-[#a0a1a3] text-center mb-3">
                  Наведите камеру на QR‑код для установки приложения
                </p>
                <div className="flex flex-col gap-2 w-full">
                  <a
                    href="https://redirect.appmetrica.yandex.com/serve/966237340966133269"
                    className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-1.5 hover:bg-gray-800 transition-colors">

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <path d="M11.5 8.5L4.5 12.5V4.5L11.5 8.5Z" />
                    </svg>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[9px] opacity-70">Google Play</span>
                      <span className="text-xs font-medium">Google Play</span>
                    </div>
                  </a>
                  <a
                    href="https://redirect.appmetrica.yandex.com/serve/678006966139793892"
                    className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-1.5 hover:bg-gray-800 transition-colors">

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 2a5 5 0 1 1 0 10A5 5 0 0 1 8 3z" />
                    </svg>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[9px] opacity-70">App Store</span>
                      <span className="text-xs font-medium">App Store</span>
                    </div>
                  </a>
                  <a
                    href="https://redirect.appmetrica.yandex.com/serve/966237334674679776"
                    className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-1.5 hover:bg-gray-800 transition-colors">

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <rect x="2" y="2" width="12" height="12" rx="2" />
                    </svg>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[9px] opacity-70">Апп Галерея</span>
                      <span className="text-xs font-medium">Апп Галерея</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom footer */}
      <div className="border-t border-[#dcdde0]">
        <div className="max-w-[1280px] mx-auto px-4 py-4">
          <div className="flex items-start justify-between gap-6">
            {/* Contacts */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-[#1a1a1a]">+375 29 302-10-21</span>
                <span className="text-sm text-[#1a1a1a]">+375 25 502-10-21</span>
                <span className="text-sm text-[#1a1a1a]">+375 17 302-10-21</span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <a href="https://t.me/online21vekbybot" className="flex items-center gap-1 text-sm text-[#0077cc] hover:underline">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#2AABEE" />
                    <path d="M3.5 7.8l7.5-2.9-1.1 5.5-2.2-1.7-1.1 1.1V8.5L9.5 6.5 5.5 8.8 3.5 7.8z" fill="white" />
                  </svg>
                  Telegram
                </a>
                <a href="mailto:21@21vek.by" className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:text-[#e52e6b]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3" width="12" height="8" rx="1" stroke="#1a1a1a" strokeWidth="1.2" />
                    <path d="M1 4l6 4 6-4" stroke="#1a1a1a" strokeWidth="1.2" />
                  </svg>
                  Почта
                </a>
                <button className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:text-[#e52e6b]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2h10v8H2z" stroke="#1a1a1a" strokeWidth="1.2" />
                    <path d="M5 10v2M9 10v2M3 12h8" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  Написать нам
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              <a href="https://vk.com/21vek_by" className="w-8 h-8 rounded-full bg-[#4680C2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  <path d="M7.5 10.5H6.5C6.5 10.5 4 10.5 2 7.5C2 7.5 0.5 5.5 1.5 4.5C2 4 3 4 3 4H4.5L5.5 6.5L4.5 7C4.5 7 5 8.5 7 9L7.5 8L9.5 9.5L9 10C9 10 8.5 10.5 7.5 10.5Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/21vek.by/" className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  <rect x="2" y="2" width="10" height="10" rx="3" stroke="white" strokeWidth="1.2" fill="none" />
                  <circle cx="7" cy="7" r="2.5" stroke="white" strokeWidth="1.2" fill="none" />
                  <circle cx="10.5" cy="3.5" r="0.8" fill="white" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UChNfLMJmxWcaMy1oPxxSvog" className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  <path d="M5.5 4.5v5l5-2.5-5-2.5z" />
                </svg>
              </a>
              <a href="https://t.me/my21vekby" className="w-8 h-8 rounded-full bg-[#2AABEE] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  <path d="M2 7l9-4-2 9-3-3-2 2V7l-2-1z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@21vek.by" className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  <path d="M9 2v6a3 3 0 1 1-3-3v2a1 1 0 1 0 1 1V2h2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal text */}
          <div className="mt-4 space-y-1">
            <p className="text-xs text-[#a0a1a3]">
              Указанные контакты являются в том числе контактами для связи по вопросам обращения покупателей о нарушении их прав.
            </p>
            <p className="text-xs text-[#a0a1a3]">
              В торговом реестре с 23 июня 2010 г., № регистрации 156473, УНП 190806803, регистрация №190806803, 22.02.2007, Мингорисполком.
            </p>
            <p className="text-xs text-[#a0a1a3]">
              &copy; 2004–2026 21vek.by, Общество с ограниченной ответственностью «Триовист», юр.адрес: 220020, Минск, пр. Победителей, 100, оф. 203 E-mail: 21@21vek.by
            </p>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            {['Webpay', 'Белкарт', 'ЕРИП', 'Mastercard', 'Mastercard SecureCode', 'Visa', 'Visa Secure']?.map((name) =>
            <div
              key={name}
              className="h-7 px-3 bg-white border border-[#dcdde0] rounded flex items-center justify-center">

                <span className="text-xs text-[#a0a1a3] font-medium">{name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>);

}