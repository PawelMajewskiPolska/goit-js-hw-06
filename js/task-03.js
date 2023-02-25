const images = [
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

const addGallery = document.querySelector(".gallery");

const urlAdress = [];
for (let element of images) {
	urlAdress.push(`${element.url} height = '273' alt= "${element.alt}"`);
}
const addImages = urlAdress
	.map((el) => `<li class = newClass><img src=${el}></img></li>`)
	.join("");
addGallery.insertAdjacentHTML("beforeend", addImages);

addGallery.style.display = "flex";
addGallery.style.gap = "35px";
addGallery.style.justifyContent = "center";
addGallery.allignItems = "center";
addGallery.style.listStyle = "none";
addGallery.style.backgroundColor = "lightgrey";
