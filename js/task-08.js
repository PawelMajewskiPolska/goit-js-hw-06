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
}
