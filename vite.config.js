import path from 'path';
import { defineConfig } from "vite";
export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles'),
            '@md': path.resolve(__dirname, './src/md'),
            '@components': path.resolve(__dirname, './src/components'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ComponentLibrary',
        },
        rollupOptions: {
            external: ['lit'],
            output: {
                globals: {
                    lit: 'lit',
                },
            },
        },
    },
});
