/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                liverpool: {
                    red: '#C8102E',
                    gold: '#FFD700',
                },
                memorial: {
                    dark: '#1a1a1a',
                    gray: '#666666',
                    light: '#f5f5f5',
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'serif': ['Georgia', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
} 