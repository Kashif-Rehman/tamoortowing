import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

export default function Feedback() {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Ahmed Al-Rashid",
      rating: 5,
      comment: "Excellent service! They arrived within 20 minutes and handled my car with great care. Highly professional team.",
      date: "2026-01-10"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Best towing service I've ever used. Fair prices and very friendly staff. Will definitely call them again if needed.",
      date: "2026-01-08"
    },
    {
      name: "Mohammed Ali",
      rating: 5,
      comment: "Fast, reliable, and affordable. They saved me when I was stranded on the highway late at night. Thank you!",
      date: "2026-01-05"
    },
    {
      name: "Emily Brown",
      rating: 5,
      comment: "Professional service from start to finish. The driver was courteous and my vehicle arrived safely. Recommended!",
      date: "2026-01-02"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Customer Reviews</h2>
        <p className={styles.sectionSubtitle}>What our customers say about us</p>
        
        <div className={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewStars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="gold" color="gold" />
                ))}
              </div>
              <p className={styles.reviewComment}>"{review.comment}"</p>
              <div className={styles.reviewAuthor}>
                <strong>{review.name}</strong>
                <span className={styles.reviewDate}>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
