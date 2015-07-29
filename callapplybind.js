/* Call, Apply and Bind
 *
 * 'this' variable environment, outer environment
 */

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}
// Function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

/* 'this' is referring to 'person'. 'person' is a using
 * object literal syntax, an array.
 *
 * getFullName is a function that combines first + last
 * name together. For 'fullname' to know how to obtain 'firstname'
 * and 'lastname' it has to look for it
 *
 * To access 'firstname' in this specific array its
 * 'person.firstname' and 'person.lastname'
 * Since 'getFullName' is within the same array, 'this'
 * refers to 'person'
 *
 * 'person.firstname' = 'this.firstname'
 * 'person.lastname' = 'this.lastname'
 *
 * 'this' refers to whatever container is holding it
 */

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------');

}.bind(person); // .call(person, 'en', 'fr'); etc...

/* logName has a bind function attached , we're passing
 * our 'this' to it and passing 'en' for its 'lang1' parameter
 *
 * Looks like the call function allows you to choose
 * the 'this' and you can pass parameters to it too
 */
logName('en'); // only works when you .bind(person) the end of logName
logName.call(person, 'en', 'fr');
logName.apply(person, ['en', 'fr']); // an array version
/* These are great ways to call or invoke a function
 * when you want to specify the array or 'this' and pass paramters
 */

console.log(person.getFullName.apply(person2));
console.log(person.getFullName.apply({firstname: 'New', lastname: 'Name'}));
/* apply sends 'Jane' and 'Doe' to the 'person' array
 * getFullName is a function that spits out 'Jane Doe'
 * then console.log logs the results
 */


/* Function currying
 *
 * Creating a copy of a function but with some preset parameters
 * Very useful in mathematical situations
 */
function multiply(a, b) {
    return a*b
}

var multiplyByTwo = multiply.bind(this, 2, 2);
console.log(multiplyByTwo(5)); // this value is stored after 'a' and 'b', doesn't overwrite
/* bind makes a copy of multiply
 * 'this' targets the parameter 'a' and 'b'
 * setting values with bind(this, x, x) gives permanent values
 */

var multiplyNew = multiply.bind(this, 2); // 'b' not set
console.log(multiplyNew(4));
/* the value of 'a' is permanently set, but not 'b'
 * therefore, passing a value of 4 gives 'b' NOT 'a' a value
 */

var multiplyNoPermanent = multiply.bind();
console.log(multiplyNoPermanent(5, 5));
// does exactly the same thing, .bind isn't being used
console.log(multiply(5, 5)); // original function
// no permanent values, so we passed them through console.log
// if you're not binding anything, just use the original function

/* What did I learn?
 * If you want to use a function, you can use them by copying them via .bind and setting
 * new values on the fly (if need be) and invoking them
 *
 * You can also borrow other variables in arrays by setting the 'this' to any array!
 * That means you can use the same function, but with different arrays & values + calling it!
 */
