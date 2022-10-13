

function updateDisplay(input) {
    document.querySelector("#display").innerText += input;


}



function calculate() {
    const displayValue = document.querySelector("#display").innerText

    const result = eval(displayValue);

    document.querySelector("#display").innerText = result;
}




function clearDisplay() {
    document.querySelector("#display").innerText = "";

}

