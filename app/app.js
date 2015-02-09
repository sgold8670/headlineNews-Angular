var news = angular.module('news', ['ngRoute']);

news.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/news.html'
		})
		.when('/sports',{
			templateUrl: 'partials/sports.html'
		})
		.when('/entertainment',{
			templateUrl: 'partials/entertainment.html'
		})
		.otherwise({
			redirectTo: '/'	
		});	
});







	




