const display = document.getElementById('display');
function clearDisplay() {
    display.value = '';
}
function AppendInDisplay(value){
    if(display.value === 'Error') clearDisplay();  
    else if(display.value ==='Infinity') clearDisplay();
    
     display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}