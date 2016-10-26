bsApp.controller('MainController', function($scope, $http) {
    $scope.tagline = 'Nothing beats a pocket protector from Main!';
    $http.get('api/songs')
    		.success(function(res){
    			$scope.songs = res;
    			console.log(res)
    		});
    
  });
