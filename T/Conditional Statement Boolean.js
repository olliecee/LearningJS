var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
    guess = parseInt(guess);

if (guess === randomNumber) {
    correctGuess = true;
}

if (correctGuess) {
    document.write("The number was correct");
}
else {
    document.write("The number was inncorrect. The number was " + randomNumber);
}