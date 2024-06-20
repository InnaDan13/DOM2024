"use strict";

// const btn = document.querySelector('button')
// btn.addEventListener('click',heartClickHandler)
// function heartClickHandler(e){
//     this.classList.toggle('redHeart')
//     // e.stopPropagation();
// }

// const article = document.querySelector('article')
// article.addEventListener('click',articleClickHandler)

// function articleClickHandler(){
//     this.classList.toggle('redArticle')
// }

// const btn1 = document.querySelector(".burgerMenuBtn");
// const menuCont = document.querySelector(".burgerMenuContainer");

// btn1.onclick = () => {
//   menuCont.classList.replace(
//     "burgerMenuContainerHide",
//     "burgerMenuContainerActive"
//   );
// };

const burgerMenuContainer = document.querySelector(".burgerMenuContainer");

burgerMenuContainer.addEventListener("click", burgerChangeHandler);

function burgerChangeHandler() {
  this.classList.toggle("burgerMenuContainerHide");
}