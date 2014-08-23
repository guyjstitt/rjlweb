<?php
/**
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Pages
 * @since         CakePHP(tm) v 0.10.0.1076
 */


?>
<div class='mainContent'>

	
	<div class='jssorSlider gradient'>
		<div id="slider1_container" class="gradient" style="position: relative; margin: 0 auto;
        top: 75px; left: 0px; width: 1300px; height: 500px; overflow: hidden;">
        <!-- Loading Screen -->
        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block;
                top: 0px; left: 0px; width: 100%; height: 100%;">
            </div>
            <div style="position: absolute; display: block; background: url(/rjlweb/app/webroot/images/loading.gif) no-repeat center center;
                top: 0px; left: 0px; width: 100%; height: 100%;">
            </div>
        </div>
        <!-- Slides Container -->
        <div u="slides" class="sliderImages">
            <div>
                <img u="image" src="/rjlweb/app/webroot/images/handsbig.jpg" />
                <div class="mainSlideContent">
                    <div class="sliderHeader">BECOME A VOLUNTEER
                    </div>
                    <div class="sliderCaption">
                            Fill out a short form and we'll get back with you!
                    </div>
                     <div class="addthis_sharing_toolbox shareSlide shareHide"></div>
                </div> 
            </div>
            <div>
                <img u="image" src="/rjlweb/app/webroot/images/gavel.jpg" />
                 <div class="mainSlideContent">
                    <div class="sliderHeader">LEARN MORE ABOUT RJL
                    </div>
                    <div class="sliderCaption">
                            Transforming Communities by Ending Crime!
                    </div>
                    <div class="addthis_sharing_toolbox shareSlide shareHide"></div>
                </div> 
            </div>
            <div>
                <img u="image" src="/rjlweb/app/webroot/images/louisville.jpg" />
                 <div class="mainSlideContent"> 
                    <div class="sliderHeader">GET INVOLVED IN OUR COMMUNITY
                    </div>
                    <div class="sliderCaption">
                            Learn how you can make a difference in our great city!
                    </div>
                     <div class="addthis_sharing_toolbox shareSlide shareHide"></div>
                </div>
            </div>
            <!-- Example to add fixed static share buttons in slider BEGIN -->
            <!-- Remove it if no need -->
            <!-- Share Button Styles -->
            <style>
                .share-icon {
                    display: inline-block;
                    float: left;
                    margin: 4px;
                    width: 32px;
                    height: 32px;
                    cursor: pointer;
                    vertical-align: middle;
                    background-image: url(/rjlweb/app/webroot/images/share/share-icons.png);
                }

                .share-facebook {
                    background-position: 0px 0px;
                }

                    .share-facebook:hover {
                        background-position: 0px -40px;
                    }

        .share-twitter {
            background-position: -40px 0px;
        }

            .share-twitter:hover {
                background-position: -40px -40px;
            }

        .share-pinterest {
            background-position: -80px 0px;
        }

            .share-pinterest:hover {
                background-position: -80px -40px;
            }

                .share-linkedin {
                    background-position: -240px 0px;
                }

                    .share-linkedin:hover {
                        background-position: -240px -40px;
                    }


                .share-googleplus {
                    background-position: -120px 0px;
                }

                    .share-googleplus:hover {
                        background-position: -120px -40px;
                    }


        .share-stumbleupon {
            background-position: -360px 0px;
        }

            .share-stumbleupon:hover {
                background-position: -360px -40px;
            }

                .share-email {
                    background-position: -320px 0px;
                }

                    .share-email:hover {
                        background-position: -320px -40px;
                    }
            </style>

            <!-- Example to add fixed static share buttons in slider BEGIN -->
            <!-- Remove it if no need -->
            <div class='socialShare'u="any">


                <a class="share-icon share-facebook" target="_blank" href="http://www.facebook.com/sharer.php?u=http://jssor.com" title="Share on Facebook"></a>
                <a class="share-icon share-twitter" target="_blank" href="http://twitter.com/share?url=http://jssor.com&text=jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20javascript+html%20TOUCH%20SWIPE%20Responsive" title="Share on Twitter"></a>
                <a class="share-icon share-googleplus" target="_blank" href="https://plus.google.com/share?url=http://jssor.com" title="Share on Google Plus"></a>
                <a class="share-icon share-linkedin" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&url=http://jssor.com" title="Share on LinkedIn"></a>
                <a class="share-icon share-stumbleupon" target="_blank" href="http://www.stumbleupon.com/submit?url=http://jssor.com&title=jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20javascript+html%20TOUCH%20SWIPE%20Responsive" title="Share on StumbleUpon"></a>
                <a class="share-icon share-pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=http://jssor.com&media=http://jssor.com/img/site/jssor.slider.jpg&description=jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20javascript+html%20TOUCH%20SWIPE%20Responsive" title="Share on Pinterst"></a>
                <a class="share-icon share-email" target="_blank" href="mailto:?Subject=Jssor%20Slider&Body=Highly%20recommended%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20javascript+html%20TOUCH%20SWIPE%20Responsive%20http://jssor.com" title="Share by Email"></a>
            </div>
            <!-- Example to add fixed static share buttons in slider END -->
        </div>
                
        <!-- Bullet Navigator Skin Begin -->
        <style>
            /* jssor slider bullet navigator skin 21 css */
            /*
            .jssorb21 div           (normal)
            .jssorb21 div:hover     (normal mouseover)
            .jssorb21 .av           (active)
            .jssorb21 .av:hover     (active mouseover)
            .jssorb21 .dn           (mousedown)
            */
            .jssorb21 div, .jssorb21 div:hover, .jssorb21 .av
            {
                background: url(/rjlweb/app/webroot/images/b21.png) no-repeat;
                overflow:hidden;
                cursor: pointer;
            }
            .jssorb21 div { background-position: -5px -5px; }
            .jssorb21 div:hover, .jssorb21 .av:hover { background-position: -35px -5px; }
            .jssorb21 .av { background-position: -65px -5px; }
            .jssorb21 .dn, .jssorb21 .dn:hover { background-position: -95px -5px; }
        </style>
        <!-- bullet navigator container -->
        <div u="navigator" class="jssorb21" style="position: absolute; bottom: 26px; left: 6px;">
            <!-- bullet navigator item prototype -->
            <div u="prototype" style="POSITION: absolute; WIDTH: 19px; HEIGHT: 19px; text-align:center; line-height:19px; color:White; font-size:12px;"></div>
        </div>
        <!-- Bullet Navigator Skin End -->

        <!-- Arrow Navigator Skin Begin -->
        <style>
            /* jssor slider arrow navigator skin 21 css */
            /*
            .jssora21l              (normal)
            .jssora21r              (normal)
            .jssora21l:hover        (normal mouseover)
            .jssora21r:hover        (normal mouseover)
            .jssora21ldn            (mousedown)
            .jssora21rdn            (mousedown)
            */
            .jssora21l, .jssora21r, .jssora21ldn, .jssora21rdn
            {
            	position: absolute;
            	cursor: pointer;
            	display: block;
                background: url(/rjlweb/app/webroot/images/a21.png) center center no-repeat;
                overflow: hidden;
            }
            .jssora21l { background-position: -3px -33px; }
            .jssora21r { background-position: -63px -33px; }
            .jssora21l:hover { background-position: -123px -33px; }
            .jssora21r:hover { background-position: -183px -33px; }
            .jssora21ldn { background-position: -243px -33px; }
            .jssora21rdn { background-position: -303px -33px; }
        </style>
        <!-- Arrow Left -->
        <span u="arrowleft" class="jssora21l" style="width: 55px; height: 55px; top: 123px; left: 8px;">
        </span>
        <!-- Arrow Right -->
        <span u="arrowright" class="jssora21r" style="width: 55px; height: 55px; top: 123px; right: 8px">
        </span>
        <!-- Arrow Navigator Skin End -->
        <a style="display: none" href="http://www.jssor.com">slideshow</a>
    </div>

	</div>
	<div class="row mainContainer">
		<div class="col-md-8 center">	
			<div class ="col-md-8 imageContainer">
				<h3 class="headerText">Get Involved with Our Organzation</h3>
                <div class='imageContent'>
                    <div class="row">
                           <div class="featureImage slide gradient gradientHover"><img class='img-responsive' src="/rjlweb/app/webroot/images/smallVol.jpg" >
                                <div class='slideContent'>
                                    <h4 class="slideHeader">Become a Faciliator</h4>
                                    <p class="slideMessage">Get involved and make a difference in your community!</p>
                                    <div class="addthis_sharing_toolbox hide"></div>
                                </div>
                            </div>
                              <div class="featureImage slide gradient"><img class='img-responsive'src="/rjlweb/app/webroot/images/donateKeyboard.jpg" >
                                <div class='slideContent2'>
                                    <h4 class="slideHeader">Donate to RJL</h4>
                                    <p class="slideMessage">Donate and help our organiztion grow!</p>
                                    <div class="addthis_sharing_toolbox hide"></div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class= "col-md-6">
                        <div class='mainVideo'>
                             <iframe src="//www.youtube.com/embed/X5TvP3dhPTo?rel=0" frameborder="0" width="560" height="300"></iframe>
                        </div>
                    </div>
                    <div class="featureImage2 slide gradient"><img class='img-responsive'src="/rjlweb/app/webroot/images/calSmall.png" >
                        <div class='slideContent3'>
                            <h4 class="slideHeader">Calendar of Events!</h4>
                            <p class="slideMessage">Follow and attend RJL fundraisers</p>
                            <div class="addthis_sharing_toolbox hide"></div>
                        </div>
                    </div>
                </div>
			</div>
            <div class ="col-md-4 rail">
                <h3 class='headerText'>Keep Up With Our Newsletters</h3>
                <ul>
                    <li class="list"><span>January</span><a>Restorative Justice Louisville On The Rise</a></li>
                    <li class="list"><span> February</span><a>Keeping Crime Out of the Street</a></li>
                    <li class="list"><span> March</span><a>Our Spring Newsletter</a></li>
                </ul>
                <h3 class='headerText'>Don't Miss</h3>
                 <ul>
                    <li><span>September 2013 - The Voice Tribune - </span><a href="http://www.voice-tribune.com/news/your-voice-news/the-large-cost-of-justice/">http://www.voice-tribune.com/news/your-voice-news/the-large-cost-of-justice/</a></li>
                    <li><span>March 2013: Wave3 - </span><a href="http://www.wave3.com/story/20594232/wave-3-editorial-january-15-2013-restorative-justice">Editorial on Restorative Justice Louisville</a></li>
                    <li><span>January 2013: The Courier-Journal - </span><a href="http://www.courier-journal.com/article/20130108/NEWS10/301080093/Juvenile-defendants-can-meet-victims-settle-charges-outside-court">Defendants can meet victims, settle charges out of court</a></li>
                    <li><span>April 2012: Idea Mornings - </span><a href="http://vimeo.com/41180554">Judge Angela Bisig on Vimeo</a></li>
                    <li><span>April 2012: Insider Louisville - </span><a href="http://insiderlouisville.com/news/2012/04/25/judge-angela-mccormick-bisig-to-speak-on-restorative-justice-project-friday-at-idea-mornings/">Judge Angela Bisig to speak on Restorative Justice project Friday at Idea Mornings</a></li>
                    <li><span>November 2010: Insider Louisville - </span><a href="http://insiderlouisville.com/news/2010/11/18/bar-foundations-restorative-justice-louisville-pilot-project-underway/">Bar foundation’s Restorative Justice Louisville pilot project underway</a></li>
                </ul>

             </div>
			<div class ="col-md-4 footerPad"></div>
		</div>
	</div>
</div>

<script>
 

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$(document).on({
    mouseenter: function () {
        $(this).toggleClass('gradientHover', 1000, 'easeInQuad');
        $(this).find('.slideContent').children('.slideText').addClass('flyout');
        $(this).find('.slideContent').addClass('slideUp');
        $(this).find('.slideContent2').addClass('slideUp');
        $(this).find('.slideContent3').addClass('slideUpBottom');
        $(this).find('.slideContent').children('.addthis_sharing_toolbox').removeClass('hide');
        $(this).find('.slideContent2').children('.addthis_sharing_toolbox').removeClass('hide');
        $(this).find('.slideContent3').children('.addthis_sharing_toolbox').removeClass('hide');
    },
    mouseleave: function () {
        $(this).find('.slideContent').children('.slideText').removeClass('flyout');
        $(this).toggleClass('gradientHover', 1000, 'easOutQuad');
        $(this).find('.slideContent').removeClass('slideUp');
        $(this).find('.slideContent2').removeClass('slideUp');
        $(this).find('.slideContent3').removeClass('slideUpBottom');
        $(this).find('.slideContent').children('.addthis_sharing_toolbox').addClass('hide');
        $(this).find('.slideContent2').children('.addthis_sharing_toolbox').addClass('hide');
        $(this).find('.slideContent3').children('.addthis_sharing_toolbox').addClass('hide');
    }
},'.slide');

$(document).on({
    mouseenter: function () {
        
        $( this ).toggleClass('gradientHover', 1000, 'easeInQuad');
        $(this).find('.slideContent').children('.slideText').addClass('flyout');
        $(this).find('.mainSlideContent').addClass('mainSlideUp');
        $(this).find('.shareSlide').addClass('shareSlideUp');
        $(this).find('.shareSlide').removeClass('shareHide');
    },
    mouseleave: function () {
        $(this).find('.slideContent').children('.slideText').removeClass('flyout');
        $( this ).toggleClass('gradientHover', 1000, 'easOutQuad' );
        $(this).find('.mainSlideContent').removeClass('mainSlideUp');
        $(this).find('.shareSlide').removeClass('shareSlideUp');
        $(this).find('.shareSlide').addClass('shareHide');
    }
},'#slider1_container');

</script>

<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53f56303144fe2bd"></script>

<!-- Go to www.addthis.com/dashboard to customize your tools -->
