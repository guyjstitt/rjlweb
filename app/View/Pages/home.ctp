<?php
/**
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Pages
 * @since         CakePHP(tm) v 0.10.0.1076
 */


?>
<?php 


$this->start('head'); 
?>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
    <meta name="description" content="Restorative Justice Louisville - Bringing together the victim, offender and community to make things right. At RJL, we transform communities by ending crime."/>
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="Restorative Justice Louisville Court system kentucky community rjl get involved events"/>
    <meta property="og:title" content="Restorative Justice Louisville - Lousiville KY"/>
    <meta name="title" content="Restorative Justice Louisville - Lousiville, Kentucky"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=<?php echo $url ?>/>
    <meta property="og:site_name" content="restorativejustivelouisville rjlou restorative justice louisville"/>
    <meta property="og:image" content="http://www.rjlou.org/app/webroot/images/handscropped.jpg"/>
    <meta property="og:image:secure_url" content="https://www.rjlou.org/app/webroot/images/handscropped.jpg" />
    <?php

    echo $this->Html->script('jquery-1.11.1.min');
    ?>
<?php 
$this->end(); ?>
<div class='mainContent'>

        
    <div class="slider">
        <a href="#" class="control_nextSlide"><span></span></a>
        <a href="#" class="control_prevSlide"></a>
        <div class="slideContainer">
            <div class="slide slide1 show">
                <a class="slideOverlay" href="GetInvolved/volunteer"></a>
                 <div class="mainSlideWrapper">
                     <div class='mainSlideContent'>
                        <h1 class="mainSlideHeader">Become a Volunteer</h1>
                        <p class="mainSlideMessage">Fill out a short form and get involved with RJL!</p>
                        <div class="shareWrapper">
                             <ul class="soc shareThis sliderShare">
                                <li><a class="soc-twitter" href="https://twitter.com/intent/tweet?url=http://rjlou.org"></a></li>
                                <li><a class="soc-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://rjlou.org"></a></li>
                                <li><a class="soc-google" href="https://plus.google.com/share?url=http://rjlou.org"></a></li>
                                <li><a class="soc-linkedin soc-icon-last" href="http://www.linkedin.com/shareArticle?mini=true&url=http://rjlou.org"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<div class="row mainContainer">
		<div id="contentContainer" class="col-md-8 center">
                <div class="divider center"><h1>Transforming Communities By Ending Crime</h1></div>
    			<div class="contentWrapper"> 
                    <image-gallery></image-gallery>
                    <?php echo $this->element('rail'); ?>
                </div>  
			<div class ="col-md-4 footerPad"></div>
		</div>
	</div>
</div>