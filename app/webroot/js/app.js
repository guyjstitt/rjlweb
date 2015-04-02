(function(){
	var app = angular.module('home', []);

	app.directive('imageGallery',function() {
		return {
			restrict: 'E',
			templateUrl: 'app/webroot/templates/image-gallery.html'
		};
	});

	app.controller('RailController', ['$http', function($http){
		var rail = this;

		rail.item = [];
		if(!(sessionStorage.getItem('railObject'))){
			$http({url: 'http://' + window.location.host + window.location.pathname + 'Rail/index/',cache: true,method: 'GET'}).success(function(data){
				rail.items = data;
				console.log(rail.items);
				var jsonData = JSON.stringify(data);
				sessionStorage.setItem('railObject', jsonData);
			});
		} else {
			rail.items = JSON.parse(sessionStorage.getItem('railObject'));
		}
	}]);
})();
