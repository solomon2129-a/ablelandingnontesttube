module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current:     'currentColor',
      inherit:     'inherit',
      light:  '#EEF1F3',
      sage:   '#7A9591',
      mist:   '#C6CFD6',
      brick:  '#9C352B',
      forest: '#0C2E2B',
    },
    extend: {
      fontFamily: {
        sans:    ['Lato', 'Inter', 'ui-sans-serif', 'system-ui'],
        serif:   ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'brutal':          '4px 4px 0px #0C2E2B',
        'brutal-brick':    '4px 4px 0px #9C352B',
        'brutal-sage':     '4px 4px 0px #7A9591',
        'brutal-mist':     '4px 4px 0px #C6CFD6',
        'brutal-lg':       '8px 8px 0px #0C2E2B',
        'brutal-brick-lg': '8px 8px 0px #9C352B',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
