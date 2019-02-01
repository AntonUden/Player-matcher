var users = require("./users.json");
var user1, user2 = "";

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

while(users.length > 1) {
	user1 = users.splice(getRandomInt(users.length), 1)[0];
	user2 = users.splice(getRandomInt(users.length), 1)[0];
	console.log(user1 + " Vs " + user2);
}

if(users.length > 0) {
	console.log(users[0] + " not matched");
}