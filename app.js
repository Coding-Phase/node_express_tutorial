// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const AuthorName = "Thakur";

const sayHi = (name) => {
	console.log(`Hello there ${name}`);
};

sayHi("Vishal");
sayHi(AuthorName);
