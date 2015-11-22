var Slider = (function() {
	var _SLIDER_WRAPPER_ = '.slider__wrapper';
	var _SLIDER_ITEM_ = '.slider__item';

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

		return actualWidth + paddingLeft + paddingRight + marginLeft + marginRight;
	}

	function _startShow() {
		return setInterval(function() {
			this.wrapper.style.left = -1*this.current*this.slideWidth + "px";
			this.current++;

			if ( this.current === this.numItems ) {
				this.current = 0;
			}
		}.bind(this), 500);
	}

	function _addWrapper() {
		this.slider.innerHTML = "<div class='slider__wrapper'>"
								+ this.slider.innerHTML
								+ "</div>";	
	}

	function Slider( sliderClass ) {
		this.slider = document.querySelector( sliderClass );
		_addWrapper.call( this );

		var wrapperClass = sliderClass + ' ' + _SLIDER_WRAPPER_;
		var itemClass = sliderClass + ' ' + _SLIDER_ITEM_;

		this.wrapper = document.querySelector( wrapperClass );
		this.items = document.querySelectorAll( itemClass );

		this.slideWidth = getOuterWidth( this.items[ 0 ] );
		this.numItems = this.items.length;
		this.current = 0;

		
		this.intervalID = _startShow.call( this );
	} // the constructor function

	Slider.prototype.pause = function pause() {
		this.isPlaying = false;
		clearInterval( this.intervalID );
	}

	Slider.prototype.start = function start() {
		this.isPlaying = true;
		this.intervalID = _startShow.call( this );
	}

	Slider.prototype.getPlayState = function getPlayState() {
		return this.isPlaying;
	}

	// implement a method called goToSlide
	// takes one arg: a slide numer
	// if this is an invalide number, do nothing
	// if the slide is playing, pause it
	// then, move slide to the slide number

	Slider.prototype.goToSlide = function goToSlide( slideNum ) {
		var isUndefined = (typeof slideNum === "undefined");
		var isSlideNaN = isNaN( slideNum );
		var isLessThan1 = slideNum < 1;
		var isGreaterThanLength = slideNum > this.numItems;

		if (  isUndefined || isSlideNaN || isLessThan1 || isGreaterThanLength ) {
			return;
		}

		this.pause();
		this.current = slideNum - 1;

		this.start();
	}

	// if ( !window.Slider ) {
	// 	window.Slider = Slider;
	// }
	// else {
	// 	throw new Error('Slider var is already defined');
	// }

	function factory( sliderClass ) {
		return new Slider( sliderClass );
	}

	factory.fn = Slider.prototype;

	return factory;
})();