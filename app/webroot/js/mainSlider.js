$(document).ready(function() {
    li = $(".logo .logoImage");
    lt = $(".logo .logoText");
    ls = $(".logoShadow")
    logoImage = "logoImageScroll";
    logoText = "logoTextScroll";
    logoShadow = "logoShadow";

    $('.navbar').waypoint(function(direction){
        if(direction=="down") {
            $(this).addClass('navbar-fixed-top');
            $(li).addClass(logoImage);
            $(lt).addClass(logoText);
            $(ls).removeClass(logoShadow);
        } else {
            $(this).removeClass('navbar-fixed-top')
            $(li).removeClass(logoImage);
            $(lt).removeClass(logoText);
            $(ls).addClass(logoShadow);
        }
    });

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
    },{offset:function(){
            return 35;
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
    var isMobile = 414;
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


$(document).on({
    mouseenter: function () {
        $(this).find('.slideContent').children('.slideText').addClass('flyout');
        $(this).find('.shareItems').children('.shareThis').removeClass('shareHide');
        $(this).find('.slideContent').addClass('slideUp');
        $(this).find('.gradient').addClass('gradient-hover');
    },
    mouseleave: function () {
        $(this).find('.slideContent').children('.slideText').removeClass('flyout');
         $(this).find('.slideContent').removeClass('slideUp');
        $(this).find('.shareItems').children('.shareThis').addClass('shareHide');
        $(this).find('.slideContent2').children('.addthis_sharing_toolbox').addClass('hide');
        $(this).find('.slideContent3').children('.addthis_sharing_toolbox').addClass('hide');
        $(this).find('.gradient').removeClass('gradient-hover');
    }
},'.slide');

$(document).on({
    mouseenter: function () {
        
        $(this).find('.slideContent').children('.slideText').addClass('flyout');
        $(this).find('.mainSlideContent').addClass('mainSlideUp');
        $(this).find('.shareSlide').addClass('shareSlideUp');
        
    },
    mouseleave: function () {
        $(this).find('.slideContent').children('.slideText').removeClass('flyout');
        $(this).find('.mainSlideContent').removeClass('mainSlideUp');
        $(this).find('.shareSlide').removeClass('shareSlideUp');
       
    }
},'#slider1_container');


$(document).on ({
    mouseenter: function() {
        $(this).find('li').children('a').css('display', '');
    }

}, '.sliderShare');