"use strict";

{
  //定数に収納
  const btn = document.querySelector(".btn"); //ハンバーガーアイコン
  const container = document.querySelector(".container"); //メニュー

  //クリックしたときの動き
  btn.addEventListener("click", () => {
    btn.classList.toggle("active"); //.activeを持っていない場合は付与して、持っている場合は外す
    container.classList.toggle("active"); //.activeを持っていない場合は付与して、持っている場合は外す
  });
}
