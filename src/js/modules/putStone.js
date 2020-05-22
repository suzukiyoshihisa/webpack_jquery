/**
 * 指定の位置に石を配置する
 */
const $canvas = document.querySelector("#reversi");
const ctx = $canvas.getContext("2d");

function putStone(x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(
    x === 0 ? 20 : 40 * x + 20,
    y === 0 ? 20 : 40 * y + 20,
    16,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

$canvas.addEventListener("click", event => {
  const rect = event.target.getBoundingClientRect();
  clickedCoordinate_x = (event.clientX - rect.left) / 40;
  clickedCoordinate_y = (event.clientY - rect.top) / 40;
  putStone(
    Math.floor(clickedCoordinate_x),
    Math.floor(clickedCoordinate_y),
    "white"
  );
});
