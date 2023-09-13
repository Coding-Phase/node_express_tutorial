// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./modulesBasic");
const SayHi = require("./utils");
const data = require("./alternativeModuleExport");
// console.log("🚀 - data:", data);
// data: { items: [ 'item1', 'item2' ], singlePerson: { name: 'vishal' } }

// console.log("🚀 - names:", names);
// names: { AuthorFirstName: 'Vishal', AuthorLastName: 'Thakur' }

SayHi("Vishal");
SayHi(names.AuthorFirstName);
SayHi(names.AuthorLastName);
