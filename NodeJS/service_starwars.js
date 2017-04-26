const https = require("https");
const http = require("http");

const request = http.get("http://swapi.co/api/people/1/?format=json", function(response) {
	// Vars
	let body = "";

	// Read Data
	response.on("data", function(data) {
		body += data.toString();
	});

	response.on("end", function() {
		let profile = JSON.parse(body);
		console.log(profile);
	});
});