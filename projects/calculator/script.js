let lastValue = "";
function appendToDisplay(value) {
    
    let displayVal = document.getElementById('display').value ;
    
    if(!displayVal) {
        if(value==="*" || value==="/" || value==="+") {
            console.log("Nothing is going to display...");
            return
        }
       }
    else {
        if(isOperator(value) && isOperator(lastValue)) {
            displayVal = displayVal.slice(0, -1)+value;
            document.getElementById('display').value = displayVal;
            
            return
        }
       }
       document.getElementById('display').value += value;
    lastValue = value;
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
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}