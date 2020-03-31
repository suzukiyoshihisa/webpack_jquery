export default function rotateText(node) {
  let deg = 0;
  function rotete() {
    deg = deg + 3;
    deg = deg % 360;
    node.style.transform = `rotateX(${deg}deg)`;

    (0 <= deg && deg < 90) || (270 <= deg && deg < 360)
      ? node.classList.add("face")
      : node.classList.remove("face");
  }

  setInterval(rotete, 20);
}
