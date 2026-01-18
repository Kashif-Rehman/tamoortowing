import React, { useState } from 'react';
import styles from '../App.module.css';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.section} style={{ background: 'var(--bg-secondary)' }}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionSubtitle}>Get in touch for immediate assistance</p>
        
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            
            <div className={styles.contactItem}>
              <Phone size={24} />
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+1234567890">+1 (234) 567-8900</a></p>
                <p><a href="tel:+1234567891">+1 (234) 567-8901</a></p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Mail size={24} />
              <div>
                <strong>Email</strong>
                <p><a href="mailto:info@tamoortowing.com">info@tamoortowing.com</a></p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <MapPin size={24} />
              <div>
                <strong>Address</strong>
                <p>123 Main Street<br />City, State 12345</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Clock size={24} />
              <div>
                <strong>Hours</strong>
                <p>24/7 - Always Available</p>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
