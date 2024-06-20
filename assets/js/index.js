console.dir(document);
console.log(document.body);
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("section"));
console.log(document.getElementById("root"));
const h1 = document.querySelector("h1");
console.dir(h1);
h1.textContent = "Another";
const selectionEl = document.querySelectorAll(".news");
console.log(selectionEl);
//деструктуризація
const [section1, section2] = document.querySelectorAll(".news");
console.log(section1);
const root = document.querySelectorAll("#root");
console.log(root);

//обробка подій - навішування 1
const registr = document.querySelector("#sign");
console.dir(registr);

function eventHandler(event) {
  alert("youareregistered");
}
registr.onclick = eventHandler;
//скидання
registr.onclick = null;

//обробка подій - навішування 2
const login = document.querySelector("#login");
const loginEvHand = (e) => alert("youare"); // оголошуємо і даємо до кожного щоб не створювати посилань:
//login.addEventListener('click', (e)=>alert('youare'))
//login.removeEventListener('click', (e)=>alert('youare'))

login.addEventListener("click", loginEvHand);
login.removeEventListener("click", loginEvHand);

// при наведенні на заголовок вивести привітання
const hello = document.querySelector("#sign");
hello.addEventListener("mouseover", (e) =>
  setTimeout(() => console.log("hello"), 1000)
);

const h2 = document.querySelector("h1");
h2.title = "Its heading";
h2.style.backgroundColor = "green";
h2.style.color = "yellow";

//булеві атрибути
h1.hidden = false;

// const [section1] = document.querySelectorAll('.news')
section1.setAttribute("title", "Section");
section1.setAttribute("style", "border:1px solid red; background-color:blue");
//section1.setAttribute('hidden', 'hidden')

h1.textContent = "Changed text";
h1.innerHTML = "<span>new head</span>";

const news = { title: "news title", body: "some body news" };
const newsTitleEl = document.querySelector("#newsTitle");
newsTitleEl.textContent = news.title;
const newsBodyEl = document.querySelector("#newsBody");
newsBodyEl.textContent = news.body;

//article.innerHtml
// const article = document.querySelector("#newsItem");
// article.innerHTML = `
// <h2>${news.title}</h2> 
// <p>${news.body}</p>`;

//задати атрибути зображення
const imgAtr = {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1280px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
}

const imgEl = document.querySelector('#catImg')

imgEl.src = imgAtr.src;
imgEl.alt = imgAtr.alt;
imgEl.style.width = '300px'
imgEl.onmouseenter = e=>{
    imgEl.style.width =  "400px"
}
imgEl.onmouseleave = e=>{
    imgEl.style.width =  "300px"
}

