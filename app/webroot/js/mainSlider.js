function detectMobile() {
    if($(window).innerWidth() <= 768) {
        return true;
    } else {
        return false;
    }
}

function isMobile() {
     var   mn = $(".navHeader");
        mns = "navbar-fixed-top";
        mn2 = "navHeader-absolute";
        li = $(".logoImage");
        lt = $(".logoText");
        ls = $(".logoShadow")
        logoImage = "logoImageScroll";
        logoText = "logoTextScroll";
        logoShadow = "logoShadow";
        absolute = "absolute";
        hdr = $('.waypoint').position();
        
    if(detectMobile() == false) {
        $(window).scroll(function() {
            if( $(this).scrollTop() > hdr.top ) {
                mn.addClass(mns);
                li.addClass(logoImage);
                lt.addClass(logoText);
                ls.removeClass(logoShadow);
                lt.removeClass(absolute);
            } else {
                lt.addClass(absolute);
                ls.addClass(logoShadow);
                mn.removeClass(mns);
                li.removeClass(logoImage);
                lt.removeClass(logoText);
          }
        });
    } else  {
        $(window).scroll(function() {

        });
    }
}

$(window).resize(isMobile);

$(document).ready(isMobile);

$('.slideContainer ul.slideList').css('margin-left', "-" + $(window).innerWidth() + "px");

function moveSlide() {
    $( "a.control_nextSlide").unbind( "click" );
    $( "a.control_prevSlide").unbind( "click" );

    var windowWidth = $(window).innerWidth();
    $('a.control_nextSlide').on('click', function(event) {
        $('.slideContainer ul.slideList').animate({
            left: "-=" + windowWidth
        }, 1000, function(){
            $('.slideContainer ul.slideList li.slide:first-child').appendTo('.slideContainer ul.slideList');
            $('.slideContainer ul.slideList').css('left', '');
        });
    });

    $('a.control_prevSlide').on('click', function(event) {
    $('.slideContainer ul.slideList').animate({
            left: "+=" + windowWidth
        }, 1000, function(){
            $('.slideContainer ul.slideList li.slide:last-child').prependTo('.slideContainer ul.slideList');
            $('.slideContainer ul.slideList').css('left', '');
        });
    });
}

$(document).ready(moveSlide);
$(window).resize(moveSlide);

var swipeStart;
var swipeEnd;

function startup() {
  var el = document.querySelector('.slider');
  //el.addEventListener("touchstart", handleStart, false);
  //el.addEventListener("touchend", handleEnd, false);
  console.log("initialized.");
}

function handleSwipe() {
    var windowWidth = $(window).innerWidth();
    console.log('swipe start is ' + swipeStart);
    console.log('swipe end is ' + swipeEnd);
    if((swipeEnd - swipeStart) > 50) {
        $('.slideContainer ul.slideList').animate({
            left: "+=" + windowWidth
        }, 1000, function(){
            $('.slideContainer ul.slideList li.slide:last-child').prependTo('.slideContainer ul.slideList');
            $('.slideContainer ul.slideList').css('left', '');
        });
    } else if((swipeStart - swipeEnd) > 50){
         $('.slideContainer ul.slideList').animate({
            left: "-=" + windowWidth
        }, 1000, function(){
            $('.slideContainer ul.slideList li.slide:first-child').appendTo('.slideContainer ul.slideList');
            $('.slideContainer ul.slideList').css('left', '');
        });
    }
};


function handleStart(event) {
    swipeStart = event.changedTouches[0].clientX;
}

function handleEnd(event) {
    swipeEnd = event.changedTouches[0].clientX;
    handleSwipe();
}

$(document).ready(function(){
    var self = $('.slider .slideContainer ul.slideList');
    var windowWidth = $(window).innerWidth();

    $.get("app/webroot/ajax/allSlides.ctp", function() {
            }).done(function(response) {
                self.append(response);
                if(detectMobile() == true) {
                    var sliderHeight = $(window).height() * .60;
                    var minSliderHeight = 300;
                    $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
                    if(sliderHeight> minSliderHeight) {
                        var centerButton = $('a.control_nextSlide').outerHeight() / 2;
                        var buttonHeight = sliderHeight / 2 + 50 - centerButton;
                        $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
                        $('a.control_prevSlide').css("left", 0);
                        $('a.control_nextSlide').css("right", 0);
                    } else {
                        var centerButton = $('a.control_nextSlide').outerHeight() / 2;
                        var buttonHeight = minSliderHeight / 2 + 50 - centerButton;
                        $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
                        $('a.control_prevSlide').css("left", 0);
                        $('a.control_nextSlide').css("right", 0);
                    }
                } else {
                    var sliderHeight = $(window).height() * .80;
                    var centerButton = $('a.control_nextSlide').outerHeight() / 2;
                    var buttonHeight = sliderHeight / 2 + 85 - centerButton;
                    $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
                    $('a.control_prevSlide').css("left", 0);
                    $('a.control_nextSlide').css("right", 0);
                    $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
                }
                $('.slideContainer ul.slideList').css('width', windowWidth * 3 + "px");
                $('.slideContainer ul.slideList li.slide').css('width', windowWidth + "px");
            });

    //initialize touch events
    startup();
});

$(window).resize(function(){
    var windowWidth = $(window).innerWidth();
     $('.slideContainer ul.slideList').css('width', windowWidth * 3 + "px");
    $('.slideContainer ul.slideList').css('margin-left', "-" + $(window).innerWidth() + "px");
    $('.slideContainer ul.slideList li.slide').css('width', windowWidth);
});

$(window).resize(function() {
    var sliderHeight = $(window).height() * .60;
    var minSliderHeight = 300;
     if(detectMobile() == true) {
        if(sliderHeight> minSliderHeight) {
            var centerButton = $('a.control_nextSlide').outerHeight() / 2;
            var sliderHeight = $(window).height() * .60;
            var buttonHeight = sliderHeight / 2 + 50 - centerButton;
            $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
            $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
        } else {
            var centerButton = $('a.control_nextSlide').outerHeight() / 2;
            var sliderHeight = $(window).height() * .60;
            var buttonHeight = minSliderHeight / 2 + 50 - centerButton;
            $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
            $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
        }
    } else {
        var centerButton = $('a.control_nextSlide').outerHeight() / 2;
        var sliderHeight = $(window).height() * .80;
        var buttonHeight = sliderHeight / 2 + 85 - centerButton;
        $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
        $('a.control_prevSlide, a.control_nextSlide').css('top', buttonHeight);
    }
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