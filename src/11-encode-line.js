/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 0;
  let symb = str[0];
  for (let i = 0; i <= str.length; i++) {
    if (symb === str[i]) {
      counter++;
    } else if (symb !== str[i]) {
      if (counter > 1) {
        result += counter;
      }
      result += symb;
      symb = str[i];
      counter = 1;
    } else if (i === str.length - 1) {
      if (counter > 1) {
        result += counter;
      }
      result += symb;
    }
  }
  return result;
}

module.exports = encodeLine;
