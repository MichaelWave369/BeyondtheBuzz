import { defineConfig } from 'vite';

// Pages hosts this project under /BeyondtheBuzz/. Without the automatic JSX
// transform, Vite's default classic output calls React.createElement in
// App.jsx, which does not import a React namespace and crashes on first paint.
export default defineConfig({
  base: '/BeyondtheBuzz/',
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
});
