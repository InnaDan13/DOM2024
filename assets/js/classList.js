'use strict'

const taskEl = document.querySelector('#task1');
taskEl.addEventListener('click', doneTaskHandler)
function doneTaskHandler (e){
    console.dir(this)
    // this.style.textDecoration = 'line-through'
    // this.className ="doneTask"
    this.classList.toggle('doneTask')
    // classList - add remove toggle replace
    this.classList.replace("redTask","greenTask")

}
const h1 = document.querySelector(".h1");
h1.addEventListener("click", changeBorder);

function changeBorder(e) {
      this.classList.toggle("h1");
}