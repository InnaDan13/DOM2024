//1.1) Зробити запит даних до одного із серверів (одного з API) на вибір, використовуючи fetch()
//2) Відобразити дані на сторінці за допомогою DOM
//- Випадкове зображення собаки https://dog.ceo/api/breeds/image/random

//HTML code (щоб Ви не підтягували додатково html файл ):

{/* <button class="btnDog">Download random dog picture</button>
<article class="dogArticle"><img src="" alt="" /></article> */}



const RANDOM_DOG = "https://dog.ceo/api/breeds/image/random";

const btnDog = document.querySelector(".btnDog");
btnDog.addEventListener("click", updatePicture1);

function updatePicture1() {
  fetch(`${RANDOM_DOG}`)
    .then((response) => response.json())
    .then((data) => updatePicture(data))
    .catch((error) => console.log(error));

  const articleDog = document.querySelector(".dogArticle");
  articleDog.innerHTML = `<img src="${data.message}"/>`;
}

fetch(RANDOM_DOG)
  .then((response) => response.json())
  .then((data) => updatePicture(data))
  .catch((error) => console.log(error));

function updatePicture(data) {
  const articleDog = document.querySelector(".dogArticle");
  articleDog.innerHTML = `<img src="${data.message}"/>`;
}
