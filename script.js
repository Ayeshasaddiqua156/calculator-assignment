// Yeh function display par number ya operator add karega
function pressNum(val) {
    document.getElementById('result-display').value += val;
}

// Yeh function screen ko saaf (Clear) karega
function clearScreen() {
    document.getElementById('result-display').value = '';
}

// Yeh function asal calculation karega jab '=' dabaenge
function calculateResult() {
    try {
        let expression = document.getElementById('result-display').value;
        if (expression) {
            // eval() code ko mathematically calculate karta hai
            document.getElementById('result-display').value = eval(expression);
        }
    } catch (error) {
        document.getElementById('result-display').value = 'Error';
    }
}
