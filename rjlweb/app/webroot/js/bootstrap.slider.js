$(window).load(function(){
	//var viewport = $(window).height();
	//$('#carousel').css('max-height',viewport)
	//$('.carousel-inner').css('max-height',viewport)
	var viewport = $(window).height();
	var vw = $(window).width();
	var b = 200;
 $('#carousel').css('max-height',viewport*0.9)
 $('.carousel-inner').css('max-height',viewport*0.9)
 $('.carousel-inner .c1').css('max-height',viewport*0.9)
  $('.carousel-inner .c1').css('width',vw)
  $('.carousel-inner img').css('width',vw)
});

window.onresize = resize;

function resize()
{
	var viewport = $(window).height();
	var vw = $(window).width();
	var ch $('.carousel-inner .c1').height();
 $('#carousel').css('max-height',viewport*0.9);
 $('.carousel-inner').css('max-height',viewport*0.9);
 $('.carousel-inner .c1').css('max-height',viewport*0.9)
  $('.carousel-inner .c1').css('width',vw)
  $('.carousel-inner img').css('width',vw)
}


	$('.carousel').carousel({
  		interval: false
	});

