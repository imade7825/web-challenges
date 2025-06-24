import { authors } from "./utils/authors.js";
import { Card } from "./components/Card/Cards.js";
import { Header } from "./components/Header/Header.js";

/** Get root element */
const root = document.querySelector("#root");

/** Header */
const header = Header(); //Here create our Header.
root.append(header);

/** Main: Author Cards */
authors.forEach((author) => {
	const card = Card(author);
	root.append(card);
});
