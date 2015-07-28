/* Lecture 48: Framework Aside: Function Factories
 *
 * Described as a factory, a function that makes other things for you
 */

function makeGreeting(language) {

    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if (language === 'fr') {
            console.log('Bonjour ' + firstname + ' ' + lastname);
        }

    }

}