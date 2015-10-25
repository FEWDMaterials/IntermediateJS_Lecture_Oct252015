(function() { 	// protect the lemmings!

	// REASONS WHY THIS KINDA SUCKS	
	// 1. hardcoded selectors
	// 2. no user control / options
	// 3. no way to pause the loop
	// 4. no way to set the timing of the transtion OR the pause after transition
	// 5. no callbacks or methods exposed

	function getInitialComponents( $container ) {
		return {
			$slider: $container.find('> div'),
			numChildren: $container.find('> div').children().length,
			width: $container.outerWidth(),
			currentSlide: 0
		};
	}

	function slider( container ) {
		var $container = $( container );
		initVars = getInitialComponents( $container );

		console.log( initVars );

		// var children = $slider.children().length;
		// var children = $slider.find('> div').length;

		// TODO: make into a function

		setInterval(function() {
			++initVars.currentSlide;
			console.log( initVars.currentSlide, initVars.numChildren )
			initVars.$slider.css('left', -1*initVars.width*initVars.currentSlide + 'px');

			if ( initVars.currentSlide >= initVars.numChildren - 1 ) {
				initVars.currentSlide = -1;
			}
		}, 500)
			
	}

	slider( '.js-slide-1' );
	slider( '.js-slide-2' );

})();








