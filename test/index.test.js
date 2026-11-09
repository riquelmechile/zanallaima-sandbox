import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hola } from '../index.js';

test('hola saluda', () => {
  assert.equal(hola('Zana'), 'hola Zana');
  assert.equal(hola(), 'hola mundo');
});
