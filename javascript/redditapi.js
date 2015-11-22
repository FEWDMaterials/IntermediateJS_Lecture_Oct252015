var RedditAPI = (function() {

	var _API_BASE_ = 'https://api.reddit.com';
	function RedditAPI() {}

	RedditAPI.prototype.search = function( query ) {
		var url = _API_BASE_ + '/search';
		var data = {
			q: query
		};

		return $.get( url, data );
	}

	function factory() {
		return new RedditAPI();
	}

	factory.fn = RedditAPI.prototype;

	return factory;

})();