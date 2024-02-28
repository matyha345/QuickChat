/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      fadeIn: {
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      },
      fadeOn: {
        from: {
          opacity: 1
        },
        to: {
          opacity: 0
        }
      },
      opacityFluctuate: {
        '0%': {
          opacity: 1
        },
        '50%': {
          opacity: 0.5
        },
        '100%': {
          opacity: 1
        }
      }

    },
    animation: {
      fade: 'fadeIn 1s ease-in-out',
      fadeOn: "fadeOn 1s ease-in-out",
      opacityBreathe: 'opacityFluctuate 3s ease-in-out infinite'
    },
    extend: {
      backgroundColor: {
        bgMain: '#111B21',
        bgProfile: "#14121c"
      },
      textColor: {
        whatsApp: '#66DB84',
        viber: '#7360F2'
      }
    },
  },
  plugins: [],
}