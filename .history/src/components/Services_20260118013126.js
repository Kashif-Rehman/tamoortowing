import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const serviceKeys = [
    'emergencyTowing',
    'roadsideAssistance',
    'accidentRecovery',
    'longDistanceTow',
  ];

  return (
    <section className={`${styles.sectionAlt} ${styles.servicesSection}`}>
      <h2>{t('services.title')}</h2>
      <p>{t('services.subtitle')}</p>

      <div className={styles.gridList}>
        {serviceKeys.map((key) => (
          <div key={key} className={styles.serviceCard}>
            <h3>{t(`services.${key}.title`)}</h3>
            <p>{t(`services.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}