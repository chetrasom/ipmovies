/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Expose', // For Heading
      secondary: 'Bespoke Sans', // For Text, Paragraph
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff0000',
          hover: '#F32314',
          content: '#F44336',
        },
        secondary: '#007bff',
        accent: '#fbbf24',
        neutral: '',
        base: {
          DEFAULT: '#272829',
          '300': '#202020',
          'content': '#6c757d',
        },
      },
      backgroundImage: {
        'heroGradient': 'radial-gradient(at center top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
      },
    },
  },
  plugins: [],
}

