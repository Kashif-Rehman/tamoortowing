import React, { useState, useEffect } from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Feedback() {
  const { t } = useTranslation();

  const reviews = [
    {
      author: t('feedback.reviews.0.author'),
      comment: t('feedback.reviews.0.comment'),
    },
    {
      author: t('feedback.reviews.1.author'),
      comment: t('feedback.reviews.1.comment'),
    },
    {
      author: t('feedback.reviews.2.author'),
      comment: t('feedback.reviews.2.comment'),
    },
  ];

  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className={`${styles.section} ${styles.feedbackSection}`}>
      <h2>{t('feedback.title')}</h2>

      <div className={styles.feedbackSlider}>
        <button className={styles.navBtn} onClick={prevReview}>
          ‹
        </button>

        <div className={styles.feedbackContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className={styles.feedbackCard}
            >
              <blockquote>
                <p>{reviews[index].comment}</p>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFD700" stroke="#FFD700" />
                  ))}
                </div>
                <footer>— {reviews[index].author}</footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className={styles.navBtn} onClick={nextReview}>
          ›
        </button>
      </div>
    </section>
  );
}