const textInput = document.querySelector("#validation-input");
const getAtribute = document.querySelector(
	'#validation-input[data-length="6"]'
);

const checkInputValue = (eve) => {
	textInput.textContent = eve.currentTarget.value;

	if (textInput.textContent.length >= getAtribute.dataset.length) {
		textInput.classList.remove("invalid");
		textInput.classList.add("valid");
	} else {
		textInput.classList.remove("valid");
		textInput.classList.add("invalid");
	}
};

textInput.addEventListener("blur", checkInputValue);
