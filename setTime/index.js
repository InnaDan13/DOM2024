
// Напишіть функцію printNumbers(from, to, interval), яка послідовно виводить у консоль цілі числа, починаючи з from і закінчуючи to, з інтервалом між виведенням сусідніх чисел у interval мс.
// Реалізуйте перший або обидва варіанти рішення:
// - Використовуючи setInterval.

const divEl = document.querySelector("#countdown");

const printNumbers = (from, to, interval) => {
  const num1 = document.createElement("div");
  let from1 = from;
  const showNum = setInterval(() => {
    num1.innerHTML = `${from1}`;
    divEl.append(num1);

  if (from1 === to) {
    clearInterval(showNum);
  }
  from1--},interval)
};
printNumbers(5,0,1000);

// 2. *Виводити посилання через певний час після завантаження сторінки. Поки посилання не відображається, на його місці виводити зворотній відлік "Зачекайте хвилин:секунд".

const bodyEl = document.querySelector("body");

const showLink = () => {
  const link = document.createElement("div");
  link.innerHTML = `<a href="http://google.com" class="specOff">Welcome</a>`;
  bodyEl.append(link);
};
setTimeout(showLink, 6000);

//варіант з display:none
const messageCLas = document.querySelector(".message");
const showLink1 = () => {
  messageCLas.style.display = "block";
};
setTimeout(showLink1, 6000);
