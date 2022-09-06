let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#textarea-input");
let txtOutput = document.querySelector("#textarea-output");




function clickHandler(){
    console.log(txtInput.value);
;}

btnTranslate.addEventListener("click", clickHandler); //clickHandler is a callback here because function addEventListener() takes an input or argument as an another function.

