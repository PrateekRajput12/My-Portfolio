import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme: {
    extend: {
      screens: {
        'xs1': '360px',
        'xs2': '480px',
        'xs3': '560px',
        "3xl": "1620px"

        // Custom breakpoint for extra small screens
        // Custom breakpoint for extra small screens
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})