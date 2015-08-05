/* Understanding the Object Prototype
 *
 * If an object has prop1                       obj.prop1
 * If an object has a prototype with prop2      obj.prop2
 * If an object with a prototype with a prototype
 *  with prop3                                  obj.prop3
 *
 * It looks like the object can access prototypes properties
 * Each object can have its own prototype
 *
 * If the object can't find a prop2 or prop3, it will search
 * through the prototypes. This is called a "prototype chain"
 *
 *
 *
 *
 * This is different from the scope chain
 *
 * The scope chain is about looking for where we have access
 * to a variable
 *
 * This has to do with access to a property or a method amongst
 * a sequence of objects
 *
 *
 *
 *
 * Object 2 and Object 1 can share the same proto
 *
 * obj2.prop2
 * obj1.prop2
 */


// Made an object literal array with a getFullName function
var person = {
    firstName: 'default',
    lastName: 'default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

// Made an object with two variables set inside, similar to 'person'
// Though, it doesn't have a getFullName function like above
var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// Don't do this ever, demo purposes only!
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName);
/* Notice here that 'john' object doesn't have getFullName
 *
 * It was obtained using proto. It looked inside the person object
 * and grabbed the getFullName function. It is as simple as that
 */

var jane = {
    firstName: 'Jane'
}

jane.__proto__ = john;  // Looks like you can set the proto to a proto
                        // object that is proto'd to the main object
console.log(jane.getFullName());
                        /* getFullName has a 'this' variable
                         * That will be targetting jane so its jane.firstName
                         * If nothing else is set, it will be person.lastName
                         *
                         * In this case, Jane Default for console.log
                         */