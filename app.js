let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#textarea-input");
let txtOutput = document.querySelector("#textarea-output");


// live exercise: querySelector()
// 1. ... textarea tag.
// document.querySelector("#textarea-input");

// 2. ... element with a class btn-primary.
// document.querySelector(".btn-primary");

// 3. ... element with an id input-btn.
// document.querySelector("#input-btn");

// 4. ... input element with an attribute name='translator'.
// document.querySelector("input[name='translator']");

function clickHandler(){
    console.log(txtInput.value);
;}

btnTranslate.addEventListener("click", clickHandler); //clickHandler is a callback here because function addEventListener() takes an input or argument as an another function.

