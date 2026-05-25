const { adduser, getusers, removeuser } = require("./variablehandler.js");
adduser("Alice");
adduser("Bob");
console.log(getusers());
removeuser("Alice");
console.log(getusers());