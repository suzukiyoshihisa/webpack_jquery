export default function changePlayerInfo(gameStatus) {
  const $image = document.querySelector(".image");
  const $info = document.querySelector(".info");
  const $form_black = document.querySelector(".form-black");
  const $form_white = document.querySelector(".form-white");
  const path_a =
    "https://afpbb.ismcdn.jp/mwimgs/0/b/-/img_0b7f1d08190e40ce7111c73343077628328288.jpg";
  const path_b =
    "https://afpbb.ismcdn.jp/mwimgs/8/9/-/img_89e2112b6b848ab05f520cbc4010a5cd202884.jpg";

  let tmp = [];

  if (gameStatus.player === 1) {
    $image.src = path_a;
    $info.innerHTML = "プレーヤー１";

    gameStatus.playBoard.map(element => {
      tmp = tmp.concat(element);
    });
    $form_black.value = tmp.filter(n => {
      return n === 2;
    }).length;
  } else {
    $image.src = path_b;
    $info.innerHTML = "プレーヤー２";

    gameStatus.playBoard.map(element => {
      tmp = tmp.concat(element);
    });
    $form_white.value = tmp.filter(n => {
      return n === 1;
    }).length;
  }
}
