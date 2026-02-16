module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'neutral': {
          'bg': '#F6F1E8',
          'surface': '#FFFBF6',
          'text': '#1A1A1A',
          'text-secondary': '#5A5A5A',
          'border': '#E8DFD3'
        },
        'vibrant': {
          'cyan': '#00D4FF',
          'cyan-dark': '#00A8CC',
          'cyan-light': '#66E5FF',
          'magenta': '#FF00CC',
          'magenta-dark': '#CC0099',
          'magenta-light': '#FF66DD',
          'orange': '#FF8C00',
          'orange-dark': '#CC7000',
          'orange-light': '#FFB84D'
        },
        'blush': {
          100: '#FFF5F3',
          200: '#FFE8E1',
          300: '#FFD4C4',
          400: '#FF9B7A',
          500: '#FF6B4A'
        },
        'lavender': {
          100: '#F5F2FA',
          200: '#EBE4F5',
          300: '#D9D1EC',
          400: '#B8ADDA',
          500: '#9B8FD9'
        },
        'sage': {
          100: '#F3F9F7',
          200: '#E0F0E8',
          300: '#C0E0D8',
          400: '#7BC9B0',
          500: '#4DB8A0'
        },
        'sky': {
          100: '#F0F6FC',
          200: '#E0EBF8',
          300: '#BFD9F0',
          400: '#5BA8E0',
          500: '#2B8FC9'
        },
        'gold': {
          100: '#FEFBF5',
          200: '#FDF5E6',
          300: '#F9E8CC',
          400: '#E8C547',
          500: '#D4A520'
        },
        // Joyful & Vibrant palette for Terms/Privacy/Footer
        'choco': {
          50: '#FDF8F4',
          100: '#F5E6D8',
          200: '#E8CDAF',
          300: '#D4A574',
          400: '#8B5E3C',
          500: '#6B3F1F',
          600: '#5A3318',
          700: '#4A2812',
          800: '#3B1E0D',
          900: '#2C1509',
        },
        'coral': {
          50: '#FFF5F0',
          100: '#FFE8DD',
          200: '#FFD0BA',
          300: '#FFB088',
          400: '#FF8C55',
          500: '#FF6B35',
          600: '#E85A2A',
          700: '#CC4A20',
        },
        'teal': {
          50: '#F0FDF9',
          100: '#CCFBEF',
          200: '#99F6DF',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        'sunny': {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        'poppy': {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.10)',
        'bloom': '0 0 40px rgba(255, 107, 74, 0.15)',
        'glow': '0 0 30px rgba(155, 143, 217, 0.12)',
        'warm': '0 4px 20px rgba(107, 63, 31, 0.15)',
        'warm-lg': '0 8px 32px rgba(107, 63, 31, 0.20)',
        'none': 'none'
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px'
      },
      fontFamily: {
        sans: ['Lato', 'Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bloom': 'bloom 4s ease-in-out infinite',
        'drift-slow': 'drift 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '1' },
          '50%': { transform: 'translateY(-12px)', opacity: '0.8' }
        },
        bloom: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.05)', opacity: '0.6' }
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(12px) translateY(-8px)' },
          '50%': { transform: 'translateX(0) translateY(-12px)' },
          '75%': { transform: 'translateX(-12px) translateY(-8px)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      }
    }
  },
  plugins: []
}
