const itemCategory = document.querySelectorAll(".item");
console.log(`Number of Categories: ${itemCategory.length}`);
console.log("");
itemCategory.forEach((item) => {
	console.log(`Category: ${item.firstElementChild.textContent}`);
	console.log(`Elements: ${item.lastElementChild.children.length}`);
	console.log("");
});
