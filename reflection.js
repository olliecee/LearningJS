/* Reflection
 *
 * An object can look at itself,
 * listing and changing its properties and methods.
 */

var person = {
    firstname: 'default',
    lastname: 'default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'john',
    lastname: 'doe'
}

john.__proto__ = person;

for (var prop in john) {
    console.log(prop + ': ' + john[prop]);
}
