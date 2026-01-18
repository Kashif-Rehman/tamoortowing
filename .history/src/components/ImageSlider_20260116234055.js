import React, { useState, useEffect } from 'react';
import styles from '../App.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "24/7 Emergency Towing",
      description: "Fast and reliable service when you need it most",
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Professional Team",
      description: "Experienced drivers you can trust",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Affordable Rates",
      description: "Quality service at competitive prices",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div 
        className={styles.slider}
        style={{ background: slides[currentSlide].bg }}
      >
        <div className={styles.slideContent}>
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>

        <button 
          className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={30} />
        </button>

        <button 
          className={`${styles.sliderBtn} ${styles.sliderBtnNext}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={30} />
        </button>

        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
