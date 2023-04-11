const minusButton = document.querySelector('.js-minus');
const plusButton = document.querySelector('.js-plus');
const total = document.querySelector('.js-total');

const thisMoveMinus = document.querySelector('.js-minus-this-move');
const thisMovePlus = document.querySelector('.js-plus-this-move');
const thisMoveTotal = document.querySelector('.js-total-this-move');

const refreshButton = document.querySelector('.js-refresh')


plusButton.addEventListener('click', () => {
    total.innerHTML = Number(total.innerHTML) + 1
});

minusButton.addEventListener('click', () => {
    total.innerHTML = Number(total.innerHTML) - 1
});

thisMoveMinus.addEventListener('click', () => {
    thisMoveTotal.innerHTML = Number(thisMoveTotal.innerHTML) - 1
});

thisMovePlus.addEventListener('click', () => {
    thisMoveTotal.innerHTML = Number(thisMoveTotal.innerHTML) + 1
})

refreshButton.addEventListener('click', () => {
    total.innerHTML = Number(total.innerHTML) + Number(thisMoveTotal.innerHTMl)
    thisMoveTotal.innerHTml = "0"
})

resetButton.addEventListener('click', () => {
    total.innerHTML = "0"
    thisMoveTotal.innerHTML = "0"
})