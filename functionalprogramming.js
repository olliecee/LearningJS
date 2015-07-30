/* Functional Programming
 *
 * A New Way of Thinking
 */

function multiplyMe(arr, fn) {

    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push (
            fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);



/* The first part of the for loop is the counter-variable
 * The second part is for the condition, which is tested to see if it should continue
 * The third part is the action at the end of every loop - usually changes the counter
 */
var arr2 = [];
for (var i=0; i < arr1.length; i++) {

    arr2.push(arr1[i] * 2); //the empty arr2 array will now get a value from .push

}
console.log(arr2);




var arr3 = multiplyMe(arr1, function(item) {return item * 2;});
    // arr1                                 = multiplyMe's 1st parameter
    // function(item { return item * 2 })   = multiplyMe's 2nd parameter
console.log(arr3);



var checkPastLimit = function(limiter, item) {
    // limiter and item parameters are passed into the function
    return item > limiter;
    // returning a boolean if item > limiter
}
var arr4 = multiplyMe(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);



var checkPastLimitSimplified = function(limiter) {

    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);

};
var arr5 = multiplyMe(arr1, checkPastLimitSimplified(2));
console.log(arr5);
console.log(multiplyMe(arr1, checkPastLimitSimplified(3)));