import React from "react";
import styles from "../App.module.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Logo from "./Logo";

const DOMAIN = "https://satah-alkhobar.com";
const PHONE = "+966507688086";
const PHONE_DISPLAY = "0507688086";
const EMAIL = "alkhobarsatah@gmail.com";
const OG_IMAGE = DOMAIN + "/og-image.jpg";

export default function Header() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  const seo = {
    ar: {
      title: "سطحة الخبر | سطحة هيدروليك الخبر | " + PHONE_DISPLAY + " | سحب سيارات 24 ساعة",
      description: "سطحة هيدروليك الخبر - أفضل خدمة سطحة وسحب سيارات في الخبر والدمام والظهران. ننقل سيارتك من الخبر إلى البحرين عبر جسر الملك فهد وحدود الكويت والإمارات. استجابة 10 دقائق، أسعار مناسبة. اتصل الآن " + PHONE_DISPLAY,
      keywords: "سطحة الخبر, سطحة هيدروليك الخبر, سطحة الدمام, سطحة الظهران, سحب سيارات الخبر, سطحة هيدروليك, نقل سيارات الخبر, سطحة طوارئ الخبر, سطحة رخيصة الخبر, سطحة 24 ساعة الخبر, سطحة العزيزية, سطحة الثقبة, سطحة الجبيل, سطحة القطيف, سطحة رأس تنورة, سحب سيارات الدمام, سحب سيارات الظهران, سطحة هيدروليك الدمام, ونش الخبر, ونش سحب الخبر, سطحة نقل سيارات, نقل سيارات من الخبر للبحرين, سطحة جسر الملك فهد, سحب من الخبر للبحرين, سحب حدود الكويت, سحب حدود الإمارات, نقل سيارات الخفجي, satah alkhobar, towing khobar, towing to bahrain from khobar",
      url: DOMAIN,
      image: OG_IMAGE,
      locale: "ar_SA",
    },
    en: {
      title: "Tow Truck Khobar | Hydraulic Flatbed Towing | " + PHONE_DISPLAY + " | 24/7 Service",
      description: "Al Khobar Hydraulic Towing - Based in Khobar. 24/7 flatbed towing across Dammam, Dhahran & Eastern Province. We transport vehicles from Khobar to Bahrain via King Fahd Causeway + Kuwait, UAE & Oman borders. Call " + PHONE_DISPLAY,
      keywords: "tow truck Khobar, towing Khobar, flatbed towing Khobar, سطحة الخبر, vehicle recovery Khobar, towing Dammam, towing Dhahran, emergency towing Khobar, car towing Eastern Province, hydraulic towing Saudi Arabia, Khobar tow truck service, 24/7 towing Khobar, affordable towing Khobar, vehicle transport Khobar to Bahrain, towing from Khobar to Bahrain, King Fahd Causeway towing, cross border towing from Khobar, towing to Kuwait border Khafji, satah alkhobar, satah al khobar",
      url: DOMAIN,
      image: OG_IMAGE,
      locale: "en_US",
    }
  };

  const currentSEO = seo[lang] || seo.ar;

  // Structured Data - Arabic-first
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TowingService",
    "@id": DOMAIN + "/#business",
    "name": "سطحة هيدروليك الخبر",
    "alternateName": ["Al Khobar Hydraulic Towing", "Satah Al Khobar", "سطحة الخبر"],
    "image": [OG_IMAGE],
    "url": DOMAIN,
    "telephone": PHONE,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "الخبر",
      "addressLocality": "الخبر",
      "addressRegion": "المنطقة الشرقية",
      "postalCode": "31952",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.2172,
      "longitude": 50.1971
    },
    "areaServed": [
      {"@type": "City", "name": "الخبر", "sameAs": "https://en.wikipedia.org/wiki/Khobar"},
      {"@type": "City", "name": "الدمام", "sameAs": "https://en.wikipedia.org/wiki/Dammam"},
      {"@type": "City", "name": "الظهران", "sameAs": "https://en.wikipedia.org/wiki/Dhahran"},
      {"@type": "City", "name": "الجبيل"},
      {"@type": "City", "name": "القطيف"},
      {"@type": "City", "name": "رأس تنورة"},
      {"@type": "City", "name": "العزيزية"},
      {"@type": "City", "name": "الثقبة"},
      {"@type": "Country", "name": "البحرين", "sameAs": "https://en.wikipedia.org/wiki/Bahrain"},
      {"@type": "City", "name": "المنامة", "sameAs": "https://en.wikipedia.org/wiki/Manama"},
      {"@type": "City", "name": "الخفجي"},
      {"@type": "City", "name": "البطحاء"},
      {"@type": "City", "name": "الأحساء", "sameAs": "https://en.wikipedia.org/wiki/Al-Ahsa"},
      {"@type": "City", "name": "الرياض", "sameAs": "https://en.wikipedia.org/wiki/Riyadh"},
      {"@type": "City", "name": "جدة", "sameAs": "https://en.wikipedia.org/wiki/Jeddah"},
      {"@type": "City", "name": "مكة المكرمة", "sameAs": "https://en.wikipedia.org/wiki/Mecca"},
      {"@type": "City", "name": "المدينة المنورة", "sameAs": "https://en.wikipedia.org/wiki/Medina"},
      {"@type": "City", "name": "الطائف", "sameAs": "https://en.wikipedia.org/wiki/Ta%27if"},
      {"@type": "City", "name": "أبها", "sameAs": "https://en.wikipedia.org/wiki/Abha"},
      {"@type": "City", "name": "تبوك", "sameAs": "https://en.wikipedia.org/wiki/Tabuk"},
      {"@type": "City", "name": "ينبع", "sameAs": "https://en.wikipedia.org/wiki/Yanbu"}
    ],
    "serviceType": [
      "سطحة هيدروليك",
      "سحب سيارات",
      "نقل سيارات",
      "إنقاذ سيارات",
      "سطحة طوارئ",
      "سحب من الخبر للبحرين",
      "نقل سيارات البحرين",
      "سطحة جسر الملك فهد",
      "سحب حدود الكويت",
      "سحب حدود الإمارات",
      "Emergency Towing",
      "Flatbed Towing",
      "Accident Recovery",
      "Long Distance Towing",
      "Luxury Vehicle Transport",
      "International Towing from Khobar to Bahrain",
      "Vehicle Transport to Bahrain",
      "Cross-Border Towing from Khobar"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "potentialAction": [
      {
        "@type": "CallAction",
        "target": "tel:" + PHONE,
        "name": "اتصل الآن - Call Now"
      },
      {
        "@type": "CommunicateAction",
        "target": "https://wa.me/966507688086",
        "name": "واتساب - WhatsApp"
      }
    ],
    "description": seo.ar.description,
    "slogan": "سطحة هيدروليك الخبر - ننطلق من الخبر وننقل سيارتك أينما تريد",
    "knowsLanguage": ["ar", "en", "ur"]
  };

  // FAQ structured data for search snippets
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "كم يستغرق وصول سطحة الخبر؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نصل داخل الخبر خلال 10-15 دقيقة، وللدمام والظهران 15-25 دقيقة."
        }
      },
      {
        "@type": "Question",
        "name": "هل سطحة هيدروليك الخبر متاحة 24 ساعة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نعمل على مدار الساعة 24/7 بما في ذلك العطلات والأعياد."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي أسعار سطحة الخبر؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "أسعارنا تنافسية وتعتمد على المسافة ونوع المركبة. اتصل للحصول على تسعير فوري بدون رسوم مخفية."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is Khobar tow truck response time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Within Khobar, we arrive in 10-15 minutes. For Dammam and Dhahran, response time is 15-25 minutes."
        }
      }
    ]
  };

  // Service structured data
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "سطحة هيدروليك - Hydraulic Flatbed Towing",
    "provider": {
      "@type": "TowingService",
      "name": "سطحة هيدروليك الخبر",
      "url": DOMAIN
    },
    "areaServed": {
      "@type": "State",
      "name": "المنطقة الشرقية - Eastern Province"
    },
    "description": "خدمات سطحة هيدروليك وسحب سيارات احترافية في الخبر والدمام والظهران - Professional hydraulic flatbed towing",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "availabilityStarts": "00:00",
      "availabilityEnds": "23:59"
    }
  };

  return (
    <header className={styles.header}>
      <Helmet>
        <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={currentSEO.url} />
        <meta name="author" content="سطحة هيدروليك الخبر" />
        <meta name="publisher" content="سطحة هيدروليك الخبر" />
        <meta name="theme-color" content="#1B5E20" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Geo Tags for Khobar */}
        <meta name="geo.region" content="SA-04" />
        <meta name="geo.placename" content="الخبر, Khobar" />
        <meta name="geo.position" content="26.2172;50.1971" />
        <meta name="ICBM" content="26.2172, 50.1971" />
        <meta name="DC.title" content={currentSEO.title} />
        <meta name="DC.description" content={currentSEO.description} />

        {/* Alternate Language Tags */}
        <link rel="alternate" hreflang="ar" href={DOMAIN} />
        <link rel="alternate" hreflang="en" href={DOMAIN} />
        <link rel="alternate" hreflang="x-default" href={DOMAIN} />

        {/* Open Graph - Arabic primary */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="سطحة هيدروليك الخبر - سحب سيارات" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="سطحة هيدروليك الخبر | Satah Al-Khobar" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="سطحة هيدروليك الخبر" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceStructuredData)}</script>

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <div className={styles.overlay}>
        <Logo size={88} variant="full" className={styles.headerLogo} />
        <h1 className={styles.title}>{t("header.title")}</h1>
        <p className={styles.subtitle}>{t("header.subtitle")}</p>

        <div className={styles.contactInfo}>
          <p>📞 <a href={`tel:${t("contact.phone")}`}>{t("contact.phone")}</a></p>
          <p>✉️ <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a></p>
        </div>

        <a href={`tel:${t("contact.phone")}`} className={styles.ctaButton}>
          {t("contact.call")}
        </a>
      </div>
    </header>
  );
}