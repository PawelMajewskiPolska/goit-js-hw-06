const buttonMinus = document.querySelector(`button[data-action="decrement"]`);
const buttonPlus = document.querySelector(`button[data-action="increment"]`);
const showCounterValue = document.querySelector("#value");
let counterValue = 0;
/* console.log(buttonMinus.dataset.action);
console.log(buttonPlus.dataset.action);
console.log(typeof displayValue.textContent); */

const handleClickMinus = (eve) => {
	console.log("Wcisnąłeś minus");
	counterValue -= 1;
	showCounterValue.textContent = counterValue;
};
buttonMinus.addEventListener("click", handleClickMinus);

const handleClickPlus = (eve) => {
	console.log("Wcisnąłeś plus");
	counterValue++;
	showCounterValue.textContent = counterValue;
};
buttonPlus.addEventListener("click", handleClickPlus);
