const showBackgroundColor = document.querySelector(".color");
const changeColorInput = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const newColor = () => {
	showBackgroundColor.textContent = bodyColor.style.backgroundColor =
		getRandomHexColor();
};

changeColorInput.addEventListener("click", newColor);
