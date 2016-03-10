import test from 'ava';
import fn from './';

test('valid args', t => {
  t.pass();
  /*
  t.throws(() => {
    fn();
  }, TypeError);
  t.throws(() => {
    fn();
  }, Error);
  */
});

test('basic string', t => {
  t.same(fn('fuck'), ['fuck']);
  t.same(fn('boat Shit apple fuck orange'), ['Shit', 'fuck']);
});

/*
test('other data types', t => {
  t.same(fn(['fuck']), ['fuck']);
  // t.same(fn('Shit apple fuck'), ['Shit', 'fuck']);
});
*/
