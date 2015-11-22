(function() { // protect the lemmings
	function getCSSValAsNum( el, cssProp ) {
		var styles = window.getComputedStyle( el );
		var val = styles[ cssProp ];
		var numVal = parseInt( val, 10 );
		if ( isNaN( numVal ) ) {
			return 0;
		}

		return numVal;
	}

	function getOuterWidth( el ) {
		var actualWidth = el.offsetWidth;
		var paddingLeft = getCSSValAsNum( el, "paddingLeft" );
		var paddingRight = getCSSValAsNum( el, "paddingRight" );
		var marginLeft = getCSSValAsNum( el, "marginLeft" );
		var marginRight = getCSSValAsNum( el, "marginRight" );

		console.log( el.style.marginLeft )
		console.log( el, actualWidth, paddingLeft, paddingRight, marginLeft, marginRight );
		return actualWidth + paddingLeft + paddingRight + marginLeft + marginRight;
	}

	var _SLIDER_WRAPPER_ = '.slider__wrapper';
	var _SLIDER_ITEM_ = '.slider__item';

	function init( sliderClass ) {
		// this function calls the other ones
		addWrapper( sliderClass );

		var wrapperClass = sliderClass + ' ' + _SLIDER_WRAPPER_;
		var itemClass = sliderClass + ' ' + _SLIDER_ITEM_;

		var wrapper = document.querySelector( wrapperClass );
		var items = document.querySelectorAll( itemClass );

		var intervalID = startShow( wrapper, items );

		return {
			pause: function() {
				clearInterval( intervalID );
			},
			start: function() {
				intervalID = startShow( wrapper, items );
			}
		};

	}

	function addWrapper( sliderClass ) {
		var slider = document.querySelector( sliderClass );
		slider.innerHTML = "<div class='slider__wrapper'>"
							+ slider.innerHTML
							+ "</div>";
	}

	function startShow( wrapper, items ) {
		var slideWidth = getOuterWidth( items[ 0 ] );

		var numItems = items.length;
		var current = 0;

		return setInterval(function() {
			wrapper.style.left = -1*current*slideWidth + "px";
			current++;

			if ( current === numItems ) {
				current = 0;
			}
		}, 500);
	}

	var slider1 = init( '.slider-1' );
	init( '.slider-2' );
	init( '.slider-3' );

	document.querySelector( '.slider-1-pause' )
		.addEventListener('click', function() {
			slider1.pause();
		}); 
	document.querySelector( '.slider-1-start' )
		.addEventListener('click', function() {
			slider1.start();
		}); 

})();





