import React from "react";
import styles from "../App.module.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function Header() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  // Dynamic SEO content based on language
  const seo = {
    en: {
      title: "Al Faraj Towing Services | 0536121365 | 24/7 سطحة & Roadside Assistance in Dammam",
      description: "Al Faraj Towing Services provides 24/7 towing (سطحة) and roadside assistance in Dammam, specifically Khobar, Aziziyah, Thuqbah, and Dhahran, and to nearby major cities. Fast, reliable, and affordable.",
      keywords: "سطحة, سطحة الدمام, Al Faraj Towing, towing services Dammam, roadside assistance, سطحة الخبر, سطحة العزيزية, سطحة الثقبة, سطحة الظهران, سطحة الجبيل, سحب السيارات, towing in Saudi Arabia, towing near me",
      url: "https://towing-app-b898a.firebaseapp.com",
      image: "https://alfarajtowing.com/images/tow-truck.jpg",
      locale: "en_US",
    },
    ar: {
      title: "سطحة الفرج | خدمات سحب السيارات في الدمام 24/7",
      description: "سطحة الفرج تقدم خدمات سحب السيارات ومساعدة الطريق في الدمام والمناطق القريبة مثل الخبر، العزيزية، الثقبة، الظهران — سطحة متوفرة على مدار الساعة بأسعار مناسبة.",
      keywords: "سطحة, الدمام, سطحة الفرج, خدمات السحب, سطحة الخبر, سطحة العزيزية, سطحة الثقبة, سطحة الظهران, سطحة الجبيل, نقل السيارات, المساعدة على الطريق",
      url: "https://towing-app-b898a.firebaseapp.com",
      image: "https://alfarajtowing.com/images/tow-truck.jpg",
      locale: "ar_AR",
    }
  };

  const currentSEO = seo[lang];

  return (
    <header className={styles.header}>
      {/* 🔹 SEO + Social Meta Tags */}
      <Helmet>
        <html lang={lang} />
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentSEO.url} />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentSEO.url} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:image" content={currentSEO.image} />
        <meta property="og:locale" content={currentSEO.locale} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content={currentSEO.image} />
        <meta name="twitter:site" content="@alfarajtowing" />

        {/* Structured Data (Google Rich Snippet) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "TowingService",
            "name": "Al Faraj Towing Services (سطحة الفرج)",
            "image": "${currentSEO.image}",
            "url": "${currentSEO.url}",
            "telephone": ["+966536121365", "+966555632801"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dammam",
              "addressRegion": "Eastern Province",
              "addressCountry": "SA"
            },
            "areaServed": [
              {"@type": "City", "name": "Dammam"},
              {"@type": "City", "name": "Khobar"},
              {"@type": "City", "name": "Dhahran"},
              {"@type": "City", "name": "Jubail"},
              {"@type": "City", "name": "Qatif"},
              {"@type": "City", "name": "Ras Tanura"}
            ],
            "potentialAction": {
              "@type": "CallAction",
              "target": "tel:+966536121365",
              "name": "Call Now"
            },
            "description": "${currentSEO.description}",
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "serviceType": "Roadside Assistance, Flatbed Towing, Accident Recovery, Long Distance Tow"
          }
        `}</script>
      </Helmet>

      {/* 🔹 Actual Header Content */}
      <div className={styles.overlay}>
        <h1 className={styles.title}>{t("header.title")}</h1>
        <p className={styles.subtitle}>{t("header.subtitle")}</p>

        <div className={styles.contactInfo}>
          <p>📞 <a href={`tel:${t("contact.phone")}`}>{t("contact.phone")}</a></p>
          <p>📞 <a href={`tel:${t("contact.phone1")}`}>{t("contact.phone1")}</a></p>
          <p>✉️ <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a></p>
        </div>

        <a href={`tel:${t("contact.phone")}`} className={styles.ctaButton}>
          {t("contact.call")}
        </a>
      </div>
    </header>
  );
}