import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar({ darkMode }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('nav.home') || 'Home' },
    { id: 'services', label: t('nav.services') || 'Services' },
    { id: 'areas', label: t('nav.areas') || 'Areas' },
    { id: 'why', label: t('nav.why') || 'Why Us' },
    { id: 'feedback', label: t('nav.feedback') || 'Feedback' },
    { id: 'faq', label: t('nav.faq') || 'FAQ' },
    { id: 'team', label: t('nav.team') || 'Team' },
    { id: 'contact', label: t('nav.contact') || 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`${styles.nav} ${darkMode ? styles.dark : styles.light} ${styles.desktop}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={styles.navBtn}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <div className={styles.mobileNav}>
        {/* Hamburger Button */}
        <button
          className={`${styles.hamburger} ${darkMode ? styles.dark : styles.light}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className={`${styles.dropdown} ${darkMode ? styles.dark : styles.light}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={styles.dropdownItem}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}