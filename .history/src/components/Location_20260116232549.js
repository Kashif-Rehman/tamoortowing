import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.locationSection}>
      <h2>{t('location.title')}</h2>
      <p>{t('location.desc')}</p>
      <div className={styles.mapContainer}>
        <iframe
          title="Our Location in Khobar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8666899876467!2d50.19492397545708!3d26.217199777063935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8b3c2abcd9f%3A0x9b8f5d7e5e5e5e5e!2sAl%20Khobar%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Location;