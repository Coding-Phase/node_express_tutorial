// Purpose: to export a function to be used in another file

const sayHi = (name) => {
	console.log(`Hello there ${name}`);
};

module.exports = sayHi;
