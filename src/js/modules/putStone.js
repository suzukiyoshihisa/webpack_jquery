import changePlayerInfo from "./changePlayerInfo";

/**
 * 指定の位置に石を配置する
 * @return {Object} playBoard
 */
export default function putStone(ctx, x, y, gameStatus) {
  ctx.fillStyle = gameStatus.player === 1 ? "white" : "black";

  ctx.beginPath();
  ctx.arc(
    x === 0 ? 20 : 40 * x + 20,
    y === 0 ? 20 : 40 * y + 20,
    16,
    0,
    2 * Math.PI
  );
  ctx.fill();

  gameStatus.playBoard[x][y] = gameStatus.player;
  gameStatus.player !== 0 && gameStatus.player === 1
    ? (gameStatus.player = 2)
    : (gameStatus.player = 1);

  changePlayerInfo(gameStatus.player);

  return gameStatus;
}
