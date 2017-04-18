// XHR Request Object
var xhr = new XMLHttpRequest();

// Callback
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		document.querySelector('#ajax').innerHTML = xhr.responseText;
	}
}

// Open Request
xhr.open('GET', 'file.html');

// Send Request
xhr.send();

// When you need to submit information to the server, you can send that information to the server













// AJAX with a button
function sendAJAX() {
	xhr.send();
}