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
    
    function promptClick() {
        output.textContent = "";

        setTimeout(function () {
            let promptValue = prompt("What is your name?");
            if (promptValue == null || promptValue == "") {
                output.textContent = `Prompt result : User didn't enter anything`;
            } else {
                output.innerHTML = `Prompt result : ${promptValue}`;
            }
        }, 0)
    }

    function saferPromptClick() {
        output.textContent = "";

        setTimeout(function () {
            let promptValue = prompt("What is your name?");
            if (promptValue == null || promptValue == "") {
                output.textContent = `Prompt result : User didn't enter anything`;
            } else {
                let safePromptValue = DOMPurify.sanitize(promptValue);
                output.innerHTML = `Prompt result : ${safePromptValue}`;
            }
        }, 0)
     }

    alertButton.addEventListener("click", alertClick, true);
    confirmButton.addEventListener("click", confirmClick, true);
    promptButton.addEventListener("click", promptClick, true);
    saferPromptButton.addEventListener("click", saferPromptClick, true);
});

{/* <b onmouseover="alert('pwned')">Roll me</b> */}

