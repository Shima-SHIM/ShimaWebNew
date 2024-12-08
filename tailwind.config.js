/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Dosya tarama yolları
  theme: {
    extend: {
      colors: {
        primary: "#FEAC3A", // Özel renk tanımları
        secondary: "#FFC857",
        darkGray: "#1A1A1A",
      },
      fontFamily: {
        gluten: ["Gluten", "cursive"], // Gluten fontunu burada tanımlıyoruz
      },
      spacing: {
        128: "32rem", // Ek özel spacing değerleri
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [], // Ek Tailwind eklentileri burada listelenebilir
};
