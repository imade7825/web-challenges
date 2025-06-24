import caesarCipher13 from "../../utils/cipher.js";

const headlineText = "Classical Authors";

/* 
When a function return HTML, we are using "react notation" and writing the first letter or the function in caps.
*/

export function Header() {
	const header = document.createElement("header");
	header.className = "header";

	const headline = document.createElement("h1");
	headline.textContent = caesarCipher13(headlineText);

	const button = document.createElement("button");
	button.textContent = "Decipher Headline";
	button.type = "button";
	button.className = "header__button";
	button.addEventListener("click", handleDecipherHeadlineButtonClick);

	header.append(headline, button);

	function handleDecipherHeadlineButtonClick() {
		headline.textContent = headlineText;
		button.setAttribute("disabled", "");
	}
	return header;
}
