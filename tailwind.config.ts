import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A497C5", // Color principal
        primaryDark: "rgba(164, 151, 197, 0.8)", // Versión más vibrante del color principal
        secondary: "#BF6BA9", // Color de remate visual
        tertiary: "#3952A6", // Otro color de remate visual
        quaternary: "#F56D46", // Otro color de remate visual
        quinary: "#B73F8B", // Otro color de remate visual
      },
      backgroundImage: {
        radialBlack:
          "linear-gradient(225.95deg, #A497C5 0%, #6d6d6d 0%, #11101d 91.61%)",
        blueRadial:
          "linear-gradient(90deg, #3952A6 0%, rgba(0, 178, 218, 0.8) 95.83%)", // Intensificación de los colores
        blueLight:
          "linear-gradient(90deg, #3952A6 0%, rgba(255, 255, 255, 0.92) 95.83%)", // Haciendo más brillante el gradiente
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.3)", // Sombra más notoria para darle profundidad
        glow: "0px 0px 15px 4px rgba(255, 87, 34, 0.6)", // Sombra que resalta al pasar el cursor
      },
    },
  },
  plugins: [],
};

export default config;
