let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#input");
let txtOutput = document.querySelector("#output");
let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Divik Juneja"; //server URL including input to server 'I am Divik Juneja'


function clickHandler(){
   //first way of using fetch() with arrow function definiton
    // fetch(serverURL)
    // .then(response => response.json())
    // .then(json => console.log(json));

    //second way of using fetch() with normal function definition
    fetch(serverURL)
    .then(function response(response){ //response parameter is passed to responseHandler() function which we have received from fetch() funcion. In responseHandler(), we are returning response in the form of json.
         return response.json();
    })
    .then(function logJson(json){ //json value that we recieved from responseHandler() is being passed inside logJson() as a parameter and we are printing that json value on console.
        console.log(json);
    })
;}

btnTranslate.addEventListener("click", clickHandler);
