/**
 * Main controller to load in our tweets
 */

angular.module("tweeter", [])
	.controller("tweetController", function($scope, $http)
	{
		$scope.tweetDataPromise = $http.get("http://adaptive-test-api.herokuapp.com/tweets.json");

		console.log($scope.tweetData);

		$scope.tweetDataPromise.success(function(data, status, headers, config) {
			//$scope.myData.fromServer = data.title;
			$scope.tweetData = data;
		});
		$scope.tweetDataPromise.error(function(data, status, headers, config) {
			console.error("No Tweet Data!");
		});
	});