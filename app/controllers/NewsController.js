//news is the name of the app of the module in app.js
news.controller('NewsController',['$scope','$http', function($scope,$http) {

var onUserComplete = function (response){
						$scope.data = response.data;	
					}
					
					var onError = function (reason) {
						$scope.error = "Oops, we have a problem with the Server";	
					}
					
					$http.get("http://api.feedzilla.com/v1/categories/26/articles.json")
						.then(onUserComplete,onError);	
						
		
}]);







