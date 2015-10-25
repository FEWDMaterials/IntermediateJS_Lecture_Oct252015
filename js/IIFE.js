function getPersonDefinition() {
	return {
		name: 'Taq',
		age: 1000000,
		speak: function() {
			return 'Hello!'
		}
	}
}

var h1 = getPersonDefinition();
var h2 = getPersonDefinition();

h2.name = 'foo';

console.log( h1.name, h2.speak() );

function mathStuff() {
	return {
		sum: function(a,b) {
			return a + b;
		},
		sequence: function( start, end ) {
			var sum = 0;
			for ( var i = start; i < end; ++i ) {
				sum += i;
			}
			return sum;
		}

	}
}

var MathStuff = mathStuff();

console.log( MathStuff.sum(1,2) );

var MathStuff2 = (function(){
	var PI = 22/7;


	return {
		sum: function(a,b) {
			console.log( PI );
		}
	};
})();



console.log( MathStuff2.sum() )



