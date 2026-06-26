/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0D10",
          surface: "#131720",
          raised: "#1B212B",
          border: "#232A35",
        },
        ink: {
          hi: "#EDEFF2",
          lo: "#8A93A1",
          faint: "#5A6372",
        },
        signal: {
          DEFAULT: "#4FD1C5",
          dim: "#2C7A72",
        },
        weight: {
          DEFAULT: "#F5B544",
          dim: "#8A6628",
        },
        critical: {
          DEFAULT: "#FB7185",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
