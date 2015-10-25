(function() { 	// protect the lemmings!


	var Slider = (function() {
		function SimpleSlider( container ) {
			this.$container = $( container );
			// console.log( this );

		}

		SimpleSlider.prototype.getContainer = function() {
			// console.log( $container );
			// console.log( this );
		};

		SimpleSlider.prototype.PI = 3.14159;
		console.log( new SimpleSlider( 'asdfa') instanceof SimpleSlider )
		return function( container ) {
			return new SimpleSlider( container );
		}

		// var SimpleSlider = {
		// 	getContainer: function() {

		// 	},
		// 	init: function() {

		// 	},
		// 	PI: Math.PI
		// }

		// return function( container ) {
		// 	return Object.create( SimpleSlider );
		// }
	})();

var s1 = Slider( '.container' );
console.log( s1 instanceof SimpleSlider, $('.container') instanceof jQuery  )
	

	var slider = new SimpleSlider( '.container' );
	slider.getContainer();
	console.log( slider );

	var slider2 = new SimpleSlider( '.container' );


	// var Foo = {};
	// Foo.SimpleSlider = function() {
	// 	// console.log( this );
	// }

	// Foo.SimpleSlider();

	// REASONS WHY THIS KINDA SUCKS	
	// 1. hardcoded selectors
	// 2. no user control / options
	// 3. no way to pause the loop
	// 4. no way to set the timing of the transtion OR the pause after transition
	// 5. no callbacks or methods exposed

	// function getInitialComponents( $container ) {
	// 	return {
	// 		$slider: $container.find('> div'),
	// 		numChildren: $container.find('> div').children().length,
	// 		width: $container.outerWidth(),
	// 		currentSlide: 0
	// 	};
	// }

	// function slider( container ) {
	// 	var $container = $( container );
	// 	initVars = getInitialComponents( $container );

	// 	console.log( initVars );

	// 	// var children = $slider.children().length;
	// 	// var children = $slider.find('> div').length;

	// 	// TODO: make into a function

	// 	setInterval(function() {
	// 		++initVars.currentSlide;
	// 		console.log( initVars.currentSlide, initVars.numChildren )
	// 		initVars.$slider.css('left', -1*initVars.width*initVars.currentSlide + 'px');

	// 		if ( initVars.currentSlide >= initVars.numChildren - 1 ) {
	// 			initVars.currentSlide = -1;
	// 		}
	// 	}, 500)
			
	// }

	// slider( '.js-slide-1' );
	// slider( '.js-slide-2' );

})();








