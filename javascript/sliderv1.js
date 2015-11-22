(function() { // protect the lemmings!

/*

	<div class="slider">
		<div class="slider__item"></div>
		<div class="slider__item"></div>
		<div class="slider__item"></div>
	</div><!-- slider -->

	we want...

	<div class="slider">
		<div class="slider__wrapper">
			<div class="slider__item"></div>
			<div class="slider__item"></div>
			<div class="slider__item"></div>
		</div>
	</div><!-- slider -->

*/

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


	var slider = document.querySelector( '.slider' );
	console.log( slider, slider.innerHTML );

	slider.innerHTML = "<div class='slider__wrapper'>"
						+ slider.innerHTML
						+ "</div>";

	var wrapper = document.querySelector('.slider__wrapper');
	var items = document.querySelectorAll('.slider__item');
	var slideWidth = getOuterWidth( items[ 0 ] );

	var numItems = items.length;
	var current = 0;

	setInterval(function() {
		wrapper.style.left = -1*current*slideWidth + "px";
		current++;

		if ( current === numItems ) {
			current = 0;
		}
		console.log( 'current is now ' + current );
	}, 500);

	






})();