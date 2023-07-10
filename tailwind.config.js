/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brightRed: 'hsla(328, 100%, 50%, 1)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        purple: 'hsla(273, 100%, 22%, 1)',
        darkPurple: 'hsla(312, 100%, 30%, 1)',
        veryLightGray: 'hsla(0, 0%, 95%, 1)',
      },
      clipPath: {
        'custom-shape': 'polygon(0 0, 100 % 0, 100 % 95 %, 0 95 %)',
      },
    },
  },
  plugins: [],
}
