"use strict";
import rotateText from "./modules/rotateText";
import assessment from "./modules/assessment";
import removeAllChildren from "./modules/removeAllChildren";
import "../scss/style.scss";

const $title = $(".title");
const message = "your good things search";

// jqueryによる値段の表示(jqueryも使えるという確認)
$title.text(message);

// cssアニメーション
rotateText(document.querySelector(".title"));

// 名前診断関数
const submitButton = document.querySelector(".js-assessment");
// ボタン押下処理
submitButton.onclick = () => {
  const userName = document.querySelector(".js-userName");
  const result = document.querySelector(".js-result");
  const tweet = document.querySelector(".js-tweet");

  // ガード句_特定の処理の際にreturnする。
  if (userName.value.length === 0) return;

  // 削除処理
  removeAllChildren(result);

  // 診断結果表示
  const header = document.createElement("h3");
  header.innerText = "診断結果";
  result.appendChild(header);

  const paragraph = document.createElement("p");
  paragraph.innerText = assessment(userName.value);
  result.appendChild(paragraph);

  // TODO ツイートエリアの作成
  removeAllChildren(tweet);

  const anchor = document.createElement("a");
  const hrefValue =
    "https://twitter.com/intent/tweet?button_hashtag=" +
    encodeURIComponent("あなたのいいところ") +
    "&ref_src=twsrc%5Etfw";

  anchor.setAttribute("href", hrefValue);
  anchor.className = "twitter-hashtag-button js-tweetButton";
  anchor.setAttribute("data-text", assessment(userName.value));
  anchor.innerText = "Tweet #あなたのいいところ";
  tweet.appendChild(anchor);

  const script = document.createElement("script");
  script.setAttribute("src", "https://platform.twitter.com/widgets.js");
  tweet.appendChild(script);
};

console.log(assessment("たろう"));
//　テストコード
console.assert(
  assessment("たろう") ===
    "たろうのいいところは情熱です。たろうの情熱に周りの人は感化されます。"
);
