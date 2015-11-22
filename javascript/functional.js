(function() {

	// the apply function
	function mean(  ) {

		var arr = [].slice.call( arguments );
		// var sum = 0;
		// arr.forEach(function( currentEl, index ){
		// 	sum += currentEl;
		// });
		// return sum / arr.length;

		return arr.reduce(function(currentSum, el, index) {
			currentSum += el;
			return currentSum;
		}, 0) / arr.length;
	}

	// console.log( mean( [1,2,3,4,5,6,7,8,9,10] ));
	var average = mean.apply( null, [1,2,3,4,5,6,7,8,9,10] );
	var average2 = mean.call( null, 1,2,3,4 );
	console.log( average, average2 );

// var fruits = { 0: 'Banana', 1: 'Orange', 2: 'Lemon', 3: 'Apple', 4: 'Mango'};
// var citrus = [].slice.call( fruits );
// console.log( citrus )

})();