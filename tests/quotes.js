'use strict';

import test from 'ava';
import quotes from '../src/quotes';

test('test get all quotes', t => {
  t.is(6, quotes.all.length);
});

test('test specefic quote exists', t => {
  t.is('Open the doors, Hoff.', quotes.all[4]);
});

test('test get random quote exists', t => {
  t.truthy(quotes.random);
});
