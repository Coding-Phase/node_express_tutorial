const path = require("path");

// console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");
// console.log("🚀 - filePath:", filePath);

const basePath = path.basename(filePath);
// console.log("🚀 - basePath:", basePath);

const absolutePath = path.resolve(
	__dirname,
	"content",
	"subfolder",
	"text.txt"
);
// console.log("🚀 - absolutePath:", absolutePath);
