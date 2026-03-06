import React from 'react';

/**
 * سطحة هيدروليك الخبر - Professional SVG Logo
 * Brand: Green (#1B5E20) + Gold (#D4AF37) Saudi towing theme
 */
export default function Logo({ size = 60, variant = 'full', className = '' }) {
  const fullLogoViewBoxWidth = 500;
  const fullLogoViewBoxHeight = 150;
  const height = size;
  const width =
    variant === 'icon'
      ? size
      : (size * fullLogoViewBoxWidth) / fullLogoViewBoxHeight;

  if (variant === 'icon') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className={className}
        role="img"
        aria-label="سطحة الخبر"
      >
        {/* Circle background */}
        <circle cx="50" cy="50" r="48" fill="#1B5E20" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
        
        {/* Tow truck silhouette */}
        <g transform="translate(15, 25)" fill="#D4AF37">
          {/* Truck cab */}
          <rect x="42" y="15" width="22" height="22" rx="3" />
          <rect x="52" y="18" width="10" height="10" rx="2" fill="#1B5E20" opacity="0.5" />
          
          {/* Flatbed */}
          <rect x="2" y="20" width="42" height="8" rx="2" />
          <rect x="0" y="28" width="68" height="6" rx="2" />
          
          {/* Hydraulic arm */}
          <line x1="35" y1="20" x2="25" y2="5" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
          <line x1="25" y1="5" x2="15" y2="15" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
          <circle cx="25" cy="5" r="3" fill="#D4AF37" />
          
          {/* Wheels */}
          <circle cx="15" cy="38" r="7" fill="#D4AF37" />
          <circle cx="15" cy="38" r="4" fill="#1B5E20" />
          <circle cx="15" cy="38" r="2" fill="#D4AF37" />
          
          <circle cx="55" cy="38" r="7" fill="#D4AF37" />
          <circle cx="55" cy="38" r="4" fill="#1B5E20" />
          <circle cx="55" cy="38" r="2" fill="#D4AF37" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 150"
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="سطحة هيدروليك الخبر - Satah Al Khobar"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B5E20" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {/* Icon circle */}
      <circle cx="72" cy="75" r="58" fill="url(#logoGrad)" />
      <circle cx="72" cy="75" r="53" fill="none" stroke="#D4AF37" strokeWidth="2.4" />

      {/* Truck icon in circle */}
      <g transform="translate(34, 45)" fill="#D4AF37">
        <rect x="42" y="10" width="18" height="18" rx="3" />
        <rect x="50" y="13" width="8" height="8" rx="1.5" fill="#1B5E20" opacity="0.5" />
        <rect x="4" y="16" width="40" height="6" rx="2" />
        <rect x="2" y="22" width="62" height="5" rx="2" />
        <line x1="32" y1="16" x2="24" y2="5" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="5" x2="16" y2="14" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="5" r="2.5" fill="#D4AF37" />
        <circle cx="14" cy="31" r="6" fill="#D4AF37" />
        <circle cx="14" cy="31" r="3.5" fill="#1B5E20" />
        <circle cx="14" cy="31" r="1.5" fill="#D4AF37" />
        <circle cx="52" cy="31" r="6" fill="#D4AF37" />
        <circle cx="52" cy="31" r="3.5" fill="#1B5E20" />
        <circle cx="52" cy="31" r="1.5" fill="#D4AF37" />
      </g>

      {/* Arabic text - primary */}
      <text
        x="150"
        y="54"
        fontFamily="'Noto Kufi Arabic', 'Tajawal', 'Cairo', Arial, sans-serif"
        fontWeight="800"
        fontSize="27"
        fill="#1B5E20"
        dominantBaseline="middle"
      >
        سطحة هيدروليك الخبر
      </text>

      {/* English text - secondary */}
      <text
        x="150"
        y="86"
        fontFamily="'Poppins', 'Segoe UI', Arial, sans-serif"
        fontWeight="700"
        fontSize="15"
        fill="#D4AF37"
        dominantBaseline="middle"
      >
        SATAH AL-KHOBAR
      </text>

      {/* Tagline */}
      <text
        x="150"
        y="116"
        fontFamily="'Poppins', 'Segoe UI', Arial, sans-serif"
        fontWeight="500"
        fontSize="12"
        fill="#757575"
        dominantBaseline="middle"
      >
        24/7 Professional Towing Services | خدمات سحب احترافية
      </text>

      {/* Gold accent line */}
      <line x1="150" y1="70" x2="430" y2="70" stroke="url(#goldGrad)" strokeWidth="1.7" opacity="0.6" />
    </svg>
  );
}
