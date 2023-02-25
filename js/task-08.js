const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(eve) {
	eve.preventDefault();
	const {
		elements: { email, password },
	} = eve.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Uzupełnij wszystkie pola :-)");
	} else {
		const getData = {
			email: email.value,
			password: password.value,
		};

		console.log(getData);
		eve.currentTarget.reset();
	}
}
