'use strict';

angular.module('seeker')
.directive('seek', ['sliceFilter','cleanFilter','$http', function(slice, clean, $http) {

  return {
  	restrict: 'E',
  	replace: true,
    scope: {
      count: '@',
      keywords: '@',
      classification: '@',
      location: '@'
    },
    templateUrl:'views/posting.html',
    controller: function($scope, $window) {
    	var url = 'https://api.seek.com.au/v2/jobs/search?&callback=JSON_CALLBACK',
			responsePromise = $http.jsonp(url,
	            {  
	            	//update desired api parameter values
	             	params : {
	                   page : '1',
	                   keywords: $scope.keywords ? $scope.keywords : '',
	                   classification: $scope.classification? $scope.classification : '',
	                   subclassification: '',
	                   graduateSearch: false,
	                   location: $scope.location ? $scope.location : '',
	                   isAreaUnspecified: false,
	                   salaryRange: '0-999999',
	                   salaryType: 'annual',
	                   dateRange: '999',
	                   sortMode: 'ListedDate',

	                }
	            }
            );

		responsePromise.success(function(data) {
		    $scope.postings = data.data;
		});

		$scope.open = function(id){
			$window.open('http://www.seek.com.au/job/'+id);
		};
    }
  };
}]);