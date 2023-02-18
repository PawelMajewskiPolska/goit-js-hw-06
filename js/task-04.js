const buttonMinus = document.querySelector(`button[data-action="decrement"]`);
const buttonPlus = document.querySelector(`button[data-action="increment"]`);
const counterValue = document.querySelector("#value");
/* console.log(buttonMinus.dataset.action);
console.log(buttonPlus.dataset.action);
console.log(typeof displayValue.textContent); */

const handleClickMinus = (eve) => {
	/* console.log("Wcisnąłeś minus"); */
	counterValue.innerHTML = Number(counterValue.textContent) - 1;
};
buttonMinus.addEventListener("click", handleClickMinus);

const handleClickPlus = (eve) => {
	/* console.log("Wcisnąłeś plus"); */
	counterValue.innerHTML = Number(counterValue.textContent) + 1;
};
buttonPlus.addEventListener("click", handleClickPlus);
