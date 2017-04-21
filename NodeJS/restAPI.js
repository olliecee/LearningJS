// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const https = require('https');

// Function to print message
function printMessage(username, badgeCount, points) {
	console.log(`${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`);
}

function getProfile(username) {
	// Connect to the API URL
	const request = https.get(`https://teamtreehouse.com/${username}.json`, function(response) {
		// Vars
		let body = "";

		// Read data
		response.on("data", function(data) {
			body += data.toString();
		});

		response.on("end", function() {
			// Parse data
			let profile = JSON.parse(body);

			// Print data
			printMessage(username, profile.badges.length, profile.points.JavaScript);
		})
	});
}



// Displaying content via API using an array
const users = ["chalkers", "alenaholligan"]

for (let i = 0; i < users.length; i++) {
	printMessage(users[i]);
}



// Node process
console.log(process.argv);

const users2 = process.argv.slice(2);

users2.forEach(function(users2) {
	getProfile(users2);
});