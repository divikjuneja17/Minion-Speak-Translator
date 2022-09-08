let btnTranslate = document.querySelector("#btn-translate");//get me Translate button
let txtInput = document.querySelector("#input"); //get me input textarea
let txtOutput = document.querySelector("#output"); //get me output div
let btnClear = document.querySelector("#btn-clear"); //get me Clear button
let serverURL = "https://api.funtranslations.com/translate/minion.json"; //this is a server URL to which request is send and response of translated text is returned.

function errorHandler(error){ //error handler
 alert("Something wrong with server! Try again after some time.");
 console.log(error);
}

function getTranslatedURL(){ //we are appending user input to serverURL so that server can process it.
    return serverURL + "?" + "text=" + txtInput.value;
}

function clickHandler(){ //when click happens on a Translate button, then this function executes.
    fetch(getTranslatedURL()) //go by the server URL including user input and then fetch response
    .then(response => response.json()) //convert that response to json format
    .then(json => txtOutput.innerText = json.contents.translated) //take that json value and read value of 'translated' text and output it on output div.
    .catch(errorHandler) //passing errorHandler function as an argument to .catch(). errorHandler function is a callback.
;}

function clear(){ //clear function for clear button
    txtInput.value = " ";
}
btnTranslate.addEventListener("click", clickHandler); //telling browser that when click happens on a button, please do the functionality of clickHandler() function.

btnClear.addEventListener("click", clear); //added clear button functionality
