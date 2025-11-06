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
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'rotate': 'rotate 8s linear infinite',
        'rotate-slow': 'rotate 12s linear infinite',
        'jump': 'jump 3s ease-in-out infinite',
        'jump-delayed': 'jump 3s ease-in-out infinite 1s',
        'float-rotate': 'float 6s ease-in-out infinite, rotate 8s linear infinite',
        'jump-float': 'jump 3s ease-in-out infinite, float 6s ease-in-out infinite',
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
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'rotate': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'jump': {
          '0%, 100%': {
            transform: 'translateY(0px) scale(1)',
          },
          '50%': {
            transform: 'translateY(-30px) scale(1.05)',
          },
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
