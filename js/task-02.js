const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientsArray = ingredients.map((ing) => {
	const addLiItem = document.createElement("li");
	addLiItem.textContent = ing;
	return addLiItem;
});

list.append(...ingredientsArray);
