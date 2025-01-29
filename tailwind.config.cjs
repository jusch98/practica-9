module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx}"], // Asegúrate de que la ruta sea correcta
  theme: {
    extend: {
      fontFamily: {
        Akira: ['Akira', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // El plugin debe estar aquí
  ],
};
