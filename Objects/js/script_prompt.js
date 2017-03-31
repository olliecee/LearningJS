// Variables
var html = '';
var answer;
var foundName = false;
var students = [
  {
    name: 'Sarah Kay',
    tracks: ['HTML', 'CSS', 'JavaScript'],
    achievements: 71,
    points: 20
  },
  {
    name: 'Richard Donovan',
    tracks: ['Python', 'Django'],
    achievements: 876,
    points: 256
  },
  {
    name: 'Lawrence Krauss',
    tracks: ['C#', '.NET Core', 'ASP.NET Core'],
    achievements: 23,
    points: 324
  },
  {
    name: 'Ollie Cee',
    tracks: ['JavaScript', 'jQuery', 'NodeJS', 'MongoDB', 'Webpack'],
    achievements: 13,
    points: 23
  },
  {
    name: 'John Raynor',
    tracks: ['Oracle', 'NetBeans', 'Java'],
    achievements: 77,
    points: 189
  }
];

// Functions
function print(message) {
  var selector = document.getElementById('application');
  selector.innerHTML = message;
}

// Party starts now
while(!foundName) {
  answer = prompt('Type in a student name to obtain student records');

  if (answer === null || answer === 'quit') {
    foundName = true;
  }
  else {
    for(i = 0; i < students.length; i++) {
      if (answer === students[i].name) {
        html += '<p>' +
                'Name: ' + students[i].name + '<br/>' + 
                'Tracks: ' + students[i].tracks.join(', ') + '<br/>' + 
                'Achievements: ' + students[i].achievements + '<br/>' + 
                'Points: ' + students[i].points + '<br/>' + 
                '</p>';
        foundName = true;
      }
    }
  }
}

print(html);