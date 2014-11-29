
$(document).ready(function() {

	
    $( "#inputDateOfBirth" ).datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		constrainInput: false,
		yearRange: "-90:+0"
	});
	
	$("#volForm").validate({
		submitHandler: function() {
			event.preventDefault();
			var formData = $('#volForm').serialize();
			submitform(formData);
		},
		rules: {
			inputFirstName: { required: true, letterswithbasicpunc: true },
			inputLastName: { required: true, letterswithbasicpunc: true },
			inputDateOfBirth: {
			  required: true,
			  date: true
			},
			inputPriPhone: { required:true, phoneUS: true },
			inputSkills: {  required: true }

		}
	});

	function submitform(formData) {
		console.log(formData);

		$.ajax({
			type: 'POST',
			url:"/rjlweb/GetInvolved/volunteer",
			data: formData,
			dataType: 'json'
		}).done(function(data) {
			console.log(data);
			validateData(data);
		});

		function validateData(data) {
			if (data.success == true ) {
				getSuccessForm();
			} else {
				alert('An error occured when processing your information.')
			}
		}

		function getSuccessForm() {
			$('.contentContainer .col-md-8').load("/rjlweb/GetInvolved/volunteerSuccess");
		}
	}
	$('a.control_nextSlide').on('click', function() {
		var self = $('.slider section div.show');
		var firstSlide = $('.slider section div:first-child');
    	var nextSlide = $('.slider section div.show').next();
    	if(nextSlide.length == 0) {
    		self.removeClass('show');
    		firstSlide.fadeIn('slow');
    		firstSlide.addClass('show');
    	} else {
	        self.removeClass('show');
	        nextSlide.fadeIn('slow');
	        nextSlide.addClass('show');
	    }
    });

    $('a.control_prevSlide').on('click', function() {

    	var self = $('.slider section div.show');
    	var lastSlide = $('.slider section div:last-child');
    	var prevSlide = $('.slider section div.show').prev();
    	if(prevSlide.length == 0) {
    		self.removeClass('show');
    		lastSlide.fadeIn('slow');
    		lastSlide.addClass('show');
    	} else {
	        self.removeClass('show');
	        prevSlide.fadeIn('slow');
	        prevSlide.addClass('show');
	    }
    });
});


$(window).load(function(){
	var centerButton = $('a.control_nextSlide').outerHeight() / 2;
    var sliderHeight = $(window).height() * .80;
    var buttonHeight = sliderHeight / 2 + 85 - centerButton;
	$('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
	$('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
	$('a.control_prevSlide').css("left", 0);
	$('a.control_nextSlide').css("right", 0);
});

$(window).resize(function() {
    var centerButton = $('a.control_nextSlide').outerHeight() / 2;
    var sliderHeight = $(window).height() * .80;
    var buttonHeight = sliderHeight / 2 + 85 - centerButton;
    $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
    $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
});

