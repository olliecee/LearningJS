var html = '';
var rgbColor;

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function rgbValue(red, green, blue) {
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

for (i = 0; i < 10; i++) {
    rgbColor = rgbValue(randomColor(), randomColor(), randomColor());
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);