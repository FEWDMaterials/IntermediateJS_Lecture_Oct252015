var prependVal = "Hello ";
function greet( name  ) {
	var greetVal = prependVal + name;

	return greetVal;
}

function greetInFrench( name, greeting ) {
	console.log( 'Look ma! I\'m greeting in french: ' + greeting );
	var prependVal = "Bonjour ";
	var greetVal = prependVal + name;	
}

var greeting = greet( 'Daniel' );
console.log( greeting );

greetInFrench( 'Daniel' );
// greet( 'Taq' );

// console.log( prependVal );

