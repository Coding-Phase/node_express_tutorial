// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Local variables
const secret = "SuPER SECRET";
// Share variables
const AuthorFirstName = "Vishal";
const AuthorLastName = "Thakur";

// console.log(module);   // module is an object
module.exports = { AuthorFirstName, AuthorLastName };
