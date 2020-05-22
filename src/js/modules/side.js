const $image = document.querySelector(".image");
const $textarea = document.querySelector(".textArea");
const path_a =
  "https://afpbb.ismcdn.jp/mwimgs/0/b/-/img_0b7f1d08190e40ce7111c73343077628328288.jpg";
const path_b =
  "https://afpbb.ismcdn.jp/mwimgs/8/9/-/img_89e2112b6b848ab05f520cbc4010a5cd202884.jpg";

const func1 = () => {
  if ($image.src === path_a) {
    $image.src = path_b;
    $textarea.value = "ほれべさん";
  } else {
    $image.src = path_a;
    $textarea.value = "教えてくれてありがとう";
  }
};
