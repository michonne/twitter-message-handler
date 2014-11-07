/**
 * Service to retrieve tweets from adaptive-test-api
 */

angular.module("tweeter.tweetService", [])
	.factory("getTweetsService", function($http) // depends on $http service
	{
		var tweetAPI = {};

		tweetAPI.getTweets = function()
		{
			return $http.get("http://adaptive-test-api.herokuapp.com/tweets.json");
		};

		return tweetAPI;
	});