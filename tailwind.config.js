/** 
 * Tailwind Configuration
 * مسؤول عن:
 * - تحديد أماكن قراءة الكلاسات (content)
 * - تعريف Design System (الألوان)
 */

module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./features/**/*.{js,ts,jsx,tsx}", // 🔥 هذا المهم
],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "hsl(var(--brand-red))",
          "red-light": "hsl(var(--brand-red-light))",
          "red-lighter": "hsl(var(--brand-red-lighter))",
          "red-dark": "hsl(var(--brand-red-dark))",
          yellow: "hsl(var(--brand-yellow))",
        },
      },
    },
  },
  plugins: [],
};