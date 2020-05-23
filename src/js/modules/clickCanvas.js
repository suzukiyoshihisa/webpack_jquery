/**
 * canvas上のクリックした座標を返す関数
 * @param {*} event
 */
export default function clickCanvas(e) {
  const resultCoordinate = [null, null];
  const rect = e.target.getBoundingClientRect();
  const clickedCoordinate_x = (e.clientX - rect.left) / 40;
  const clickedCoordinate_y = (e.clientY - rect.top) / 40;

  resultCoordinate[0] = Math.floor(clickedCoordinate_x);
  resultCoordinate[1] = Math.floor(clickedCoordinate_y);
  return resultCoordinate;
}
