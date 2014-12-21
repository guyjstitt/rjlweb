
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
			url:"/GetInvolved/volunteer",
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
			$('#contentContainer .col-md-8').load("/GetInvolved/volunteerSuccess");
		}
	}
});

