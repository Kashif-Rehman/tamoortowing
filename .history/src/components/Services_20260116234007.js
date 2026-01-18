import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { Truck, Wrench, Car, Clock } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Truck size={48} />,
      title: "24/7 Towing",
      description: "Emergency towing service available around the clock"
    },
    {
      icon: <Wrench size={48} />,
      title: "Roadside Assistance",
      description: "Quick help for flat tires, jumpstarts, and lockouts"
    },
    {
      icon: <Car size={48} />,
      title: "Vehicle Transport",
      description: "Safe transportation for all vehicle types"
    },
    {
      icon: <Clock size={48} />,
      title: "Fast Response",
      description: "Average arrival time under 30 minutes"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionSubtitle}>Professional towing and roadside assistance</p>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
