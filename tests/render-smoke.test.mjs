import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import { fileURLToPath } from 'node:url';

// Unlike vite build, this actually evaluates and renders JSX. It catches
// regressions such as "React is not defined" that can produce a blank page
// despite a green static build.
test('homepage renders content without a runtime JSX crash', async () => {
  const vite = await createServer({
    root: fileURLToPath(new URL('../', import.meta.url)),
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
    logLevel: 'silent',
  });

  try {
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
    const html = renderToString(createElement(App));
    assert.match(html, /BEYOND/);
    assert.match(html, /THE BUZZ/);
    assert.match(html, /Curiosity hits different/);
    assert.match(html, /Evidence above agenda/i);
  } finally {
    await vite.close();
  }
});
