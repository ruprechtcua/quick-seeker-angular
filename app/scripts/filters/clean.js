'use strict';

angular.module('seeker')
.filter('clean', function(){
	return function(text) {
		return text.replace(/<b>/g, '').replace(/<\/b>/g,'');
	};
});