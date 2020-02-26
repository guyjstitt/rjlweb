<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

?>
<!DOCTYPE html>
<html ng-app="home">
<head>
	<?php echo $this->Html->charset(); ?>
  <?php echo $this->fetch('head') ?>
	<title>
		RJL
	</title>
  <link rel="icon" 
      type="image/png" 
      href="<?php CORE_PATH ?>images/RJL-logo-highres.png">
  <link href='http://fonts.googleapis.com/css?family=Droid+Sans|Droid+Serif' rel='stylesheet' type='text/css'>
	<?php
		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->Html->css('bootstrap.min');
		echo $this->Html->css('sticky.footer');
		echo $this->Html->css('header');
		echo $this->Html->css('body');
    echo $this->Html->css('socialIcons');
    echo $this->Html->css('jquery-ui.min.css');
    echo $this->Html->css('jquery-ui.theme.min.css');
	?>
  <base href="/"></base>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
  <meta name="description" content="Restorative Justice Louisville - Bringing together the victim, offender and community to make things right. At RJL, we transform communities by ending crime."/>
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="Restorative Justice Louisville Court system kentucky community rjl get involved events"/>
  <meta property="og:title" content="Restorative Justice Louisville - Lousiville KY"/>
  <meta name="title" content="Restorative Justice Louisville - Lousiville, Kentucky"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content=http://rjlou.org//>
  <meta property="og:site_name" content="restorativejustivelouisville rjlou restorative justice louisville"/>
  <meta property="og:image" content="http://www.rjlou.org/app/webroot/images/handscropped.jpg"/>
  <meta property="og:image:secure_url" content="https://www.rjlou.org/app/webroot/images/handscropped.jpg" />
</head>
<body ng-controller="MainController">
<div class= "wrapper">
  <div class="navTop">
    <div class="shareBarHeader">
    </div>
  </div>
  <div class="waypoint">
  	<div  class="navbar navHeader navbar-absolute" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"></a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us/" data-page-name = "about" data-url="/About/index">About Us</a></li>
              <li><a href="/our-impact/" data-page-name = "impact" data-url="/Impact/index">Our Impact</a></li>
              <li><a href="/get-involved/" data-page-name = "involved" data-url="/GetInvolved/index">Get Involved</a></li>
              <li><a href="/resources/" data-page-name = "resources" data-url="/Resources/index">Resources</a></li>
              <li><a href="/contact-us/" data-page-name = "contact" data-url="/Contact/index">Contact Us</a></li>
              <li><a target="_blank" href="http://rjlou.org/rjl">Log in</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
    <div class='anchor'></div>
    <div class="logo">
      <div class="logoShadow"></div>
    	<img class="logoImage" src="<?php CORE_PATH ?>images/RJL-logo-highres.png" width="643" height="274" alt="RJ Louisville">
      <img class="logoText" src="<?php CORE_PATH ?>images/rjl-text2.png" width="643" height="274" alt="RJ Louisville">
    </div>
    <div ng-view class="mainContent" id="content" style="min-height:100vh;">
    
    </div>
    <div class="footer">
      <div class="foot-container">
        <div class="foot-text col-sm-8">
            <div class="row mainFootContent"> 
                <div class="col-xs-3 footContentFirst">
                  <div> 
                    <img class="logoImageFooter" src="<?php CORE_PATH ?>images/RJL-logo-highres.png" width="643" height="274" alt="RJ Louisville">
                  </div>
                </div>
                <div class="col-xs-3 footContent">
                  <div>
                    <a href="/about-us/"><h3>About us</h3></a>
                    <a href="/get-involved/"><h3>Get Involved</h3></a>
                    <a href="/our-impact/"><h3>Our Impact</h3></a>
                  </div> 
                </div>
                <div class="col-xs-3 footContent">
                  <div>
                    <a href="/resources/"><h3>Resources</h3></a>
                    <a href="/contact-us/"><h3>Contact Us</h3></a>
                    <a target="_blank" href="http://rjlou.org/rjl"><h3>Log In</h3></a>
                  </div> 
                </div>
                <div class="col-xs-3 footContentLast">
                  <div>
                    <h3>Follow Us</h3>
                    <ul class="footLinks">
                      <li><a class="fbFollow" target="_blank" href="https://www.facebook.com/rjlouisville"><img class="lazy" src="<?php CORE_PATH ?>images/fb-logo.png"></a></li>
                    </ul>
                  </div> 
                </div>
            </div>
      </div>
    </div>
  </div>
</div>
<?php
    echo $this->Html->script('https://code.angularjs.org/1.3.9/angular.js');
    echo $this->Html->script('https://code.angularjs.org/1.3.9/angular-route.js');
    echo $this->Html->script('http://code.jquery.com/jquery-latest.js');
    echo $this->Html->script('jquery-ui.min');
    echo $this->Html->script('jquery.validate.min.js');
    echo $this->Html->script('bootstrap.min');
    echo $this->Html->script('jquery.lazy');
    echo $this->Html->script('popover');
    echo $this->Html->script('app.js');
?>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<!--[if IE 8]>
<script src="/js/respond.min.js"></script>
<![endif]-->
</body>
</html>
