const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
	"./content/third.txt",
	`Here is the result: ${first}, ${second}`,
	{ flag: "a" }
); // flag: 'a' appends the text to the file instead of overwriting it
