const showBackgroundColor = document.querySelector(".widget p");
const changeColorInput = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

function getRandomHexColor() {
	const result = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	/* console.log(result); */
	showBackgroundColor.innerHTML = `Background color: ${result}`;
	bodyColor.setAttribute("style", `background-color:${result}`);
}

changeColorInput.addEventListener("click", getRandomHexColor);
