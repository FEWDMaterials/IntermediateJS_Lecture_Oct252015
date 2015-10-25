(function(){
	// var s1 = Slider('.js-slide-1');

	$('.container').simpleslider();

	$('.play').on('click', function() {
		$('.container').simpleslider( 'goToSlide', 1 );		
	})


	// $('.container').simpleslider( 1 );
})();