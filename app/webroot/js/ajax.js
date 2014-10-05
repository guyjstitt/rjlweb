$(document).ready(function() {
	$('.nav li').on('click','a', function() {
	    console.log($(this).data("pageName")); 
	    var pageName = $(this).data("pageName");

	    $.ajax('/rjlweb/app/webroot/ajax/'+ pageName +'.ctp', {
	        success: function(response) {
	            $('.mainContent').html(response).append();
	        }
	    }); 
	    var url = $(this).data("url");
	    var stateObj = { obj: url };
		history.pushState(stateObj, "",url);
	});

	$('.sliderImages div').on('click','a', function() {
	    console.log($(this).data("pageName")); 
	    var pageName = $(this).data("pageName");

	    $.ajax('/rjlweb/app/webroot/ajax/'+ pageName +'.ctp', {
	        success: function(response) {
	            $('.mainContent').html(response).append();
	        }
	    }); 
	});

	$('.imageItems').on('click','li', function() {
	    console.log($(this).data("pageName")); 
	    var pageName = $(this).data("pageName");

	    $.ajax('/rjlweb/app/webroot/ajax/'+ pageName +'.ctp', {
	        success: function(response) {
	            $('.mainContent').html(response).append();
	        }
	    }); 
	});


});
