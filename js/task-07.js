const rangeValue = document.querySelector("#font-size-control");
const minRange = rangeValue.getAttribute("min");
const numberMinRange = Number(minRange);
/* console.log(typeof numberMinRange); */
const maxRange = rangeValue.getAttribute("max");
const numberMaxRange = Number(maxRange);
/* console.log(typeof numberMaxRange); */

const inputEvent = document.querySelector("#font-size-control");

const outputEvent = document.querySelector("#text");

const changeFontSize = (eve) => {
	if (numberMinRange <= eve.currentTarget.value <= numberMaxRange) {
		let newFont = Number(eve.currentTarget.value);
		let newFontPx = newFont + "px";
		outputEvent.setAttribute("style", `font-size:${newFontPx}`);
	}
};
inputEvent.addEventListener("input", changeFontSize);
