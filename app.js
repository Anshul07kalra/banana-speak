var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");


function clickHandler() {

    txtOutput.innerText = "ygyuakh " + txtInput.value;
    };


btnTranslate.addEventListener("click" , clickHandler)


