
function detectMobile() {
    if(window.innerWidth <= 768 && window.innerHeight <= 600) {
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

$(document).ready(function() {
  
    $('a.control_nextSlide').on('click', function() {
        var self = $('.slider .slideContainer');
        var slideTwoGet = isLoadedTwo();
        var slideThreeGet = isLoadedThree();
        var slideRig
        if(slideTwoGet == false) {
            $.get("/rjlweb/app/webroot/ajax/slideTwo.ctp", function() {

            }).done(function(response) {
                self.append(response);
                resizeHeight();
                fadeNextSlide();
                initializeSocial();
            });
        } else if (slideTwoGet == true && slideThreeGet == false) {
            $.get("/rjlweb/app/webroot/ajax/slideThree.ctp", function() {

            }).done(function(response) {
                self.append(response);
                resizeHeight();
                fadeNextSlide();
                initializeSocial();
            });
        } else {
            fadeNextSlide();
        }
    });

    $('a.control_prevSlide').on('click', function() {
        var self = $('.slider .slideContainer');
        var slideTwoGet = isLoadedTwo();
        var slideThreeGet = isLoadedThree();
        if(slideTwoGet == false && slideThreeGet == false) {
            $.get("/rjlweb/app/webroot/ajax/allSlides.ctp", function() {

            }).done(function(response) {
                self.append(response);
                resizeHeight();
                fadePrevSlide();
                initializeSocial();
            });
        } else {
            fadePrevSlide();
        }
    });

    function fadeNextSlide() {
        var self = $('.slider div div.show');
        var firstSlide = $('.slider div div:first-child');
        var nextSlide = $('.slider div div.show').next();

        if(nextSlide.length == 0) {
            self.removeClass('show');
            firstSlide.fadeIn('slow');
            firstSlide.addClass('show');
        } else {
            self.removeClass('show');
            nextSlide.fadeIn('slow');
            nextSlide.addClass('show');
        }
    }

    function fadePrevSlide() {
        var self = $('.slider div div.show');
        var lastSlide = $('.slider div div:last-child');
        var prevSlide = $('.slider div div.show').prev();
        if(prevSlide.length == 0) {
            self.removeClass('show');
            lastSlide.fadeIn('slow');
            lastSlide.addClass('show');
        } else {
            self.removeClass('show');
            prevSlide.fadeIn('slow');
            prevSlide.addClass('show');
        }

    }

    function isLoadedTwo() {
        if($('.slide2').length !== 0) {
           return true; 
        } else {
            return false;
       }
    }

    function isLoadedThree() {
        if($('.slide3').length !== 0) {
           return true; 
        } else {
            return false;
       }
    }

    function resizeHeight() {
        if(detectMobile() == true) {
            var sliderHeight = $(window).height() * .60;
            $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
        } else {
             var sliderHeight = $(window).height() * .80;
        $('.slider, .slide1, .slide2, .slide3').css('height', sliderHeight);
        }
    }

    function initializeSocial() {
        var Config = {
            Link: "ul.shareThis li a",
            Width: 500,
            Height: 500
        };
     
        // add handler links
        var slink = document.querySelectorAll(Config.Link);
        for (var a = 0; a < slink.length; a++) {
            slink[a].onclick = PopupHandler;
        }
     
        // create popup
        function PopupHandler(e) {
     
            e = (e ? e : window.event);
            var t = (e.target ? e.target : e.srcElement);
     
            // popup position
            var
                px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
                py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
     
            // open popup
            var popup = window.open(t.href, "social", 
                "width="+Config.Width+",height="+Config.Height+
                ",left="+px+",top="+py+
                ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
            if (popup) {
                popup.focus();
                if (e.preventDefault) e.preventDefault();
                e.returnValue = false;
            }
            return !!popup;
        }
    }
});


$(window).load(function(){

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