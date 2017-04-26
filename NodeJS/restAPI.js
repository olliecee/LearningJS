const profile = require('./profile');

// Displaying content via API using an array
// const users = ["chalkers", "alenaholligan"]

// for (let i = 0; i < users.length; i++) {
// 	getProfile(users[i]);
// }


// Node process
// console.log(process.argv);
const users2 = process.argv.slice(2);

users2.forEach(function(users2) {
	profile.getProfile(users2);
});