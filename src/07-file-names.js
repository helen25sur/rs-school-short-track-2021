/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  let counter = 1;
  for (let i = 0; i < names.length; i++) {
    if (result.includes(names[i])) {
      const current = `${names[i]}(${counter})`;
      if (names[i].includes(current)) {
        result.push(`${current}(${counter})`);
      } else {
        result.push(`${current}`);
        counter++;
      }
    } else {
      result.push(names[i]);
      counter = 1;
    }
  }
  return result;
}

module.exports = renameFiles;
