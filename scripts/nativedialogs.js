let content = false;

window.addEventListener("DOMContentLoaded", () => {

    let alertButton = document.getElementById("alert");
    let confirmButton = document.getElementById("confirm");
    let promptButton = document.getElementById("prompt");
    let saferPromptButton = document.getElementById("safer-prompt");
    let output = document.getElementById("output");

    function alertClick() {
        output.textContent = "";
        
        setTimeout(function () {
            alert("Alert pressed!");
        }, 0)
    }

    function confirmClick() {
        output.textContent = "";

        setTimeout(function () {
            let confirmValue = confirm("Do you confirm this?");
            output.textContent = `Confirm result : ${confirmValue}`;
        }, 0)
    }

    function promptClick() { }

    function saferPromptClick() { }

    alertButton.addEventListener("click", alertClick, true);
    confirmButton.addEventListener("click", confirmClick, true);
    promptButton.addEventListener("click", promptClick, true);
    saferPromptButton.addEventListener("click", saferPromptClick, true);
});
