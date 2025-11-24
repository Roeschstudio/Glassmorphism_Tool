/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#22D3EE",
        "dark-matte": "#111318",
      },
      animation: {
        "slide-down": "slideDown 0.8s ease-out",
        "gradient-move": "gradientMove 10s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gradientMove: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(20vw, 10vh) scale(1.1)" },
          "50%": { transform: "translate(-10vw, 20vh) scale(0.9)" },
          "75%": { transform: "translate(15vw, -5vh) scale(1.05)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(34, 211, 238, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
