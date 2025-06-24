// When we have a default on the file that we are importing we don't need the {}, and we can "rename" the function/ variable
import caesarCipher from "../../utils/cipher.js";

export function Card(author) {
	// Create the card.
	const card = document.createElement("article");
	card.className = "card";

	const title = document.createElement("h2");
	title.className = "card__title";
	title.textContent = author.name;

	const text = document.createElement("p");
	text.className = "card__text";
	text.textContent = caesarCipher(author.text);

	const button = document.createElement("button");
	button.className = "card__button";
	button.textContent = "Decipher";
	button.addEventListener("click", handleDecipherButtonClick);

	card.append(title, text, button);

	function handleDecipherButtonClick() {
		text.textContent = author.text;
		button.setAttribute("disabled", "");
		card.classList.add("card--deciphered");
	}
	return card;
}
