module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        surface: {
          DEFAULT: '#f8fafc',
          dark: '#1e293b',
        },
        card: {
          DEFAULT: '#ffffff',
          hover: '#f1f5f9',
        },
        danger: '#ef4444',
        success: '#22c55e',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
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
