import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { Shield, Award, Users, Clock } from 'lucide-react';

export default function TrustBadges() {
  const { t } = useTranslation();

  const badges = [
    {
      icon: Shield,
      title: t('trustBadges.licensed.title'),
      description: t('trustBadges.licensed.desc')
    },
    {
      icon: Award,
      title: t('trustBadges.experienced.title'),
      description: t('trustBadges.experienced.desc')
    },
    {
      icon: Users,
      title: t('trustBadges.customers.title'),
      description: t('trustBadges.customers.desc')
    },
    {
      icon: Clock,
      title: t('trustBadges.response.title'),
      description: t('trustBadges.response.desc')
    }
  ];

  return (
    <section className={`${styles.section} ${styles.trustBadgesSection}`}>
      <div className={styles.trustBadgesContainer}>
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div key={index} className={styles.trustBadge}>
              <div className={styles.trustBadgeIcon}>
                <Icon size={32} />
              </div>
              <h4>{badge.title}</h4>
              <p>{badge.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}