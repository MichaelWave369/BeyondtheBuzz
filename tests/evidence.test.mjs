import test from 'node:test';
import assert from 'node:assert/strict';
import { sources, spotlight, comparison, organs, myths, marketing } from '../src/data.mjs';

const collections = [
  ...spotlight,
  ...comparison.flatMap(({ alcohol, cannabis }) => [alcohol, cannabis]),
  ...organs,
  ...myths,
  ...marketing,
];

test('every evidence claim includes at least one valid cited source', () => {
  for (const item of collections) {
    assert.ok(Array.isArray(item.refs) && item.refs.length > 0, `Missing source refs: ${JSON.stringify(item)}`);
    for (const ref of item.refs) assert.ok(sources[ref], `Unknown source: ${ref}`);
  }
});

test('all source URLs are HTTPS and have explanatory notes', () => {
  for (const [key, source] of Object.entries(sources)) {
    assert.match(source.url, /^https:\/\//, key);
    assert.ok(source.org && source.title && source.note, key);
  }
});

test('comparison categories have distinct IDs, evidence qualifiers and context', () => {
  const ids = comparison.map(item => item.id);
  assert.equal(ids.length, new Set(ids).size);
  for (const item of comparison) {
    assert.ok(item.context && item.alcohol.evidence && item.cannabis.evidence);
    assert.ok(item.alcohol.text && item.cannabis.text);
  }
});

test('myth exercises have unique IDs and an explanatory answer', () => {
  assert.equal(new Set(myths.map(item => item.id)).size, myths.length);
  assert.ok(myths.every(item => item.verdict && item.answer));
});