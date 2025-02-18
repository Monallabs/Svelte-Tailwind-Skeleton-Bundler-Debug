import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

import postcss from './postcss.config.ts';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [svelte(),
   purgeCss({
			safelist: { standard: ['badge']},
		}
		)
   ],
   css: { postcss

},
   build: {
    lib: {
      entry: 'src/main.ts', // Specify the entry file for the bundle
      name: 'jpComponentBuilder', // Specify the global variable name for the bundle
      formats:['iife'],
      fileName: 'bundle', // Specify the name of the bundle file
    },
    rollupOptions: {
      output: {
      },
    },
  },
  
  });
