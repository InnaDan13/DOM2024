// При натисканні на кнопку змінити текст цієї кнопки.
const textChange1 = document.querySelector("#text");
textChange1.addEventListener(
  "click",
  (e) => (textChange1.textContent = "Goodbye")
);

//При натисканні на кнопку змінити її колір.
const colorChange = document.querySelector("#colorChange");
colorChange.addEventListener(
  "click",
  (e) => (colorChange.style.backgroundColor = "blue")
);

//Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.

const imgChange = document.querySelector("img");
imgChange.addEventListener(
  "mouseover",
  (e) =>
    (imgChange.src =
      "https://portaltatrzanski.pl/upload/article/2bdd8b1cb241e4d5521145af1e097035.jpeg")
);

//User card

const user = {
  firstName: "Test",
  lastName: "Testovych",
  profilePhoto:
    "https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg",
  birthday: new Date("2000-05-16"),
  nickname: "super dev",
  likesCount: 10,
};

// const userName = document.querySelector(".user-name")
// userName.textContent = `${user.firstName} ${user.lastName}`
// const profilePic = document.querySelector(".profile-pic")
// profilePic.src = user.profilePhoto
// const age = document.querySelector(".user-age")
// age.textContent = new Date().getFullYear() - user.birthday.getFullYear()
// const nickName = document.querySelector(".user-nickname")
// nickName.textContent = `Nickname: ${user.nickname}`
// const heart = document.querySelector(".heart")
// heart.addEventListener('click',e => heart.style.color = 'red')


const showUserCard = document.querySelector("#download");
showUserCard.addEventListener("click", eventHand);

function eventHand() {
  const userName = document.querySelector(".user-card");
  userName.innerHTML = `<img src="${user.profilePhoto}" 
   alt="Profile Picture" class="profile-pic" style="width: 200px;height: 200px;">
   <h2 class="user-name">${user.firstName} ${user.lastName}</h2> 
   <button class="heart"><i class="fa-solid fa-heart"></i></button>
   <span class="user-nickname">${user.nickname}</span>
   <h3 class="user-title"></h3>
          <span class="user-age">${
            new Date().getFullYear() - user.birthday.getFullYear()
          } years old</span>
   `;
  const heart = document.querySelector(".heart");
  heart.addEventListener("click", (e) => (heart.style.color = "red"));
}
