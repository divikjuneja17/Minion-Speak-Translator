let btnTranslate = document.querySelector("#btn-translate");

//1st way of addEventListener
// btnTranslate.addEventListener("click", function clickHandler(){
//     console.log("Clicked");
// })

//2nd way of addEventListener
btnTranslate.addEventListener("click", clickHandler);

function clickHandler(){
    console.log("clicked");
;}
