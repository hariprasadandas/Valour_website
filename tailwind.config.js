module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b2545',
          light: '#3a6ea5',
          dark: '#071a2f',
        },
        accent: {
          DEFAULT: '#fbbf24',
          light: '#fde68a',
          dark: '#b45309',
        },
        surface: {
          DEFAULT: '#f3f6fb',
          dark: '#e5e9f2',
        },
        card: {
          DEFAULT: '#fff',
          hover: '#f0f4ff',
        },
        danger: '#ef4444',
        success: '#22c55e',
      },
      boxShadow: {
        'card': '0 2px 8px 0 rgba(11,37,69,0.08)',
        'card-hover': '0 4px 16px 0 rgba(11,37,69,0.12)',
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
      },
    },
  },
  plugins: [],
}
