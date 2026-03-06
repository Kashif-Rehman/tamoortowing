import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, CheckCircle, Globe } from 'lucide-react';

export default function ServiceAreas() {
  const { t } = useTranslation();

  const areas = t('serviceAreas.areas', { returnObjects: true });

  return (
    <section className={`${styles.sectionAlt} ${styles.serviceAreasSection}`}>
      <h2>{t('serviceAreas.title')}</h2>
      <p className={styles.serviceAreasSubtitle}>{t('serviceAreas.subtitle')}</p>

      <div className={styles.areasGrid}>
        {areas.map((area, index) => (
          <div key={index} className={`${styles.areaCard} ${area.international ? styles.internationalCard : ''}`}>
            {area.international && (
              <div className={styles.internationalBadge}>
                <Globe size={14} />
                <span>{t('serviceAreas.borderBadge')}</span>
              </div>
            )}
            <div className={styles.areaIcon}>
              <MapPin size={32} />
            </div>
            <h3>{area.city}</h3>
            <p className={styles.areaDescription}>{area.description}</p>
            
            <div className={styles.areaFeatures}>
              <div className={styles.areaFeature}>
                <Clock size={16} />
                <span>{t('serviceAreas.responseTime')}</span>
              </div>
              <div className={styles.areaFeature}>
                <CheckCircle size={16} />
                <span>{t('serviceAreas.available247')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.coverageNote}>
        <p>{t('serviceAreas.note')}</p>
      </div>
    </section>
  );
}