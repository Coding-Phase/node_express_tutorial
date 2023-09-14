const { readFile, writeFile } = require("fs");

// callback
readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile("./content/second.txt", "utf8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;

		// if third-sync.txt not present create one otherwise append to it
		writeFile(
			"./content/third-sync.txt",
			`Here is the result: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log(result);
			}
		);
	});
});
