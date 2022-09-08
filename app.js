let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#input");
let txtOutput = document.querySelector("#output");
let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

//when we click on button, clickHandler() function executes, then getTranslatedURL() executes in which serverURL is appended with taking input of user from input text area dynamically and then URL is returned to fetch() and then fetch() returns response which is then converted to json format and then output in div get changed to 'translated' text using innerText.
function getTranslatedURL(){
    return serverURL + "?" + "text=" + txtInput.value;
}

function clickHandler(){
    fetch(getTranslatedURL())
    .then(response => response.json())
    .then(json => txtOutput.innerText = json.contents.translated);
;}

btnTranslate.addEventListener("click", clickHandler);
