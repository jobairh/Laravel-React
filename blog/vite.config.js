import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import '@viteReactRefresh';
// import "@vite('resources/components/js/menu.js')";
// import "@vite('resources/js/App.js')";
// import "@vite('resources/js/index.js')";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/main.scss',
                'resources/js/main.js',
            ],
            refresh: true,
        }),
        react(),
    ],
});
