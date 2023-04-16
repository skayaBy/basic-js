const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let max = 0;
  let str = String(n);
  let temp;

  for (let i = 0; i < str.length; i++) {
    temp = str.replace(str[i], '');
    if (max < Number(temp)) max=Number(temp);
  }
  return max;
}

module.exports = {
  deleteDigit
};
