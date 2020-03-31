/**
 * 指定した要素の子要素を全て削除する
 * @param {HTMLElement} elem HTML要素
 */

export default function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
