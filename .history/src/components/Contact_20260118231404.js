import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className={`${styles.contactSection} ${styles.contact}`}>
      <h2>{t('contact.title')}</h2>
      <p><strong>{t('contact.company')}</strong></p>
      <p>📞 <a href={`tel:${t('contact.phone')}`}>{t('contact.phone')}</a></p>
      <p>✉️ <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a></p>
      <p>📍 {t('contact.address')}</p>
    </section>
  );
}