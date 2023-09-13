// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./modulesBasic");
const SayHi = require("./utils");
// console.log("🚀 - names:", names);
// names: { AuthorFirstName: 'Vishal', AuthorLastName: 'Thakur' }

SayHi("Vishal");
SayHi(names.AuthorFirstName);
SayHi(names.AuthorLastName);
