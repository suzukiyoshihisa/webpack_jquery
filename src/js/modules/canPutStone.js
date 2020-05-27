/**
 * 盤上で石が置けるかどうかを判定する関数
 * - 既に石が置いてある盤面には石が置けない
 * - 周囲に石の置いてない盤面には石が置けない
 * @param {number} clickedCoordinate[0]
 * @param {number} clickedCoordinate[1]
 * @param {Array} playBoard
 * @return {boolean}
 */

function canPutStone(x, y, playBoard) {
  // 既に石が置いてある盤面には石が置けない
  if (playBoard[x][y] !== 0) return false;

  // 周囲に石の置いてない盤面には石が置けない
  if (
    playBoard[x - 1][y - 1] === 0 &&
    playBoard[x][y - 1] === 0 &&
    playBoard[x + 1][y - 1] === 0 &&
    playBoard[x - 1][y] === 0 &&
    playBoard[x + 1][y] === 0 &&
    playBoard[x - 1][y + 1] === 0 &&
    playBoard[x][y + 1] === 0 &&
    playBoard[x + 1][y + 1] === 0
  )
    return false;

  return true;
}

module.exports = canPutStone;
