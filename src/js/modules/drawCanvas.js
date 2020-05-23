/**
 * リバーシの盤面を用意する
 * @param {Object} ctx canvasの組み込みObject
 */
export default function drawboard(ctx) {
  ctx.fillStyle = "black";
  for (let col = 0; col < 8; col++) {
    ctx.beginPath();
    ctx.moveTo(40 * col, 0);
    ctx.lineTo(40 * col, 320);
    ctx.stroke();
  }

  for (let row = 0; row < 8; row++) {
    ctx.beginPath();
    ctx.moveTo(0, 40 * row);
    ctx.lineTo(320, 40 * row);
    ctx.stroke();
  }
}
