function randomNumber(numberLow, numberHigh) {
    var difference = numberHigh - numberLow;

    var result = Math.floor(Math.random() * (difference + 1)) + numberLow
    return result;
}

var numberPrompt1 = prompt("First number:");
var numberPrompt2 = prompt("Second number:");

if (isNaN(numberPrompt1) || isNaN(numberPrompt2)) {
    function isNumber(userPrompt) {
        if (isNaN(userPrompt)) {
            return 'No';
        }
        else {
            return 'Yes';
        }
    }

    function ErrorChan(userPrompt) {
        if (isNumber(userPrompt) === 'Yes') {
            console.log('Your value for ' + userPrompt + ' is a number! ');
        }
        else {
            console.log('Your value is not a number: ' + userPrompt);
            throw new Error ('Your value is not a number: ' + userPrompt);
        }
    }

    ErrorChan(numberPrompt1);
    ErrorChan(numberPrompt2);
}

html = "<h1>You rolled " + randomNumber(numberPrompt1, numberPrompt2) + " between the number " + numberPrompt1 + " and " + numberPrompt2 + "</h1>";

document.write(html);