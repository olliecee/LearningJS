// Variables
var html = '';
var answer;
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
for(i = 0; i < students.length; i++) {
  html += '<p>' +
          'Name: ' + students[i].name + '<br/>' + 
          'Tracks: ' + students[i].tracks.join(', ') + '<br/>' + 
          'Achievements: ' + students[i].achievements + '<br/>' + 
          'Points: ' + students[i].points + '<br/>' + 
          '</p>';
}

print(html);