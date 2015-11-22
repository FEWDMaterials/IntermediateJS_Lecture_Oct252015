/* CURRENTLY IN: javascript/main.js */

console.log( a );
var a = 5;


/*
	var a;

	console.log( a );
	a = 5;
*/


var foo = 1;
function getPI() {
	foo = 2;
	return 3.14159;
}
getPI();
console.log( foo );


var getE = function() {
	return 2.718;
}
getE();

/*
	var getE;

	getE();

	getE = function() {
		...	
	}
*/

function InitLoginForm() {
	var email = null;
}
InitLoginForm();

function InitSignupForm() {
	var email = null;
}
InitSignupForm();

(function() {	// protect the lemmings

	var a = 1;

	function foo() {

		function bar() {

			console.log( a ); // should be 1
		} // bar

	} // foo
})(); // IIFE: immediately invoked function expression









