// Using document.getElement*
const myHeading = document.getElementsByTagName('h1')[0];
const paragraphs = document.getElementsByTagName('p');
const myList = document.getElementsByTagName('li');
const errorList = document.getElementsByClassName('error');

const generate = document.getElementById('generate');
const myButton = document.getElementById('myButton');
let myTextInput = document.getElementById('myTextInput');

// Using querySelector
const updateList = document.querySelector('ul');
let updateListItems = document.querySelectorAll('ul li');
const textHeading = document.querySelector('.textHeading');
const buttonChangeHeading = document.querySelector('.buttonChangeHeading');
const buttonToggle = document.querySelector('.buttonToggle');
const listAddButton = document.querySelector('.itemAdd button');
const listRemoveButton = document.querySelector('.itemAdd button.remove');
const listAddInput = document.querySelector('.itemAdd input');

// Variables for the randomNumber() function
const upperNumber = 999999;
const lowerNumber = 900000;

// Functions
const listToggle = (element, button) => {
	let display = element.style.display;

	if (display == '' || display == 'block') {
		display = 'none';
		button.textContent = 'Show List';
	}
	else if (display == 'none') {
		display = 'block';
		button.textContent = 'Hide List';
	}
	else {
		display = 'block';
	}

	return display;
}

// Removes list item buttons
function updateState() {
	let liFirst = document.querySelector('ul').firstElementChild;
	let liLast = document.querySelector('ul').lastElementChild;
	let updateList = document.querySelector('ul');

	// console.log('Total children: ', updateList.children.length);
	// for (let i = 0; i < updateList.children.length; i++) {
	// 	console.log(updateList.children[i].children.length);
	// 	console.log(updateList.children[i]);

	// 	if (updateList.children[i].children.length == 2) {
	// 		console.log('This has 2 elements');
	// 		for (let x = 0; x < updateList.children[i].children.length; x++) {
	// 			console.log(updateList.children[i].children[x]);
	// 			updateList.children[i].removeChild(updateList.children[i].children[x]);
	// 		}
	// 	}
	// }

	// First <li></li>
	for (let i = 0; i < liFirst.children.length; i++) {
		if (liFirst.children[i].className == 'up') {
			liFirst.removeChild(liFirst.children[i]);
		}
	}

	// Last <li></li>
	for (let i = 0; i < liLast.children.length; i++) {
		if (liLast.children[i].className == 'down') {
			liLast.removeChild(liLast.children[i]);
		}
	}
}

const emptyInput = (element) => element.value = '';
const getText = (element) => element.value;

const setNumbers = (lowest, highest) => {
	let difference = highest - lowest;
	return item = Math.floor(Math.random() * (difference + 1)) + lowest;
}

const randomNumber = () => {
	return setNumbers(lowerNumber, upperNumber);
}

const buttonAdd = (element) => {
	let remove = document.createElement('button');
	let up = document.createElement('button');
	let down = document.createElement('button');

	remove.textContent = 'Remove';
	remove.style.cssFloat = 'right';
	remove.className = 'remove';
	
	up.textContent = 'Up';
	up.style.cssFloat = 'right';
	up.className = 'up';

	down.textContent = 'Down';
	down.style.cssFloat = 'right';
	down.className = 'down';

	try {
		element.appendChild(remove);
		element.appendChild(up);
		element.appendChild(down);
	}
	catch(e) {
		console.log('You must provide an element as an argument to buttonAdd(arg);');
	}
}

// Event Listeners
updateList.addEventListener('pointerover', function(event) {
	let element = event.target

	if (element.tagName == 'li' || element.tagName == 'LI') {
		element.addEventListener('pointerenter', function() {
			element.style.textTransform = 'uppercase';
		});

		element.addEventListener('pointerleave', function() {
			element.style.textTransform = 'lowercase';
		});
	}
});

updateList.addEventListener('click', function(event) {
	let button = event.target;
	let li = button.parentNode;
	let liRefUp = button.parentNode.previousElementSibling;
	let liRefDown = button.parentNode.nextElementSibling;
	let ul = li.parentNode;

	if (button.className == 'up') {
		if (liRefUp) {
			ul.insertBefore(li, liRefUp);
		}
	}

	if (button.className == 'down') {
		if (liRefDown) {
			ul.insertBefore(liRefDown, li);
		}
	}

	if (button.className == 'remove') {
		ul.removeChild(li);
	}
});

listAddButton.addEventListener('click', (event) => {
	event.preventDefault();

	let userInput = listAddInput.value;
	let item = document.createElement('li');
	let newItem;
	item.textContent = userInput;

	buttonAdd(item);
	updateList.appendChild(item);
	updateState();
	emptyInput(listAddInput);
});

listRemoveButton.addEventListener('click', () => {
	let lastItem = document.querySelector('ul li:last-child');
	updateList.removeChild(lastItem);
});

buttonToggle.addEventListener('click', () => {
	updateList.style.display = listToggle(updateList, buttonToggle);
});

buttonChangeHeading.addEventListener('click', () => {
	myHeading.textContent = getText(textHeading);
});

generate.addEventListener('click', () => {
	let hex = '#';
	hex += randomNumber();
	myTextInput.value = hex;
});

myButton.addEventListener('click', (e) => {
	e.preventDefault();

	myHeading.style.color = myTextInput.value;
});

// For loops
for (let i = 0; i < updateListItems.length; i++) {
	buttonAdd(updateListItems[i]);
	updateState();
}