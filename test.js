import test from 'ava';
import fn from './';

test('valid args', t => {
  t.throws(() => {
    fn([]);
  }, TypeError);
  t.throws(() => {
    fn();
  }, Error);
});

test('basic string', t => {
  t.same(fn(''), []);
  t.same(fn('apple'), []);
  t.same(fn('fuck'), ['fuck']);
  t.same(fn('shit fuck rubber duck'), ['shit', 'fuck']);
  t.same(fn('Shit Fuck! rubber duck'), ['Shit', 'Fuck']);
});
