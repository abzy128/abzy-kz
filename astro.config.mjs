// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://abzy.kz',
    vite: {
        resolve: {
            alias: {
                '@': '/src',
            }
        }
    }
});
