const myHeading = document.getElementsByTagName('h1')[0];
const paragraphs = document.getElementsByTagName('p');
const myList = document.getElementsByTagName('li');
const errorList = document.getElementsByClassName('error');

const generate = document.getElementById('generate');
const myButton = document.getElementById('myButton');
let myTextInput = document.getElementById('myTextInput');

const upperNumber = 999999;
const lowerNumber = 900000;

const setNumbers = (lowest, highest) => {
	let difference = highest - lowest;
	return item = Math.floor(Math.random() * (difference + 1)) + lowest;
}

const randomNumber = () => {
	return setNumbers(lowerNumber, upperNumber);
}

generate.addEventListener('click', () => {
	let hex = '#'; 
		hex += randomNumber();
	myTextInput.value = hex;
});

myButton.addEventListener('click', (e) => {
	e.preventDefault();

	myHeading.style.color = myTextInput.value;
});

for (let i = 0; i < myList.length; i++) {
	myList[i].style.color = 'blue';
}

for (let i = 0; i < errorList.length; i++) {
	errorList[i].style.color = 'red';
}