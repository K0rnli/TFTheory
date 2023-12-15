import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        light: {
          shade:'rgb(var(--color-light-shade) / <alpha-value>)',
          accent: 'rgb(var(--color-light-accent) / <alpha-value>)',
        },
        main: 'rgb(var(--color-main) / <alpha-value>)',
        dark: {
          accent: 'rgb(var(--color-dark-accent) / <alpha-value>)',
          shade: 'rgb(var(--color-dark-shade) / <alpha-value>)',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
