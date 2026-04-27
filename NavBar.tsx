import React from 'react';
import TopPromoBanner from '@/components/TopPromoBanner';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import NavBar from '@/components/NavBar';
import HeroSlider from '@/components/HeroSlider';
import BrandPanel from '@/components/BrandPanel';
import ProductSection from '@/components/ProductSection';
import WeeklyProducts from '@/components/WeeklyProducts';
import PopularProducts from '@/components/PopularProducts';
import Footer from '@/components/Footer';

const recommendedProducts = [
{
  name: 'Шкаф Anrex Romana 2D2S (дуб сонома)',
  href: 'https://www.21vek.by/cupboards/romana2d2s_anrex_8255890.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/8255/890/romana2d2s_anrex_8255890_01.jpg',
  imgAlt: 'Шкаф Anrex Romana 2D2S (дуб сонома)',
  price: '314,48 р.',
  badge: 'ШОПЦЕНА',
  rating: '4.8',
  reviewCount: '2209',
  deliveryDate: 'Завтра',
  creditInfo: 'от 15,46 р/мес'
},
{
  name: 'Шкаф Mio Tesoro Мельбурн 4DG3S (белый)',
  href: 'https://www.21vek.by/cupboards/4dg3s_mio_tesoro_10247984.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/10247/984/10247984_a1b2c3d4e5f6.jpg',
  imgAlt: 'Шкаф Mio Tesoro Мельбурн 4DG3S (белый)',
  price: '739,00 р.',
  oldPrice: '795,42 р.',
  discount: '-7%',
  rating: '4.9',
  reviewCount: '52',
  deliveryDate: 'Завтра',
  creditInfo: 'от 36,34 р/мес'
},
{
  name: 'Сковорода Виктория Престиж АЛА 240 (P0024)',
  href: 'https://www.21vek.by/frying_pans/2400024_viktoria.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/2400/024/2400024_viktoria_01.jpg',
  imgAlt: 'Сковорода Виктория Престиж АЛА 240 (P0024)',
  price: '50,50 р.',
  badge: 'ШОПЦЕНА',
  rating: '5.0',
  reviewCount: '1448',
  deliveryDate: 'Завтра',
  creditInfo: 'от 1,80 р/мес'
},
{
  name: 'Матрас Vegas S1 100x180',
  href: 'https://www.21vek.by/mattresses/s1100x180_vegas.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/s1100/x180/s1100x180_vegas_01.jpg',
  imgAlt: 'Матрас Vegas S1 100x180',
  price: '261,00 р.',
  rating: '4.9',
  reviewCount: '1289',
  deliveryDate: 'Завтра',
  creditInfo: 'от 12,83 р/мес'
},
{
  name: 'Стиральная машина Beko WSPE6612A',
  href: 'https://www.21vek.by/washing_machines/wspe6612a_beko_9736756.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/9736/756/wspe6612a_beko_9736756_01.jpg',
  imgAlt: 'Стиральная машина Beko WSPE6612A',
  price: '1 020,90 р.',
  badge: 'ШОПЦЕНА',
  rating: '4.9',
  reviewCount: '585',
  deliveryDate: 'Завтра',
  creditInfo: 'от 50,20 р/мес'
},
{
  name: 'Наполнитель для туалета Cat Step Tofu Green Tea (6л/2.8кг)',
  href: 'https://www.21vek.by/cat_litter/tofugreentea20333002_catstep.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/20333/002/tofugreentea20333002_catstep_01.jpg',
  imgAlt: 'Наполнитель для туалета Cat Step Tofu Green Tea',
  price: '24,89 р.',
  badge: 'ШОПЦЕНА',
  rating: '5.0',
  reviewCount: '1126',
  deliveryDate: 'Завтра'
},
{
  name: 'Смартфон Apple iPhone 17 256GB (черный)',
  href: 'https://www.21vek.by/mobile/iphone17256gb_apple_10019135.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/10019/135/10019135_8e3ebb364070f47b90efcc0c42d9ae0d.webp',
  imgAlt: 'Смартфон Apple iPhone 17 256GB (черный)',
  price: '3 399,00 р.',
  oldPrice: '4 199,00 р.',
  discount: '-19%',
  rating: '5.0',
  reviewCount: '88',
  deliveryDate: 'Завтра',
  creditInfo: 'от 120,91 р/мес'
},
{
  name: 'Смартфон Apple iPhone 15 128GB (черный)',
  href: 'https://www.21vek.by/mobile/iphone15128gb_apple_8560469.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/8560/469/iphone15128gba3090_apple_04_6512926432fe0.jpeg',
  imgAlt: 'Смартфон Apple iPhone 15 128GB (черный)',
  price: '2 299,00 р.',
  oldPrice: '2 799,00 р.',
  discount: '-18%',
  rating: '5.0',
  reviewCount: '317',
  deliveryDate: 'Завтра',
  creditInfo: 'от 81,78 р/мес'
},
{
  name: 'Аэрогриль GRIGIO HAF-167V2',
  href: 'https://www.21vek.by/aerogrills/haf167v2_grigio_10263495.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/10263/495/10263495_0bd5f4e077a926a8832e203457ef24bb.jpg',
  imgAlt: 'Аэрогриль GRIGIO HAF-167V2',
  price: '229,00 р.',
  rating: '5.0',
  reviewCount: '39',
  deliveryDate: 'Завтра',
  creditInfo: 'от 11,26 р/мес'
},
{
  name: 'Смартфон Apple iPhone 16 256GB (черный)',
  href: 'https://www.21vek.by/mobile/iphone16256gb_apple_9273509.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/9273/509/iphone16256gb_apple_9273509_01.jpg',
  imgAlt: 'Смартфон Apple iPhone 16 256GB (черный)',
  price: '2 999,00 р.',
  oldPrice: '3 599,00 р.',
  discount: '-17%',
  rating: '5.0',
  reviewCount: '206',
  deliveryDate: '7 мая',
  creditInfo: 'от 106,68 р/мес'
},
{
  name: 'Телевизор Яндекс ТВ Станция Бейсик 43’’ YNDX-00074',
  href: 'https://www.21vek.by/tv/43yndx00074_yandex_9294953.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/9294/953/43yndx00074_yandex_9294953_01.jpg',
  imgAlt: 'Телевизор Яндекс ТВ Станция Бейсик 43’’ YNDX-00074',
  price: '995,00 р.',
  badge: 'ШОПЦЕНА',
  rating: '4.9',
  reviewCount: '1223',
  deliveryDate: 'Завтра',
  creditInfo: 'от 35,39 р/мес'
},
{
  name: 'Умная колонка Яндекс Станция Лайт 2 YNDX-00026VIO (фиолетовый)',
  href: 'https://www.21vek.by/portable_audio/2yndx00026vio_yandex_9211399.html',
  imgSrc: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/9211/399/2yndx00026vio_yandex_9211399_01.jpg',
  imgAlt: 'Умная колонка Яндекс Станция Лайт 2 YNDX-00026VIO',
  price: '219,00 р.',
  oldPrice: '259,00 р.',
  discount: '-15%',
  rating: '5.0',
  reviewCount: '1070',
  deliveryDate: 'Завтра',
  creditInfo: 'от 10,77 р/мес'
}];


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-tahoma">
      {/* Top promo banner */}
      <TopPromoBanner />

      {/* Header */}
      <Header />

      {/* Search bar */}
      <SearchBar />

      {/* Nav bar */}
      <NavBar />

      {/* Main content */}
      <main className="max-w-[1280px] mx-auto px-4 py-4">
        {/* Hero + Brand panel */}
        <div className="flex gap-4 mb-6">
          {/* Main slider */}
          <div className="flex-1 rounded-xl overflow-hidden">
            <HeroSlider />
          </div>

          {/* Brand panel */}
          <div
            className="w-[220px] flex-shrink-0 rounded-xl p-3 overflow-y-auto"
            style={{ backgroundColor: '#f7f8fa', maxHeight: '360px' }}>

            <BrandPanel />
          </div>
        </div>

        {/* Recommended products */}
        <ProductSection
          title="Рекомендуем"
          products={recommendedProducts} />


        {/* Weekly products + Ad banner */}
        <WeeklyProducts />

        {/* Popular products */}
        <PopularProducts />
      </main>

      {/* Footer */}
      <Footer />
    </div>);

}