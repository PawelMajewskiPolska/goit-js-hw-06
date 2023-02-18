const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const submitName = (eve) => {
	textOutput.textContent = eve.currentTarget.value;
};
textInput.addEventListener("input", submitName);
