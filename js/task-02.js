const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const list = document.querySelector("#ingredients");

for (const ing of ingredients) {
	let addLiItem = document.createElement("li");
	addLiItem.textContent = ing;
	list.append(addLiItem);
}
