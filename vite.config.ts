import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import { fileURLToPath } from 'url';
// @ts-ignore
import path from 'path';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    lib: {
      entry: {
        Button: path.resolve(__dirname, 'src/components/Button/index.tsx'),
        Card: path.resolve(__dirname, 'src/components/Card/index.tsx'),
        Alert: path.resolve(__dirname, 'src/components/Alert/index.tsx'),
      },
      name: 'ReactViteLib',
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}/index.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return '[name][extname]';
          }
          return '[name][extname]';
        },
      },
    },
  },
});
