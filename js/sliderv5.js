(function() { // protect the lemmings

	var Slider = (function() {

		function _tick( self ) {

			if ( this.currentSlide === this.numChildren - 1 ) {
				this.currentSlide = 0;
			}
			else {
				++this.currentSlide;				
			}

			this.$slider.css('left', -1*this.width*this.currentSlide + 'px');
		}

		var _tickInterval = {};

		function SimpleSlider( container, tickerInterval ) {
			this.$container = $( container );
			this.tickerInterval = ( typeof tickerInterval !== "undefined" ) ? tickerInterval : 500;
			this.getInitialVars();

			this.id = Date.now();

			this.start();
		}

		SimpleSlider.prototype.getInitialVars = function() {
			this.$slider = this.$container.find( '> div' );
			

			this.numChildren = this.$slider.children().length;
			this.width = this.$container.outerWidth();

			this.currentSlide = 0;
			this.isPlaying = true;	
			this.$slider.css('width', this.width*this.numChildren);
		}

		SimpleSlider.prototype.start = function() {
			_tickInterval[ this.id ] = setInterval(
				_tick.bind(this),
				this.tickerInterval
			);
			console.log( 'THIS IS: ' + _tickInterval );
		}

		SimpleSlider.prototype.pause = function() {
			this.isPlaying = false;
			clearInterval( _tickInterval[ this.id ] );
		}

		SimpleSlider.prototype.play = function() {
			this.isPlaying = true;
			this.start();
		}

		SimpleSlider.prototype.getPlayState = function() {
			return this.isPlaying;
		}


		// implement a .goNext() function
		// it will check to see if paused, if not, first it will pause
		// then, it will update currentSlide and move the slide over by ONE

		SimpleSlider.prototype.goNext = function() {
			this.pause();
			_tick.call( this );
		}

		SimpleSlider.prototype.goPrev = function() {
			
			this.pause();
			this.currentSlide -= 2;
			if ( this.currentSlide < 0 ) {
				this.currentSlide += this.numChildren;
			}

			console.log( this.currentSlide )
			_tick.call( this );
		}

		return function( container, interval ) {
			return new SimpleSlider( container, interval );
		}

	})();

	var s1 = Slider( '.js-slide-1' );
	// console.log( _tick );

	var s2 = Slider( '.js-slide-2', 1500 );

	$('.play').on('click', function() {
		// var state = s1.getPlayState();
		// console.log( state );
		// if ( state ) {
		// 	s1.pause();
		// }
		// else {
		// 	s1.play();
		// }
		// s1.pause();

		s2.pause();
	});

	$('.play1').on('click', function() {
		// var state = s1.getPlayState();
		// console.log( state );
		// if ( state ) {
		// 	s1.pause();
		// }
		// else {
		// 	s1.play();
		// }
		// s1.pause();

		s1.pause();
	});
})();