var items = [];
var questions = [
    "1 + 1?",
    "1 + 2?",
    "1 + 3?",
    "1 + 4?",
    "1 + 5?",
];
var answers = [2, 3, 4, 5, 6]
var correctAnswers = 0;

for (i = 0; i < 5; i++) {
    items[i] = prompt(questions[i]);

    // Use this only if the 'if statement' uses strict equality
    // items[i] = parseInt(items[i]);

    if (items[i] == answers[i]) {
        correctAnswers++;
    }
}

if (correctAnswers === 5) {
    document.write('You obtain a Gold Crown');
}
else if (correctAnswers >= 3) {
    document.write('You obtain a Silver Crown. You got ' + correctAnswers + ' correct answers');
}
else if (correctAnswers >= 1) {
    document.write('You get a Bronze Crown. You got ' + correctAnswers + ' correct answers');
}
else {
    document.write('No crown for you. You got ' + correctAnswers + ' correct answers');
}