import React from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { t } = useTranslation();

  const posts = t('blog.posts', { returnObjects: true });

  return (
    <section className={`${styles.section} ${styles.blogSection}`}>
      <h2>{t('blog.title')}</h2>
      <p className={styles.blogSubtitle}>{t('blog.subtitle')}</p>

      <div className={styles.blogGrid}>
        {posts.map((post, index) => (
          <article key={index} className={styles.blogCard}>
            <div className={styles.blogIcon}>
              <BookOpen size={28} />
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className={styles.blogMeta}>
              <span className={styles.blogDate}>{post.date}</span>
              <button className={styles.blogReadMore}>
                {t('blog.readMore')} <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}