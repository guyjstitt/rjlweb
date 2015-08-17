$(document).ready(function() {

 $('#num').on('click', function() {
	var showNum = $('<span>(502)-585-9920</span>');
	$('#showNum').last().append(showNum);
	$('#num').remove();
	});
 
 $('#emailB').on('click', function() {
	var showNum = $('<a href="mailto:libbymills@rjlou.org">libbymills@rjlou.org</a>');
	$('#showEmail').last().append(showNum);
	$('#emailB').remove();
	});

});