/**
 * Main controller to load in our tweets
 */

angular.module("tweeter.tweetController", [])
	.controller("tweetController", function($scope, getTweetsService)
	{
		$scope.tweetData = [];

		$scope.getTweets = function()
		{
			getTweetsService.getTweets().success(function(tweets)
			{
				$scope.tweetData = tweets;
			});

			getTweetsService.getTweets().error(function(response) {
				console.error("No Tweet Data!", response);
			});
		};
	});