import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Team from './components/Team';
import Contact from './components/Contact';
import Location from './components/Location';
import ImageSlider from './components/ImageSlider';
import CTABanner from './components/CTABanner';
import TrustBadges from './components/TrustBadges';
import styles from './App.module.css';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';

export default function App() {
  const { i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language, i18n]);

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : ''}`}>
      <Navbar darkMode={darkMode} />

      {/* Dark mode & Language buttons on left middle */}
      <div className={styles.sideButtons}>
        {/* Dark mode button */}
        <button 
          className={styles.modeBtn} 
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Language switch buttons with flag images */}
        {language === "en" ? (
          <button 
            className={styles.langBtn} 
            onClick={() => setLanguage("ar")}
            aria-label="Switch to Arabic"
          >
            <img src="/flags/saudi.svg" alt="العربية" />
          </button>
        ) : (
          <button 
            className={styles.langBtn} 
            onClick={() => setLanguage("en")}
            aria-label="Switch to English"
          >
            <img src="/flags/usa.svg" alt="English" />
          </button>
        )}
      </div>

      {/* Page sections */}
      <div id="home"><Header /></div>
      <div id="slider"><ImageSlider /></div>
      <div id="cta"><CTABanner /></div>
      <div id="services"><Services /></div>
      <div id="why"><WhyChooseUs /></div>
      <div id="location"><Location /></div>
      <div id="feedback"><Feedback /></div>
      <div id="team"><Team /></div>
      <div id="contact"><Contact /></div>
      <div id="trustBadges"><TrustBadges /></div>
      {/* Call & WhatsApp */}
      <a 
        href="tel:0536121365" 
        className={styles.floatingCall}
        aria-label="Call Al Faraj Towing"
      >
        📞 Call Now
      </a>
      
      <a
        href="https://wa.me/966536121365"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsApp}
        aria-label="Chat on WhatsApp"
      >
        💬 Chat on WhatsApp
      </a>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Al Faraj Towing Services. All Rights Reserved.
      </footer>
    </div>
  );
}