

const users = [];
function adduser(name) {
  users.push(name);
  console.log("User", name, "added");
}
function removeuser(name) {
  const index = users.indexOf(name);
  if (index > -1) {
    users.splice(index, 1);
    console.log("User", name, "removed");
  } else {
    console.log("User", name, "not found");
  }
}

function getusers() {
  return users;
}

