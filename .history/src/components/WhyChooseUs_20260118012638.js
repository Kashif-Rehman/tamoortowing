import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const reasons = [
    'emergency',
    'experienced',
    'affordable',
    'coverage',
    'trust'
  ];

  return (
    <section className={styles.section}>
      <h2>{t('whyChooseUs.title')}</h2>
      
      <div className={styles.cardContainer}>
        {reasons.map((reason) => (
          <div key={reason} className={styles.card}>
            <h3>{t(`whyChooseUs.${reason}.title`)}</h3>
            <p>{t(`whyChooseUs.${reason}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}