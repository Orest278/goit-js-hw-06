let counterValue = 0;
const couter = document.querySelector(`#value`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);

decrementBtn.addEventListener(`click`, () => {
    counterValue -= 1;
    couter.textContent = counterValue;
});

incrementBtn.addEventListener(`click`, () => {
    counterValue += 1;
    couter.textContent = counterValue;
});