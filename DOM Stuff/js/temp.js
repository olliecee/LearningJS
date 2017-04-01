// Declarative functions
function say(message) {
	console.log(message);
}

function exec(func, arg) {
	func(arg);
}

// Passing a function into another function
// The say(); function is the callback function
exec(say, 'ok');




// An example of passing a function into another function
// The function inside of setTimeout (function) is called a call-back function
window.setTimeout(function(message) {
	console.log(message);
}, 5000, 'Hello Friends')