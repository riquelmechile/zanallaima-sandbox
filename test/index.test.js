import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hola, suma } from '../index.js';

test('hola saluda', () => {
  assert.equal(hola('Zana'), 'hola Zana');
  assert.equal(hola(), 'hola mundo');
});

test('suma devuelve la suma de dos números positivos', () => {
  assert.equal(suma(2, 3), 5);
});

test('suma admite números negativos y cero', () => {
  assert.equal(suma(-4, 3), -1);
  assert.equal(suma(0, 0), 0);
  assert.equal(suma(0, 7), 7);
});
