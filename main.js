function generatePassword() {
	let length = document.querySelector("#length").value;
	let charset = "abcdefghijklmnopqrstuvwxyz";

	let numbersCheck = document.getElementById("numbersCheckbox").checked;
	let symbolsCheck = document.getElementById("symbolsCheckbox").checked;
	let upperCheck = document.getElementById("uppercaseCheckbox").checked;

	if (numbersCheck == true) { charset += "1234567890" }
	if (symbolsCheck == true) { charset += "~!@#$%^&*()_+`,./;'[]{}:<>"}
	if (upperCheck == true) { charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }

	password = ""
	for (let char = 0, n = charset.length; char < length; ++char) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(password);

    let passwordField = document.querySelector("#generatedPassword");
    passwordField.display = "block";
    passwordField.innerHTML = "<strong>Generated Password: </strong>" + password

}