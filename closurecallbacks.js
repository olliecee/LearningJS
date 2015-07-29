/* Explaining how we are already using:
 * - first class functions
 * - closures
 * - callbacks
 */

function sayHiLater() {

    var greeting = 'Hi!'

    // Calback
    setTimeout(function() {
        console.log(greeting);
    }, 3000);

}

sayHiLater();

/* Callback Function
 *
 * A function you give to another function to be run
 * when the other function is finished
 *
 * So the function you call (i.e invoke), calls back
 * by calling the function you gave it when it finishes
 *
 * So if you call function "a" and it has function "b"
 * Once "a" finishes, it calls "b"
 */

function tellMeWhenDone(callback) {

    var a = 1000;
    var b = 2000;

    callback();
}

tellMeWhenDone(function(){
    console.log('I am done!');
});

tellMeWhenDone(function(){
    console.log('All done...');
});

// jQuery uses function expressions and first-class functions!
// $("button").click(function () {
//
// });