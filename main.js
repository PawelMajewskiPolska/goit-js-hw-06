/* Dodawanie do pliku HTML */
// <script src="path/to/file.js"></script>
// najlepiej tuż przed znacznikiem zamykającym body (</body>), bo na tym etapie cała strona jest już stworozna (jej reprezentacja DOM - o czym sobie oczywiście jeszcze powiemy)

// wysietlenie zawartości podanej w nawiasie w konsoli (przeglądarki - jeśli kod uruchamiamy w przeglądarce)
console.log("ok");

/* INSTRUKCJA - najmniejsza składowa programu */
// Przykłady prostych instrukcji (będziemy je omawiać w dalszej części kursu, póki co przykłady)
2 + 2; //operator dodawania
console.log(2 + 2); //wyświetlenie w konsoli wyniku wyrażenia
console.log("2" + "2");
let result = 2 + 2; //instrukcja dekaracji zmiennej i inicjalizacji jej wartości, która będzie wynikiem wyrażanie 2 + 2 (czyli 4)
"tekst".toUpperCase(); //metoda wykonana na wartości
const users = []; //inicjalizacja zmienne (zmiennej stałej) i stworzenie tablicy (tak własnie tworzy się pustą tablicę: []).

/* 
- instrukcja może coś zwracać albo nie musi. Widać to dobrze w konsoli.
- Instrukcja to zadanie, pojedyńczy element programu. Instrukcja ma sens o ile wpływa na program.
- średnik kończy instrukcję, jeśli nie napiszemy go, to i tak zosatnie dodany w procesie wykonywania kodu.
- mimo wszytsko lepiej dodawać średnik, bo jego brak może powodować różne problemy np. problem z formatowanie kodu w róznych edytorach (przy róznych dodatkach).
- instrukcje są wykonywane po kolei z góry na dół. Tak jest czytany program przez interpreter.
*/

/* NOTACJA WIELBŁĄDZIA (CAMEL CASE)*/
let myName = "Tomasz"; //drugi i kolejne wyrazy w nazwie są pisane z wielkiej litery.
"cos".toUpperCase(); //przykład notacji wielbłądziej w metodzie wbudowanej
const variableName = "tutaj zawartość";

/* KOMENTARZE */
/*
- ignorowane przez interpreter
- pisz, bo za miesiąc nie będziesz pamietał co robiłeś i dlaczego :)
- samokomentujący się kod? Tak, zanim użyjesz komentarza używaj nazw, które będą zrozumiałe i będą określały to co zawiera (robi) zmienna.
*/
// Przykład nazw samokomentujących, gdzie komentarz jest zbędny
/* onst userID = 1023; //identyfkator użytkownika
function upadeteScore() {} //jeśli funkcja ma aktualziować wynik
let lastLogin = "11.09.2018"; //data ostatniego logowania
function addUserToCourse() {} //funkcja, która dodaje użytkownika do kurs

// Przykład nazw, które są nieodpowiednie, bo zbyt ogólne
const item = "Tomasz";
function add() {} */

/*
- komentujemy kod w celach testowych (wyłączyć/włączyć)
*/

//Komentarz jednowierszowy
// ctrl /

/*
komentarz wielowierszowy 
alt shift a
*/
/* const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "14px";
console.log(listWithId);

const listWithClass = document.querySelector(".menu");
console.log(listWithClass); */

/* const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll("..menu-item");
console.log(menuItemsByClass); */

/* const firstMenuItem = document.querySelector(".menu-items");
firstMenuItem.style.color = "tomato";
console.log(firstMenuItem);
 */
/* const listOfItems = document.querySelectorAll("#menu");
console.log(listOfItems);
listOfItems.forEach((item) => {
	console.log(item.lastElementChild.textContent);
});
 */

/* const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const list = document.querySelector("#ingredients");

for (const ing of ingredients) {
	console.log(ing);
	let addLiItem = document.createElement("li");
	addLiItem.textContent = ing;
	list.append(addLiItem);
} */
/* const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];
const addGallery = document.querySelector(".gallery"); */
/* const newGallery = images
	.map(
		(image) =>
			`<li><img class="picture" src=${image.url} width = '350' alt='${image.alt}'></img></li>`
	)
	.join("");
addGallery.insertAdjacentHTML("beforeend", newGallery); */

/* const urlAdress = [];
for (let element of images) {
	urlAdress.push(`${element.url} height = '300' alt= "${element.alt}"`);
}
console.log(urlAdress);
const addImages = urlAdress
	.map((el) => `<li class = newClass><img src=${el}></img></li>`)
	.join("");
addGallery.insertAdjacentHTML("beforeend", addImages);

addGallery.style.listStyle = "none";
addGallery.style.display = "flex";
addGallery.style.gap = "10px";
addGallery.style.justifyContent = "center";
addGallery.alignItems = "center"; */

/* const list = document.querySelector(".gallery");
const newElement = images.map((element) =>`<li><img class="picture" src=${element.url} width = '350' alt='${element.alt}'></img></li>`).join("");

list.insertAdjacentHTML("beforeend", newElement); */

/* 
const altText = [];
for (let alt of images) {
	altText.push(alt.alt);
}
console.log(altText); */

/* const buttonMinus = document.querySelector(`button[data-action="decrement"]`);
const buttonPlus = document.querySelector(`button[data-action="increment"]`);
const counterValue = document.querySelector("#value");
/* console.log(buttonMinus.dataset.action);
console.log(buttonPlus.dataset.action);
console.log(typeof displayValue.textContent); */

/* const handleClickMinus = (eve) => { */
/* console.log("Wcisnąłeś minus"); */
/* counterValue.innerHTML = Number(counterValue.textContent) - 1;
};
buttonMinus.addEventListener("click", handleClickMinus);

const handleClickPlus = (eve) => { */
/* console.log("Wcisnąłeś plus"); */
/* counterValue.innerHTML = Number(counterValue.textContent) + 1;
};
buttonPlus.addEventListener("click", handleClickPlus); */
/* const form = document.querySelector("#name-input");
console.log(form);
const NameOutput = document.querySelector("#name-output");
console.log(NameOutput.textContent);

if (placeholder !== "") {
	console.log("Please fill in all the fields!");
} */
/* 
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const submitName = (eve) => {
	if (eve !== null) {
		output.textContent = eve.currentTarget.value;
		console.log(output.textContent);
	}
};
textInput.addEventListener("input", submitName); */

/* const textInput = document.querySelector("#validation-input");
console.log(textInput);
const getAtribute = document.querySelector(
	'#validation-input[data-length="6"]'
);
console.log(getAtribute.dataset.length);

const checkInputValue = (eve) => {
	textInput.textContent = eve.currentTarget.value;
	console.log(textInput.textContent);
	console.log(typeof textInput.textContent);
	console.log(textInput.textContent.length);
	if (textInput.textContent.length >= getAtribute.dataset.length) {
		console.log("działła");
		textInput.classList.remove("invalid");
		textInput.classList.add("valid");
	} else {
		textInput.classList.remove("valid");
		textInput.classList.add("invalid");
	}
};

textInput.addEventListener("blur", checkInputValue);
 */
/* const rangeValue = document.querySelector("#font-size-control");
const minRange = rangeValue.getAttribute("min");
console.log(minRange);
const numberMinRange = Number(minRange);
console.log(typeof numberMinRange);

const maxRange = rangeValue.getAttribute("max");
console.log(typeof maxRange);
const numberMaxRange = Number(maxRange);
console.log(typeof numberMaxRange);

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
 */
/* 
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(eve) {
	eve.preventDefault();
	const {
		elements: { email, password },
	} = eve.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Uzupełnij wszystkie pola :-)");
	}

	console.log(`Login: ${email.value}, Password: ${password.value}`);
	eve.currentTarget.reset();
} */
/* const showBackgroundColor = document.querySelector(".widget p");
const changeColorInput = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

function getRandomHexColor() {
	console.log("klik");
	const result = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	/* console.log(result); */
/* showBackgroundColor.innerHTML = `Background color: ${result}`;
	bodyColor.setAttribute("style", `background-color:${result}`);
}

changeColorInput.addEventListener("click", getRandomHexColor);
 */
/* function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} */
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
		console.log(amountOfBoxes);
		let divSIze = 0;
		for (i = 0; i <= amountOfBoxes; i++) console.log(divSIze);
		divSIze = i * 10 + 10;
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
