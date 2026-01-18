import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className={styles.ctaBanner}>
      <div className={styles.ctaContent}>
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.subtitle')}</p>
        <div className={styles.ctaButtons}>
          <a 
            href={`tel:${t('contact.phone')}`}
            className={styles.ctaPrimaryBtn}
            aria-label="Call now"
          >
            <Phone size={20} />
            {t('cta.callNow')}
          </a>
          <a 
            href={`https://wa.me/${t('contact.whatsapp')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondaryBtn}
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
            {t('cta.whatsapp')}
          </a>
        </div>
        <p className={styles.ctaNote}>{t('cta.note')}</p>
      </div>
    </section>
  );
}