'use strict';

import test from 'ava';
import timeMachine from '../src/time-machine';

test('test traveling 66 years back', t => {
  t.is(1984, timeMachine(66));
});

test('test hacking to much time', t => {
const error = t.throws(()=> {
    timeMachine(2051);
  }, Error);
  t.is(error.message, 'Error! Hacking too much time!');
});
