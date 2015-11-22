(function() { // protect the lemmings!

	var submit = $('.js-search-submit');
	var input = $('.js-search-value');
	var container = $('.js-container');
	var redditAPI = RedditAPI();

	var promises = [
		$.get('https://api.reddit.com/search?q=javascript'),
		$.get('https://api.reddit.com/search?q=css'),
		$.get('https://api.reddit.com/search?q=html')
	];

	$.when.apply( $, promises ).then(function(){
		console.log(arguments);
	});

	promises.reduce(function( lastPromise, currentPromise ){
		return lastPromise.then(function(data) {
			console.log( data );
			return currentPromise;
		});
	}, $.Deferred().resolve() );


	function isNumberEven( n ) {
		var d = $.Deferred();

		if ( n % 2 === 0 ) {
			d.resolve( true );
		}

		d.reject( false );

		return d.promise();
	}

	isNumberEven( 5 ).then(function(data){
		console.log( data );
	})
	.fail(function(err){
		console.log( err );
	});

	function normalIsEven( n ) {
		if ( n % 2 === 0 ) {
			return true;
		}

		return false;
	}

	function PromiseFactory(  ) {
		// create empty promise
		var d = $.Deferred();

		// conver the arguments of this function to an array 
		// so we can manipulate
		var args = [].slice.call( arguments );

		// grab the first item of args, that should be callback
		var callback = args.shift();

		// the second should be the scope
		var scope = args.shift();

		// now call the callback the remaining args + scope
		var val = callback.apply( scope, args );

		// if results have a truthy value, then resolve promise
		if ( val ) {
			d.resolve( val );
		}
		// else, reject it
		else {
			d.reject( val );
		}

		// return promise object so we can then-it
		return d.promise();
	}

	// using function by itself
	console.log( normalIsEven( 4 ) );

	// using function as a promise
	PromiseFactory( normalIsEven, null, 5 ).then(function(data){
		console.log( 'success ', data );
	})
	.fail(function(err){
		console.log('err ', err );
	})

	submit.on('click', function( e ) {
		e.preventDefault();

		var searchQuery = input.val();
		submit.attr('disable');

		redditAPI.search( searchQuery )
			.then(function(data){
				if ( data.data && data.data.children ) {
					container.empty();
					data.data.children.forEach(function(item, idx){
						item = item.data;

						var $li = $('<li />');
						$li.addClass('list-group-item');

						var $a = $('<a />');
						$a.attr('href', 'http://www.reddit.com'+item.permalink);
						$a.attr('target', '_blank');
						$a.text( item.title);

						$li.append( $a );

						container.append( $li );
					});
				}
			})
			.fail(function( err ) {
				alert('Failed! ' + err );
			})
			.done(function() {
				input.val('');
				submit.removeAttr('disable');
			});
	});

})();