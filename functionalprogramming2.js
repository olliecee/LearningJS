/* Functional Programming 2
 *
 * A New Way of Thinking
 *
 * Underscore.JS, go to the website and have an open source education
 * Good Javascript is well written. But you need to know how to read good JS by
 * learning the advanced concepts of JS so you can be a good programmer!
 *
 * Read the annotated notes, download the development files (they usually have
 * a lot of documentation)
 *
 * lodash
 */

arr1 = [1, 2, 3, 4, 5, 6];

var arrayNumber = _.map(arr1, function(item) {return item * 3});
console.log(arrayNumber);

var arrayNumber = _.filter(arr1, function(thing) {return thing % 2 === 0});
console.log(arrayNumber);


function multiplyMe(arr) {

    var newArr = [];
    for (var i=0; i < arr.length; i++) {

        newArr.push (
            function(item) {
                return item * 2
            }(arr[i])
        )

    }

}

var okwhy = multiplyMe(arr1);
console.log(okwhy);