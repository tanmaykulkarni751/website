window.addEventListener("DOMContentLoaded", () => {

    let output = document.getElementById("output");

    function confirmCancel() {
        output.textContent = "";

        setTimeout(function () {
            output.textContent = "Confirm result : false";
            confirmDialog.close();
        }, 0)

    }

    function confirmOk() {
        output.textContent = "";

        setTimeout(function () {
            output.textContent = "Confirm result : true";
            confirmDialog.close();
        }, 0)
    }

    function promptCancel() {
        output.textContent = "";

        setTimeout(function () {
            output.textContent = "Prompt result : User didn't enter anything";
            promptDialog.close();
        }, 0)

    }

    function promptOk() {
        output.textContent = "";

        let safeResult = DOMPurify.sanitize(input.value);

        setTimeout(function () {
            if(safeResult != "")
                output.innerHTML = `Prompt result : ${safeResult}`;
            else 
                output.textContent = "Prompt result : User didn't enter anything";
            promptDialog.close();
        }, 0)
    }

    function alertButtonClicked() {
        output.textContent = "";

        alertDialog.open = true;
    }

    function confirmButtonClicked() {
        output.textContent = "";

        confirmDialog.open = true;
    }

    function promptButtonClicked() {
        output.textContent = "";
        input.value = "";

        promptDialog.open = true;
    }

    let alertDialog = document.getElementById('alert');
    let confirmDialog = document.getElementById('confirm');
    let promptDialog = document.getElementById('prompt');

    let alertButton = document.getElementById('alert-button');
    let confirmButton = document.getElementById('confirm-button');
    let promptButton = document.getElementById('prompt-button');


    alertButton.addEventListener("click", alertButtonClicked, true);
    confirmButton.addEventListener("click", confirmButtonClicked, true);
    promptButton.addEventListener("click", promptButtonClicked, true);

    let alertOkButton = document.getElementById('ok-alert');
    alertOkButton.addEventListener("click", () => alertDialog.open = false, true);

    let confirmCancelButton = document.getElementById('cancel-confirm');
    let confirmOkButton = document.getElementById('ok-confirm');

    confirmCancelButton.addEventListener("click", confirmCancel, true);
    confirmOkButton.addEventListener("click", confirmOk, true);

    let promptCancelButton = document.getElementById('cancel-prompt');
    let promptOkButton = document.getElementById('ok-prompt');
    let input = document.getElementById('input');

    promptCancelButton.addEventListener("click", promptCancel, true);
    promptOkButton.addEventListener("click", promptOk, true);
});