'use strict';

angular.module('seeker')
.filter('slice', function() {
  return function(arr, start, end) {
    if(arr){
        return arr.slice(start, end);
    }
    return arr;
  };
});