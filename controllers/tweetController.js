/**
 * Main controller to load in our tweets
 */

angular.module("tweeter.tweetController", [])
	.controller("tweetController", function($scope, getTweetsService)
	{
		$scope.tweetData = [];

		$scope.getNewTweets = function()
		{
			getTweetsService.getTweets().success(function(tweets)
			{
				var isTweetUnique = false;
				var i;

				for (i = 0; i < tweets.length; i++)
				{
					isTweetUnique = $scope.validateTweetData(tweets[i]);

					if(isTweetUnique)
					{
						$scope.tweetData.push(tweets[i]);
					}
				}
			});

			getTweetsService.getTweets().error(function(response) {
				console.error("No Tweet Data!", response);
			});

			return $scope.tweetData;
		};

		$scope.validateTweetData = function(data)
		{
			console.log($scope.tweetData);
			return true;
		};

		$scope.getNewTweets();
	});