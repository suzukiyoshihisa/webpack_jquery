/**
 * 盤面の初期化をする関数
 */
import putStone from "./putStone";

export default function initBoard(ctx, gameStatus) {
  putStone(ctx, 3, 3, gameStatus);
  putStone(ctx, 4, 3, gameStatus);
  putStone(ctx, 4, 4, gameStatus);
  putStone(ctx, 3, 4, gameStatus);

  return gameStatus;
}
