(function(){
	var app = angular.module('home', []);

	app.controller('RailController', ['$http', function($http){
		var rail = this;

		rail.item = [];
		if(!(sessionStorage.getItem('railObject'))){
			$http({url:'/Rail/index/',cache: true,method: 'GET'}).success(function(data){
				rail.items = data;
				var jsonData = JSON.stringify(data);
				sessionStorage.setItem('railObject', jsonData);
			});
		} else {
			rail.items = JSON.parse(sessionStorage.getItem('railObject'));
		}
	}]);
})();
