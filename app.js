let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#input");
let txtOutput = document.querySelector("#output");



function clickHandler(){
    console.log(txtInput.value);
    txtOutput.innerText = "hahahe " + txtInput.value;
;}

btnTranslate.addEventListener("click", clickHandler);
