let lastValue = "";
function appendToDisplay(value) {
    let displayVal = document.getElementById('display').value ;
    if(!displayVal) {
        if(value==="*" || value==="/" || value==="+") {
            document.getElementById('display').value = "value";
        }
       }
    else {
        document.getElementById('display').value += value;
       }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}