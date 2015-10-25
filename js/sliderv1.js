(function() { 	// protect the lemmings!

	// REASONS WHY THIS KINDA SUCKS	
	// 1. hardcoded selectors
	// 2. no user control / options
	// 3. no way to pause the loop
	// 4. no way to set the timing of the transtion OR the pause after transition
	// 5. no callbacks or methods exposed


	function slider( sliderParent, container ) {
		var $slider = $(sliderParent );
		var numChildren = $slider.children().length;
		var width = $( container ).outerWidth();
		var currentSlide = 0;

		console.log( $slider, numChildren, width, currentSlide );

		// var children = $slider.children().length;
		// var children = $slider.find('> div').length;

		// TODO: make into a function

		setInterval(function() {
			++currentSlide;
			$slider.css('left', -1*width*currentSlide + 'px');

			if ( currentSlide === numChildren - 1 ) {
				currentSlide = -1;
			}
		}, 500)
			
	}

	slider( '.slider', '.container' );

})();








