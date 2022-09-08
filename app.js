let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#input");
let txtOutput = document.querySelector("#output");
let text1 = "I am Iron Man";
let text2 = "I am Batman";
let text3 = "I am Shaktimaan";

//live exercise: different inputText using function
function constructURL(inputText){
    let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" + "text=" + inputText;
    return serverURL;
}


function clickHandler(){
    fetch(constructURL(text1))
    .then(response => response.json())
    .then(json => console.log(json));
;}

btnTranslate.addEventListener("click", clickHandler);
