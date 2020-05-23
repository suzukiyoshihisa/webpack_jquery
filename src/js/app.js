"use strict";
import putStone from "./modules/putStone";
import drawboard from "./modules/drawCanvas";
import clickCanvas from "./modules/clickCanvas";
import initBoard from "./modules/initBoard";
import canPutStone from "./modules/canPutStone";
import "../scss/style.scss";

// 変数
const $canvas = document.querySelector("#reversi");
const ctx = $canvas.getContext("2d");
let gameStatus = {
  playBoard: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  player: 1
};

// 盤面の描画
drawboard(ctx);

// 盤面の初期化
gameStatus = initBoard(ctx, gameStatus);

// 盤面クリックイベント
$canvas.addEventListener("click", event => {
  const clickedCoordinate = clickCanvas(event);
  const clikced_x = clickedCoordinate[0];
  const clikced_y = clickedCoordinate[1];

  if (canPutStone(clikced_x, clikced_y, gameStatus.playBoard)) {
    gameStatus = putStone(
      ctx,
      clickedCoordinate[0],
      clickedCoordinate[1],
      gameStatus
    );
  }

  event.preventDefault();
});
