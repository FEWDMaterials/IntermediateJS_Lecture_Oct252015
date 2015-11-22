(function() { // protect the lemmings!

	var s1 = Slider('.slider-1');
	var s2 = Slider('.slider-2');
	var s3 = Slider('.slider-3');

	Slider.fn.foo = function() {
		console.log("hello!");
	}

	s1.foo();

	document.querySelector( '.slider-1-pause' )
		.addEventListener('click', function() {
			// s1.pause();
			s1.goToSlide( 1 );
		}); 
	document.querySelector( '.slider-1-start' )
		.addEventListener('click', function() {
			s1.start();
		}); 

})();