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
  const str = String(n);
  let min = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] < min) {
      min = str[i];
    }
  }
  let result = '';
  let addedCounter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== min) {
      result += str[i];
    } else if (str[i] === min) {
      addedCounter++;
      if (addedCounter > 2) {
        result += str[i];
      }
    }
  }
  result = Number(result);
  return result;
}

module.exports = deleteDigit;
