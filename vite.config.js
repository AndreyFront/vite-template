import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import pugPlugin from 'vite-plugin-pug'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    root: './dev',
    base: './',
    server: {
        host: true,
    },
    build: {
        target: 'es2015',
        outDir: '../build',
        emptyOutDir: './',
        rollupOptions: {
            input: {
                index: resolve(__dirname, './dev/index.html'),
                components: resolve(__dirname, './dev/components.html'),
                'ui-kit': resolve(__dirname, './dev/ui-kit.html'),
                home: resolve(__dirname, './dev/home.html')
            },
        },
    },
    resolve: {
        alias: [
            { 
                find: '@', 
                replacement: `${resolve(__dirname, './dev')}` 
            }
        ],
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        },
    },
    plugins: [
        pugPlugin(
            { 
                localImports: true 
            }, 
            { 
                baseUrl: `${resolve(__dirname, './dev')}` 
            }
        ),
        ViteImageOptimizer({}),
    ],
})
