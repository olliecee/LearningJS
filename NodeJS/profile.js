// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const https = require('https');
const http = require('http');

// Function to print errors
function printError(error) {
	console.error(error.message);
}

// Function to print message
function printMessage(username, badgeCount, points) {
	console.log(`${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`);
}

function getProfile(username) {
	try {
		// Connect to the API URL
		const request = https.get(`https://teamtreehouse.com/${username}.json`, function(response) {
			if (response.statusCode === 200) {
				// Vars
				let body = "";

				// Read data
				response.on("data", function(data) {
					body += data.toString();
				});

				response.on("end", function() {
					try {
						// Parse data
						let profile = JSON.parse(body);

						// Print data
						printMessage(username, profile.badges.length, profile.points.JavaScript);
					} catch(error) {
						printError(error);
					}
				});
			} else {
				const message = `There was an error getting your profile for ${username} (${response.statusCode} - ${http.STATUS_CODES[response.statusCode]})`
				const statusCodeError = new Error(message);
				printError(statusCodeError);
			}
		});

		request.on("error", function(error) {
			printError(error);
		});
	} catch(error) {
		printError(error);
	}
}

// Exports the API for usage in other files that 'require' this file
// 1st getProfile = the export
// 2nd getProfile = the function inside this file
module.exports.getProfile = getProfile;