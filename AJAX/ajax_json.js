// XHR Reuqest Object
var xhr = new XMLHttpRequest();

// Callback (arrow function)
xhr.onreadystatechange = () => {
	if (xhr.readyState === 4) {
		// JSON.parse converts the string response (the JSON file) into JSON
		const employees = JSON.parse(xhr.responseText);
		let statusHTML = '<ul>';

		for (let i = 0; i < employees.length; i++) {
			if (employees[i].inoffice === true) {
				// Using template literal (ES6)
				statusHTML += `<li class="on">${employees[i].name}</li>`;
			}
			else {
				statusHTML += `<li class="off">${employees[i].name}</li>`;
			}
		}

		// Closes the 'ul' element
		statusHTML += '</ul>';

		// Displays who is in the office
		document.querySelector('#target').innerHTML = statusHTML;
	}
}

// Open Reuqest
xhr.open('GET', 'people.json');

// Send Request
xhr.send();