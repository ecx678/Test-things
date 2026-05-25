const { adduser, getusers, removeuser } = require("./variablehandler.js");
function runcommand() {
    command = document.getElementById("command");
    eval(command.value);
}