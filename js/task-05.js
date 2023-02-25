const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const submitName = (eve) => {
	if (eve.currentTarget.value === "") {
		textOutput.textContent = "Anonymus";
	} else textOutput.textContent = eve.currentTarget.value;
};

textInput.addEventListener("input", submitName);
