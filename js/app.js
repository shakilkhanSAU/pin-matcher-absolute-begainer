function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        calcInput.value = previousNumber + number; // div e click korleo number ase
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;
    const failError = document.getElementById('notify-fail');
    const successMessage = document.getElementById('notify-success');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none'
    }
    else {

        failError.style.display = 'block';
        successMessage.style.display = 'none';

    }
}