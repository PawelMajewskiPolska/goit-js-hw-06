const rangeValue = document.querySelector("#font-size-control");
/* console.log(typeof numberMinRange); */
/* console.log(typeof numberMaxRange); */

const inputEvent = document.querySelector("#font-size-control");

const outputEvent = document.querySelector("#text");

const changeFontSize = (eve) => {
	let newFont = Number(eve.currentTarget.value);
	let newFontPx = newFont + "px";

	outputEvent.style.fontSize = `${newFontPx}`;
};

inputEvent.addEventListener("input", changeFontSize);
