const inpudEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);
// inpudEl.addEventListener(`input`, inpudHandler);

inpudEl.addEventListener(`input`, (event) => {
    spanEl.style.fontSize = `${event.currentTarget.value}px`
});