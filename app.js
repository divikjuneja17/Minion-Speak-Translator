let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#input");
let txtOutput = document.querySelector("#output");
let btnClear = document.querySelector("#btn-clear");
let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function errorHandler(error){
 alert("Something wrong with server! Try again after some time.");
 console.log(error);
}

function getTranslatedURL(){
    return serverURL + "?" + "text=" + txtInput.value;
}

function clickHandler(){
    fetch(getTranslatedURL())
    .then(response => response.json())
    .then(json => txtOutput.innerText = json.contents.translated)
    .catch(errorHandler) //passing errorHandler function as an argument to .catch(). errorHandler function is a callback.
;}

function clear(){
    txtInput.value = " ";
}
btnTranslate.addEventListener("click", clickHandler);
btnClear.addEventListener("click", clear); //added clear button functionality
