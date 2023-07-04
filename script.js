let errorMessages = {
	email: "Your Input needs to be formatted like an Email!",
	countryShort: "A country has at least 4 letters",
	countryLong: "There is no country with more then 56 letters",
	zip: "Only US Zip codes are accepted, format: xxxxxxxxx or xxxxx or xxxxx-xxxx",
	passwordShort: "Passwords need at least 8 characters",
	passwordLong: "Passwords need at least 20 characters",
	confirmP: "Confirmation needs to be the same as the password",
};

const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation");

email.addEventListener("input", () => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity(errorMessages.email);
	} else {
		email.setCustomValidity("");
	}
});

country.addEventListener("input", () => {
	if (country.validity.tooShort) {
		country.setCustomValidity(errorMessages.countryShort);
	} else if (country.validity.tooLong) {
		country.setCustomValidity(errorMessages.countryLong);
	} else {
		country.setCustomValidity("");
	}
});

zip.addEventListener("input", () => {
	if (zip.validity.patternMismatch) {
		zip.setCustomValidity(errorMessages.zip);
	} else {
		zip.setCustomValidity("");
	}
});

password.addEventListener("input", () => {
	if (password.validity.tooShort) {
		password.setCustomValidity(errorMessages.tooShort);
	} else if (password.validity.tooLong) {
		password.setCustomValidity(errorMessages.tooShort);
	} else {
		password.setCustomValidity("");
	}
});

confirmation.addEventListener("input", () => {
	if (confirmation.value !== password.value) {
		confirmation.setCustomValidity(errorMessages.confirmP);
	} else {
		confirmation.setCustomValidity("");
	}
});
