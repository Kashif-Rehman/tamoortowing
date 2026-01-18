import React from 'react';
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
  const slides = [
    { type: 'image', src: img1 },
    { type: 'image', src: img2 },
    { type: 'image', src: img3 },
    { type: 'image', src: img4 },
    { type: 'image', src: img5 },
    { type: 'image', src: img6 },
    { type: 'image', src: img7 },
    { type: 'image', src: img8 },
    { type: 'image', src: img9 },
  ];

  return (
    <section className={styles.sliderSection}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ 
          delay: 3000, 
          disableOnInteraction: false 
        }}
        pagination={{ 
          clickable: true 
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
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
                ></div>
                <img
                  src={slide.src}
                  alt={`Al Faraj Towing - Slide ${index + 1}`}
                  className={styles.slideImage}
                />
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}