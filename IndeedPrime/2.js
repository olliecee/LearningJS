function getMinimumUniqueSum(arr) {
	// Vars
	const theArr = [];
	const ret = [];
	let a = arr[0];
	let b = arr[1];
	let c = arr[1]-arr[0];

	// Generates the numbers between the two values and adds it to an array
	for (let i = a; i < b; i++) {
		theArr.push(i);
	}
	theArr.push(b);
	console.log(theArr);

	// Checks to see which numbers can be squared then stores it into a return array
    for (let i = 0; i < theArr.length; i++) {
        let number = theArr[i];
        numberSquared = Math.sqrt(number);
        
        if (numberSquared % 1 === 0) {
            ret.push(theArr[i]);
        }
    }

	// Logs the squared numbers into the console
	for (let i = 0; i < ret.length; i++) {
		console.log('The numbers that have been squared are: ', ret[i]);
	}

	// Displays the total number
	console.log('Square numbers: ', ret.length);
	return ret.length;
}