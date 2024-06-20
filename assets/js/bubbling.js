'use strict';

const innerDivEl = document.querySelector(".innerDiv");
const outerDivEl = document.querySelector(".outerDiv");

//сплиття - по 
innerDivEl.onclick = handler;
outerDivEl.onclick = handler;
document.body.onclick = handler;

innerDivEl.addEventListener('click',handler,{capture:true})//спрацьовуй в інший бік
outerDivEl.addEventListener('click',handler,{capture:true})


function handler(e) {
    console.dir(this)
    console.dir(e.target)
    console.dir(e.currentTarget);;;
}

let clickCounter = 0;
document.body = addEventListener('click', clickHandler,{capture:true})
function clickHandler(e){
clickCounter++;
console.log(clickCounter);
e.stopPropagation; // зупинити розповсюдження події
}