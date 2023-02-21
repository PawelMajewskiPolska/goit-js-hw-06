const createButton = document.querySelector("button");
const destroyButton = createButton.nextElementSibling;
const newBoxes = document.querySelector("#boxes");
newBoxes.style.maxWidth = "100%";
newBoxes.style.flexWrap = "wrap";
newBoxes.style.display = "flex";
newBoxes.style.gap = "10px";
newBoxes.style.justifyContent = "center";
newBoxes.alignItems = "center";

/* zdarzenie input */
const divArray = [];
const setInput = document.querySelector("input");
console.log(setInput);
setInput.addEventListener("input", (eve) => {
	const amountOfBoxes = eve.currentTarget.value;
	console.log(amountOfBoxes);

	/* funkcja callback - dodawanie div i koloru*/
	createButton.addEventListener("click", createNewBoxes);
	function createNewBoxes() {
		const result = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		console.log("klik");
		/* zwiększanie wymiarów */
		let divSIze = amountOfBoxes * 10 + 20;
		console.log(divSIze);

		/* dodawanie nowego div'a */
		let newBox = document.createElement("div");
		newBoxes.append(newBox);
		/* dodawanie klasy nowego diva */
		newBox.classList.add("temporary");
		newBox.setAttribute(
			"style",
			`width: ${divSIze}px; height: ${divSIze}px; background-color: ${result}; margin: 10px`
		);
	}

	/* usuwanie div */
	destroyButton.addEventListener("click", destroyAllBoxes);

	function destroyAllBoxes(callback) {
		console.log("klik to destroy");
		/* for (i = 0; i <= amountOfBoxes; i++) { */
		const boxesToDestroy = document.querySelector(".temporary");
		boxesToDestroy.remove();
		/* } */
	}
});
