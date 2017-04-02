// Using document.getElement*
const myHeading = document.getElementsByTagName('h1')[0];
const paragraphs = document.getElementsByTagName('p');
const myList = document.getElementsByTagName('li');
const errorList = document.getElementsByClassName('error');

const generate = document.getElementById('generate');
const myButton = document.getElementById('myButton');
let myTextInput = document.getElementById('myTextInput');

// Using querySelector
const theList = document.querySelector('ul');
let theListItems = document.querySelectorAll('ul li');
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

const emptyInput = (element) => element.value = '';

const getText = (element) => element.value;

const setNumbers = (lowest, highest) => {
	let difference = highest - lowest;
	return item = Math.floor(Math.random() * (difference + 1)) + lowest;
}

const randomNumber = () => {
	return setNumbers(lowerNumber, upperNumber);
}

// Event Listeners
theList.addEventListener('pointerover', function(event) {
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

listAddButton.addEventListener('click', (event) => {
	event.preventDefault();

	let userInput = listAddInput.value;
	let item = document.createElement('li');
	let newItem;
	item.textContent = userInput;

	theList.appendChild(item);
	
	theListItems = document.querySelectorAll('ul li');
	emptyInput(listAddInput);
});

listRemoveButton.addEventListener('click', () => {
	let lastItem = document.querySelector('ul li:last-child');
	theList.removeChild(lastItem);
});

buttonToggle.addEventListener('click', () => {
	theList.style.display = listToggle(theList, buttonToggle);
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
for (let i = 0; i < myList.length; i++) {
	myList[i].style.color = 'blue';
}

for (let i = 0; i < errorList.length; i++) {
	errorList[i].style.color = 'red';
}