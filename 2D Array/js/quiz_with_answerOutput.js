var correctAnswers = [];
var wrongAnswers = [];
var questions = [
  ['1 + 1?', 2],
  ['1 + 2?', 3],
  ['1 + 3?', 4],
  ['1 + 4?', 5],
  ['1 + 5?', 6]
]
var answer;
var html = '';

function print(message) {
  var selector = document.getElementById('output');
  selector.innerHTML = message;
}

for (i = 0; i < questions.length; i++) {
  answer = prompt(questions[i][0]);
  answer = parseInt(answer);

  if (answer === questions[i][1]) {
    correctAnswers.push(questions[i]);
  }
  else {
    wrongAnswers.push(questions[i]);
  }
}

html += 'You have: ' + correctAnswers.length + ' correct answers. Congratulations!<ol>';
for (i = 0; i < correctAnswers.length; i++) {
  html += '<li><b>Question:</b> ' + correctAnswers[i][0] + '<br/><b>Answer:</b> ' + correctAnswers[i][1] + '</li>';
}

html += '</ol>You have: ' + wrongAnswers.length + ' wrong answers.<ol>';
for (i = 0; i < wrongAnswers.length; i++) {
  html += '<li><b>Question:</b> ' + wrongAnswers[i][0] + '<br/><b>Answer:</b> ' + wrongAnswers[i][1] + '</li>';
}

print(html + '</ol>');