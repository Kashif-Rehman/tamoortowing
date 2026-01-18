import React from "react";
import styles from "../App.module.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function Header() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  const seo = {
    en: {
      title: "Al Faraj Towing Services | 0536121365 | 24/7 Tow Truck in Khobar",
      description: "Al Faraj Towing Services provides 24/7 towing and vehicle recovery in Khobar, Dammam, Dhahran, and across Eastern Province. Fast, reliable, and professional service.",
      keywords: "Al Faraj Towing, towing Khobar, سطحة الخبر, شركة الفرج, towing services, سطحة الدمام, سطحة الظهران, سطحة الجبيل, vehicle recovery, emergency towing Saudi Arabia",
      url: "https://www.satahalfaraj.com",
      image: "https://www.satahalfaraj.com/img9.jpg",
      locale: "en_US",
    },
    ar: {
      title: "شركة الفرج | خدمات سحب السيارات في الخبر 24/7",
      description: "شركة الفرج تقدم خدمات سحب السيارات وإنقاذ المركبات في الخبر والدمام والظهران والمنطقة الشرقية. خدمة سريعة وموثوقة واحترافية.",
      keywords: "شركة الفرج, سطحة الخبر, Al Faraj Towing, خدمات السحب, سطحة الدمام, سطحة الظهران, سطحة الجبيل, إنقاذ السيارات, سطحة طوارئ السعودية",
      url: "https://www.satahalfaraj.com/ar",
      image: "https://www.satahalfaraj.com/img9.jpg",
      locale: "ar_SA",
    }
  };

  const currentSEO = seo[lang];

  return (
    <header className={styles.header}>
      <Helmet>
        <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentSEO.url} />

        {/* Geo Tags for Khobar */}
        <meta name="geo.region" content="SA-04" />
        <meta name="geo.placename" content="Khobar" />
        <meta name="geo.position" content="26.2172;50.1971" />
        <meta name="ICBM" content="26.2172, 50.1971" />

        {/* Alternate Language Tags */}
        <link rel="alternate" hreflang="en" href="https://www.satahalfaraj.com/" />
        <link rel="alternate" hreflang="ar" href="https://www.satahalfaraj.com/ar" />
        <link rel="alternate" hreflang="x-default" href="https://www.satahalfaraj.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentSEO.url} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:image" content={currentSEO.image} />
        <meta property="og:locale" content={currentSEO.locale} />
        <meta property="og:site_name" content="Al Faraj Towing Services (شركة الفرج)" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content={currentSEO.image} />

        {/* Structured Data for Khobar */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "TowingService",
            "name": "Al Faraj Towing Services (شركة الفرج)",
            "alternateName": "شركة الفرج لخدمات السحب",
            "image": "${currentSEO.image}",
            "url": "https://www.satahalfaraj.com",
            "telephone": ["+966536121365", "+966555632801"],
            "email": "info@satahalfaraj.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Khobar",
              "addressRegion": "Eastern Province",
              "postalCode": "31952",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.2172,
              "longitude": 50.1971
            },
            "areaServed": [
              {"@type": "City", "name": "Khobar"},
              {"@type": "City", "name": "Dammam"},
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
            "serviceType": "Emergency Towing, Flatbed Towing, Accident Recovery, Long Distance Towing, Luxury Vehicle Transport"
          }
        `}</script>
      </Helmet>

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