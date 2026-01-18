import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Award, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <Clock size={48} />,
      title: "Fast Response",
      description: "We arrive quickly when you need us most"
    },
    {
      icon: <Shield size={48} />,
      title: "Licensed & Insured",
      description: "Fully certified and insured for your protection"
    },
    {
      icon: <Award size={48} />,
      title: "Experienced Team",
      description: "Over 15 years of towing expertise"
    },
    {
      icon: <ThumbsUp size={48} />,
      title: "Customer Satisfaction",
      description: "10,000+ happy customers served"
    }
  ];

  return (
    <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <p className={styles.sectionSubtitle}>The best towing service in the region</p>
        
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
