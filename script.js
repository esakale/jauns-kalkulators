const input1 = document.querySelector('.js-teksts');
const plusButton = document.querySelector('.js-plus');
const minusButton = doument.querySelector('.js-minus');
const multiplyButton = document.querySelector('.js-multiply');
const divideButton = document.querySelector('.js.divide');
const result = document.querySelector('.js-result');

const Add = (skaitlis1, skaitlis2) => {
    return skaitlis1 + skaitlis2
}

const Subtract = (skaitlis1, skaitlis2) => {
    return skaitlis1 - skaitlis2
}

const Multiply = (skaitlis1, skaitlis2) => {
    return skaitlis1 * skaitlis2
}

const Divide = (skaitlis1, skaitlis2) => {
    return skaitlis1 / skaitlis2
}

plusButton.addEventListener('click', () => {
    result.innerHTML = Add(Number(input1.value), Number (input2.value))
})