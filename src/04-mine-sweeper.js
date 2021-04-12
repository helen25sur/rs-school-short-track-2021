/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push(matrix[i][j]);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const length = matrix.length - 1;

      const current = matrix[i][j];
      const prevX = j > 0 ? matrix[i][j - 1] : undefined;
      const nextX = j < matrix[i].length ? matrix[i][j + 1] : undefined;
      const prevY = i > 0 ? matrix[i - 1][j] : undefined;
      const nextY = i < length ? matrix[i + 1][j] : undefined;

      const diagonalPrevX = i > 0 && j > 0 ? matrix[i - 1][j - 1] : undefined;
      const diagonalNextX = i > 0 && j < matrix[i].length ? matrix[i - 1][j + 1] : undefined;
      const diagonalPrevY = i < length && j > 0 ? matrix[i + 1][j - 1] : undefined;
      const diagonalNextY = i < length && j < matrix[i].length ? matrix[i + 1][j + 1] : undefined;

      if (current === false) {
        result[i][j] = 0;
      }

      if (prevX === true) {
        result[i][j] += 1;
      }
      if (prevY === true) {
        result[i][j] += 1;
      }
      if (nextX === true) {
        result[i][j] += 1;
      }
      if (nextY === true) {
        result[i][j] += 1;
      }

      if (diagonalPrevX === true) {
        result[i][j] += 1;
      }
      if (diagonalNextX === true) {
        result[i][j] += 1;
      }
      if (diagonalPrevY === true) {
        result[i][j] += 1;
      }
      if (diagonalNextY === true) {
        result[i][j] += 1;
      }

      if (current === true) {
        result[i][j] = 1;
      }
    }
  }
  return result;
}

module.exports = minesweeper;
