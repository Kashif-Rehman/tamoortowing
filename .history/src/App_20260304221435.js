import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import ServiceAreas from './components/ServiceAreas';
import Feedback from './components/Feedback';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Location from './components/Location';
import ImageSlider from './components/ImageSlider';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import TrustBadges from './components/TrustBadges';
import styles from './App.module.css';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';

export default function App() {
  const { i18n, t } = useTranslation();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language, i18n]);

  // Get phone and WhatsApp from translation files
  const phone = t('contact.phone');
  const whatsapp = t('contact.whatsapp');

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

      {/* Page sections - Professional Layout */}
      
      {/* Hero Section */}
      <div id="home"><Header /></div>
      
      {/* Trust Indicators */}
      <div id="trust"><TrustBadges /></div>
      
      {/* Image Gallery */}
      <div id="gallery"><ImageSlider /></div>
      
      {/* Call-to-Action Banner */}
      <div id="cta"><CTABanner /></div>
      
      {/* Services Section */}
      <div id="services"><Services /></div>
      
      {/* Why Choose Us */}
      <div id="why"><WhyChooseUs /></div>
      
      {/* Service Coverage Areas */}
      <div id="areas"><ServiceAreas /></div>
      
      {/* Customer Testimonials */}
      <div id="feedback"><Feedback /></div>
      
      {/* Frequently Asked Questions */}
      <div id="faq"><FAQ /></div>
      
      {/* Our Team */}
      <div id="team"><Team /></div>
      
      {/* Location & Map */}
      <div id="location"><Location /></div>
      
      {/* Resources & Blog */}
      <div id="blog"><Blog /></div>
      
      {/* Contact Information */}
      <div id="contact"><Contact /></div>

      {/* Floating action buttons */}
      <a 
        href={`tel:${phone}`}
        className={styles.floatingCall}
        aria-label={t('contact.call')}
      >
        📞 {t('contact.call')}
      </a>
      
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsApp}
        aria-label={language === 'ar' ? 'محادثة عبر واتساب' : 'Chat on WhatsApp'}
      >
        💬 {language === 'ar' ? 'واتساب' : 'WhatsApp'}
      </a>

      {/* Footer with translation */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} {t('footer.copyright')}
      </footer>
    </div>
  );
}