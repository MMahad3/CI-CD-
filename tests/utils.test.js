// tests/utils.test.js
const { increment } = require('../src/utils.js');

test('increment increases number by 1', () => {
  expect(increment(0)).toBe(1);
  expect(increment(41)).toBe(42);
});

test('increment throws for non-number', () => {
  expect(() => increment('x')).toThrow(TypeError);
});
