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

/* 'this' is referring to 'person'. 'person' is a using
 * object literal syntax, an array.
 *
 * getFullName is a function that combines first + last
 * name together. For 'fullname' to know obtain 'firstname'
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
 *
 */