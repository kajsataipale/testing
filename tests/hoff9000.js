'use strict';
import test from 'ava';
import hoff9000 from '../src/hoff9000';

test('test opening the doors', t => {
  t.is('I\'m sorry. I can\' let you do that.', hoff9000.open());
});

test('test closing the doors', t => {
  t.is('Did anyone tell you... not to hassle the Hoff 9000?', hoff9000.close());
});
