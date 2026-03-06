import React, { useEffect, useRef, useState } from 'react';
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

// Defined outside component — never re-created on re-render
const slides = [
  { src: img1, alt: 'سطحة هيدروليك الخبر - خدمة سحب السيارات | Al Khobar Towing Service' },
  { src: img2, alt: 'سطحة الخبر - نقل سيارات احترافي | Professional Car Transport' },
  { src: img3, alt: 'سحب سيارات الخبر والدمام | Khobar Dammam Vehicle Towing' },
  { src: img4, alt: 'خدمة الطوارئ على الطريق الخبر | Emergency Roadside Assistance' },
  { src: img5, alt: 'سطحة هيدروليك حديثة الخبر | Modern Hydraulic Flatbed Towing' },
  { src: img6, alt: 'نقل سيارات فاخرة الخبر | Luxury Vehicle Transport Al Khobar' },
  { src: img7, alt: 'سطحة متاحة 24 ساعة الخبر | 24 Hour Towing Service Khobar' },
  { src: img8, alt: 'خدمة سحب وإنقاذ المركبات | Vehicle Recovery and Towing' },
  { src: img9, alt: 'أفضل سطحة في الخبر | Best Towing Service in Al Khobar' },
];

// Swiper modules defined outside — prevents re-instantiation on every render
const MODULES_FULL = [Autoplay, Pagination, Navigation];
const MODULES_MOBILE = [Pagination];

export default function ImageSlider() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const resizeTimer = useRef(null);

  useEffect(() => {
    // FIX: debounce resize to avoid thrashing layout recalculations
    const handleResize = () => {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 150);
    };

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotion = (e) => setPrefersReducedMotion(e.matches);

    window.addEventListener('resize', handleResize, { passive: true });
    motionQuery.addEventListener
      ? motionQuery.addEventListener('change', handleMotion)
      : motionQuery.addListener(handleMotion);

    return () => {
      clearTimeout(resizeTimer.current);
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener
        ? motionQuery.removeEventListener('change', handleMotion)
        : motionQuery.removeListener(handleMotion);
    };
  }, []);

  // FIX: on mobile never autoplay — it causes jank while user is scrolling the page
  const disableAutoplay = isMobile || prefersReducedMotion;

  return (
    <section
      className={styles.sliderSection}
      aria-label="معرض صور سطحة هيدروليك الخبر"
    >
      <Swiper
        // Layout
        slidesPerView={1}
        spaceBetween={0}          // FIX: 0 gap — non-zero caused partial slide peekthrough lag on mobile
        centeredSlides={false}    // FIX: centeredSlides caused layout recalculation jank on mobile

        // Performance
        // FIX: lower speed on mobile — 650ms was too slow and felt laggy under finger
        speed={isMobile ? 300 : 500}
        watchSlidesProgress={false} // FIX: disabling this stops per-frame progress calculations
        watchOverflow={false}       // FIX: not needed with 9 slides, removes extra check
        observer={false}            // FIX: observer re-triggers layout; disable, use key instead
        observeParents={false}
        updateOnWindowResize={true}

        // Touch — critical for mobile feel
        threshold={5}              // FIX: lowered from 6, makes swipe register faster
        resistanceRatio={0.65}     // FIX: reduced resistance — feels more natural on mobile
        touchRatio={1}
        touchAngle={45}
        simulateTouch={true}
        longSwipesRatio={0.3}      // FIX: easier to complete a swipe with less drag needed
        longSwipesMs={200}         // FIX: faster swipe detection
        followFinger={true}        // FIX: slide follows finger in real time — removes perceived lag
        cssMode={false}            // Keep false — cssMode breaks Swiper events on some devices

        // Loop & autoplay
        loop={!disableAutoplay}
        autoplay={
          disableAutoplay
            ? false
            : {
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
        }

        // UI
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={!isMobile && !prefersReducedMotion} // FIX: hide nav arrows on mobile (useless + adds DOM weight)
        grabCursor={!isMobile}

        modules={isMobile ? MODULES_MOBILE : MODULES_FULL}
        className={styles.mySwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slideWrapper}>
            <img
              src={slide.src}
              alt={slide.alt}
              className={styles.slideImage}
              // FIX: eager-load first 2 slides on mobile so there's no blank flash
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding={index < 2 ? 'sync' : 'async'}
              fetchpriority={index === 0 ? 'high' : 'low'}
              draggable="false"
              // FIX: width/height prevent layout shift during load
              width="1200"
              height="675"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}