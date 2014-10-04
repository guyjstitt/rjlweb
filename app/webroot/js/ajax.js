$(document).ready(function() {
	$('.nav li').on('click','a', function() {
	    console.log($(this).data("pageName")); 
	    var pageName = $(this).data("pageName");

	    $.ajax('/rjlweb/app/webroot/ajax/'+ pageName +'.ctp', {
	        success: function(response) {
	            $('.mainContent').html(response).append();
	        }
	    }); 
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

	$( ".nav li " ).on( "click", "a", function( event ) {
    console.log( $( this ).text() );
	});
});
