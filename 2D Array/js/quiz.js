var correctAnswers = 0;
var wrongAnswers = 0;
var questions = [
  ['1 + 1?', 2],
  ['1 + 2?', 3],
  ['1 + 3?', 4],
  ['1 + 4?', 5],
  ['1 + 5?', 6]
]
var answer;

var print = (message) => {
  const selector = document.getElementById('output');
  selector.innerHTML = message;
}

for (i = 0; i < questions.length; i++) {
  answer = prompt(questions[i][0]);
  answer = parseInt(answer);

  if (answer === questions[i][1]) {
    correctAnswers++;
  }
  else {
    wrongAnswers++;
  }
}

print(
  '<ol>' +
  'Correct answers: ' + correctAnswers + '<br/>' +
  'Wrong answers: ' + wrongAnswers + 
  '</ol>'
);