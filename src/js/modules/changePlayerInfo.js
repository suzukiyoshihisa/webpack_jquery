export default function changePlayerInfo(platerNumber) {
  const $image = document.querySelector(".image");
  const $info = document.querySelector(".info");
  const path_a =
    "https://afpbb.ismcdn.jp/mwimgs/0/b/-/img_0b7f1d08190e40ce7111c73343077628328288.jpg";
  const path_b =
    "https://afpbb.ismcdn.jp/mwimgs/8/9/-/img_89e2112b6b848ab05f520cbc4010a5cd202884.jpg";

  if (platerNumber === 1) {
    $image.src = path_a;
    $info.innerHTML = "プレーヤー１";
  } else {
    $image.src = path_b;
    $info.innerHTML = "プレーヤー２";
  }
}
