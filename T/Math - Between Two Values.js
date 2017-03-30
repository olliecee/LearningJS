var numberPrompt1 = prompt("First number:");
var numberPrompt2 = prompt("Second number:");
var difference;
var result;

numberPrompt1 = parseInt(numberPrompt1);
numberPrompt2 = parseInt(numberPrompt2);

if (numberPrompt2 <= numberPrompt1) {
    numberPrompt2 = prompt("2nd number must be higher than 1st:")
}

difference = numberPrompt2 - numberPrompt1;

result = Math.floor(Math.random() * (difference + 1)) + numberPrompt1

html = "<h1>You rolled " + result + " between the number " + numberPrompt1 + " and " + numberPrompt2 + "</h1>";

document.write(html);