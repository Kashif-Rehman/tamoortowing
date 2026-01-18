import React, { useState, useEffect } from 'react';
import Header from './components/header';
import WhyChooseUs from './components/whyChooseUs';
import Services from './components/services';
import Feedback from './components/feedback';
import Team from './components/team';
import Contact from './components/contact';
import Location from './components/location';
import ImageSlider from './components/ImageSlider';
import styles from './App.module.css';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';

export default function App() {
  const { i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false
  );
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : ''}`}>
      <Navbar darkMode={darkMode} />

      {/* Dark mode & Language buttons on left middle */}
      <div className={styles.sideButtons}>
        
        {/* Dark mode button */}
        <button className={styles.modeBtn} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Language switch buttons with flag images */}
        {language === "en" ? (
          <button className={styles.langBtn} onClick={() => setLanguage("ar")}>
            <img src="/flags/saudi.svg" alt="Arabic" />
          </button>
        ) : (
          <button className={styles.langBtn} onClick={() => setLanguage("en")}>
            <img src="/flags/usa.svg" alt="English" />
          </button>
        )}
      </div>

      {/* Page sections */}
      <div id="home"><Header /></div>
      <div id="slider"><ImageSlider /></div>
      <div id="services"><Services /></div>
      <div id="why"><WhyChooseUs /></div>
      <div id="location"><Location /></div>
      <div id="feedback"><Feedback /></div>
      <div id="team"><Team /></div>
      <div id="contact"><Contact /></div>

      {/* Call & WhatsApp */}
      <a href="tel:0536121365" className={styles.floatingCall}>📞 Call Now</a>
      
      <a
        href="https://wa.me/966536121365"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsApp}
      >
        💬 Chat on WhatsApp
      </a>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Al Faraj Towing Services. All Rights Reserved.
      </footer>

    </div>
  );
}