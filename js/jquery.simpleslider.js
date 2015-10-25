(function( $, Slider ){


	if ( typeof $ === "undefined" ) {
		throw new Error('jQuery not defined');
	}
	else if ( typeof Slider === "undefined" ) {
		throw new Error( 'Slider not defined' );
	}

	$.fn.simpleslider = function() {

		var args = [].slice.call( arguments );

		this.each(function( idx, el ){
			var $el = $( el );

			if ( args.length === 0 ) {

				$el.data('simpleslider', Slider( $el ) );
			}
			else if ( typeof args[ 0 ] === 'string' ) {
				var SimpleSliderRef = $el.data('simpleslider');
				
				if (typeof SimpleSliderRef === "undefined" ) {
					throw new Error('Reference is not defined! Did you call .simpleslider() first?');
				}

				var functionToCall = SimpleSliderRef[ args[ 0 ] ];
				if ( typeof functionToCall === "undefined" ) {
					throw new Error('This function ' + args[ 0 ] + ' is not a method of SimpleSlider. Try extending it!');
				}

				var functionArgs = args.slice( 1 );
				SimpleSliderRef[ args[ 0 ] ].apply( SimpleSliderRef, functionArgs );

			}
		});
	}

})( jQuery, Slider );