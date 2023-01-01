import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/main.scss',
                'resources/js/main.js',
                'resources/images',
                'resources/css/style.css',
                'resources/css/responsive.css',
            ],
            refresh: true,
        }),
        react(),
    ],
});
