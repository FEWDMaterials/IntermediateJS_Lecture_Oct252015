(function() { // protect the lemmings

	var Slider = (function() {
		function SimpleSlider( container, tickInterval ) {
			this.$container = $( container );
			this.tickerInterval = ( typeof tickInterval !== "undefined" ) ? tickInterval : 500;
			this.getInitialVars();

			this.start();
		}

		SimpleSlider.prototype.getInitialVars = function() {
			this.$slider = this.$container.find( '> div' );
			this.numChildren = this.$slider.children().length;
			this.width = this.$container.outerWidth();
			this.currentSlide = 0;
			this.isPlaying = true;
		}

		SimpleSlider.prototype.start = function() {
			this.tickInterval = setInterval(
				this.tick.bind(this),
				this.tickerInterval
			);
		}

		SimpleSlider.prototype.pause = function() {
			this.isPlaying = false;
			clearInterval( this.tickInterval );
		}

		SimpleSlider.prototype.play = function() {
			this.isPlaying = true;
			this.start();
		}

		SimpleSlider.prototype.getPlayState = function() {
			return this.isPlaying;
		}

		SimpleSlider.prototype.tick = function() {
			if ( this.isPlaying === false ) return;

			++this.currentSlide;
			this.$slider.css('left', -1*this.width*this.currentSlide + 'px');

			if ( this.currentSlide === this.numChildren - 1 ) {
				this.currentSlide = -1;
			}
		}

		// implement a .goNext() function
		// it will check to see if paused, if not, first it will pause
		// then, it will update currentSlide and move the slide over by ONE

		return function( container, interval ) {
			return new SimpleSlider( container, interval );
		}

	})();

	var s1 = Slider( '.js-slide-1' );
	var s2 = Slider( '.js-slide-2', 1500 );

	$('.play').on('click', function() {
		var state = s1.getPlayState();
		console.log( state );
		if ( state ) {
			s1.pause();
		}
		else {
			s1.play();
		}
		// s1.pause();
	});

})();