import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TrustBadges from './components/TrustBadges';
import ImageSlider from './components/ImageSlider';
import styles from './App.module.css';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';

// Lazy load below-fold components for faster initial load
const CTABanner = lazy(() => import('./components/CTABanner'));
const Services = lazy(() => import('./components/Services'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const ServiceAreas = lazy(() => import('./components/ServiceAreas'));
const Feedback = lazy(() => import('./components/Feedback'));
const FAQ = lazy(() => import('./components/FAQ'));
const Team = lazy(() => import('./components/Team'));
const Location = lazy(() => import('./components/Location'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));

const SectionFallback = () => (
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '36px', height: '36px', border: '3px solid #1B5E20', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
  </div>
);

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
      <Suspense fallback={<SectionFallback />}>
        <div id="cta"><CTABanner /></div>
      </Suspense>
      
      {/* Services Section */}
      <Suspense fallback={<SectionFallback />}>
        <div id="services"><Services /></div>
      </Suspense>
      
      {/* Why Choose Us */}
      <Suspense fallback={<SectionFallback />}>
        <div id="why"><WhyChooseUs /></div>
      </Suspense>
      
      {/* Service Coverage Areas */}
      <Suspense fallback={<SectionFallback />}>
        <div id="areas"><ServiceAreas /></div>
      </Suspense>
      
      {/* Customer Testimonials */}
      <Suspense fallback={<SectionFallback />}>
        <div id="feedback"><Feedback /></div>
      </Suspense>
      
      {/* Frequently Asked Questions */}
      <Suspense fallback={<SectionFallback />}>
        <div id="faq"><FAQ /></div>
      </Suspense>
      
      {/* Our Team */}
      <Suspense fallback={<SectionFallback />}>
        <div id="team"><Team /></div>
      </Suspense>
      
      {/* Location & Map */}
      <Suspense fallback={<SectionFallback />}>
        <div id="location"><Location /></div>
      </Suspense>
      
      {/* Resources & Blog */}
      <Suspense fallback={<SectionFallback />}>
        <div id="blog"><Blog /></div>
      </Suspense>
      
      {/* Contact Information */}
      <Suspense fallback={<SectionFallback />}>
        <div id="contact"><Contact /></div>
      </Suspense>

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