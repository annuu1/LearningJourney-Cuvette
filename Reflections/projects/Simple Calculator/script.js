let displayValue = "";
clearField()

function appendNumber(number){
    updateValue(number)
}
function updateValue(number){
    let displayArea = document.getElementById("output")
    displayArea.value = displayArea.value+number
}
function clearField(){
    let displayArea = document.getElementById("output")
    displayArea.value = ''
}