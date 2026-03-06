import React, { useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../App.module.css';

import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpeg';
import img7 from '../images/img7.jpeg';
import img8 from '../images/img8.jpeg';
import img9 from '../images/img9.jpeg';

export default function ImageSlider() {
  const [isLowMotion, setIsLowMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setIsLowMotion(mediaQuery.matches);
    updateMotionPreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMotionPreference);
    } else {
      mediaQuery.addListener(updateMotionPreference);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateMotionPreference);
      } else {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };
  }, []);

  const swiperModules = useMemo(
    () => (isLowMotion ? [Pagination] : [Autoplay, Pagination, Navigation]),
    [isLowMotion]
  );

  const slides = [
    { type: 'image', src: img1, alt: 'سطحة هيدروليك الخبر - خدمة سحب السيارات | Al Khobar Towing Service' },
    { type: 'image', src: img2, alt: 'سطحة الخبر - نقل سيارات احترافي | Professional Car Transport' },
    { type: 'image', src: img3, alt: 'سحب سيارات الخبر والدمام | Khobar Dammam Vehicle Towing' },
    { type: 'image', src: img4, alt: 'خدمة الطوارئ على الطريق الخبر | Emergency Roadside Assistance' },
    { type: 'image', src: img5, alt: 'سطحة هيدروليك حديثة الخبر | Modern Hydraulic Flatbed Towing' },
    { type: 'image', src: img6, alt: 'نقل سيارات فاخرة الخبر | Luxury Vehicle Transport Al Khobar' },
    { type: 'image', src: img7, alt: 'سطحة متاحة 24 ساعة الخبر | 24 Hour Towing Service Khobar' },
    { type: 'image', src: img8, alt: 'خدمة سحب وإنقاذ المركبات | Vehicle Recovery and Towing' },
    { type: 'image', src: img9, alt: 'أفضل سطحة في الخبر | Best Towing Service in Al Khobar' },
  ];

  return (
    <section className={styles.sliderSection} aria-label="معرض صور سطحة هيدروليك الخبر">
      <Swiper
        slidesPerView={1}
        spaceBetween={isLowMotion ? 12 : 30}
        centeredSlides={!isLowMotion}
        speed={isLowMotion ? 280 : 550}
        watchOverflow={true}
        observer={true}
        observeParents={true}
        autoplay={
          isLowMotion
            ? false
            : {
                delay: 4500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
        }
        pagination={{ 
          clickable: true,
          dynamicBullets: isLowMotion
        }}
        navigation={!isLowMotion}
        loop={!isLowMotion}
        grabCursor={!isLowMotion}
        resistanceRatio={0.85}
        threshold={6}
        modules={swiperModules}
        className={styles.mySwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slideWrapper}>
            {slide.type === "video" ? (
              <video
                className={styles.slideImage}
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <>
                <div
                  className={styles.slideBackground}
                  style={{ backgroundImage: `url(${slide.src})` }}
                  aria-hidden="true"
                ></div>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={styles.slideImage}
                  loading={index > 0 ? 'lazy' : 'eager'}
                  decoding="async"
                  fetchpriority={index === 0 ? 'high' : 'auto'}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  width="1200"
                  height="600"
                  draggable="false"
                />
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}