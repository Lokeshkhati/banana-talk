const btnTranslate = document.querySelector(".btn-translate");
const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");
const errorMsg = document.querySelector(".errorMsg");

const serverUrl = "https://api.funtranslations.com/translate/minion.json";

// formatting url
function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input;
}
// error handling function
function errorHandler(error) {
    errorMsg.innerText = "We are sorry. You can only use this for 5 times per hour. Try again later.";
}
// click event
btnTranslate.addEventListener("click", () => {

    errorMsg.innerText = "";
    output.innerText = "";
    clickEventHandler();
})

// handling click event 
function clickEventHandler() {

    var inputText = textInput.value;
    if (inputText === "") {
        errorMsg.innerText = "Please enter some text";
    } else {
        fetch(getTranslationUrl(inputText))
            .then(response => response.json())
            .then(json => output.innerText = json.contents.translated)
            .catch(errorHandler);   
    }
}