/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
"use strict";
// this function is strict...

/* let string = "some string";

let i = 0;

while (i < string.length) {
    setTimeout(() => {
        console.log(i++);
    }, 2000);
} */




let startStr = "Hi it's"
let str = "Hello it's string of javascript";

const strP = document.getElementById('string');
const btn = document.getElementById('button');

let idInterval;

let arrWords = str.split(' ');
let lastWord = arrWords[arrWords.length - 1];
let index = str.indexOf(lastWord);
console.log(index);

function getLastIndex(string) {
    
}

let b = startStr.length;

function reverceRender() {
    clearInterval(idInterval);
    strP.classList.remove('blink');
    strP.innerHTML = startStr.slice(0, b);
    b--;
    let firstId = setTimeout(reverceRender, 280);
    if (b < 0) {
        clearTimeout(firstId);
        b = startStr.length;
        render();

    }
}


let i = 0;

function render() {
    strP.innerHTML = str.slice(0, i);
    i++;
    if (i > index) {
        strP.innerHTML = `${str.slice(0, index)}<span>${str.slice(index, i)}</span>`;
    }
    let secondId = setTimeout(render, 150);
    if (i == str.length + 1) {
        clearTimeout(secondId);
        i = 0;
        startBlink(strP);
        setTimeout(reverceRenderJs, 5500);

    }

}

let c = str.length;

function reverceRenderJs() {
    clearInterval(idInterval);
    strP.classList.remove('blink');
    strP.innerHTML = `${str.slice(0, index)}<span>${str.slice(index, c)}</span>`;
    c--;
    if (c < index) {
        strP.innerHTML = str.slice(0, c);
    }
    let thirdId = setTimeout(reverceRenderJs, 120);
    if (c < 0) {
        clearTimeout(thirdId);
        c = str.length;
        renderFirst();

    }
}

let d = 0;

function renderFirst() {
    strP.innerHTML = startStr.slice(0, d);
    d++;
    let fourthId = setTimeout(renderFirst, 200);
    if (d == startStr.length + 1) {
        clearTimeout(fourthId);
        d = 0;
        startBlink(strP);
        setTimeout(reverceRender, 3500);
    }
}

function reload() {
    document.location.reload();
}


function swichBlink(unit) {
    unit.classList.toggle('blink');
}



function startBlink(cursor) {
    idInterval = setInterval(() => {
        swichBlink(cursor);
    }, 400);
}

btn.addEventListener('click', reload);

startBlink(strP);

setTimeout(reverceRender, 3000);