'use strict';

/**
 * Open the doors in HOFF9000.
 *
 * @param {bool} openDoors
 *
 * @return {string}
 */
const open = () => {
  return 'I\'m sorry. I can\' let you do that.';
};

/**
 * Close the doors in HOFF9000.
 *
 * @param {bool} openDoors
 *
 * @return {string}
 */
const close = () => {
  return 'Did anyone tell you... not to hassle the Hoff 9000?';
};

module.exports.open = open;
module.exports.close = close;
