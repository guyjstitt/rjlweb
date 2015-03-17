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
	<?php
		echo $this->Html->meta('icon');
		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->Html->css('bootstrap.min');
		echo $this->Html->css('sticky.footer');
		echo $this->Html->css('header');
		echo $this->Html->css('body');
    echo $this->Html->css('socialIcons');
	?>
</head>
<body>

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
              <li <?php if($this->params['controller'] == 'pages'){echo 'class="active"';}?>><a href="/">Home</a></li>
              <li <?php if($this->params['controller'] == 'About'){echo 'class="active"';}?>><a href="/About/index" data-page-name = "about" data-url="/About/index">About Us</a></li>
              <li <?php if($this->params['controller'] == 'Impact'){echo 'class="active"';}?>><a href="/Impact/index" data-page-name = "impact" data-url="/Impact/index">Our Impact</a></li>
              <li <?php if($this->params['controller'] == 'GetInvolved'){echo 'class="active"';}?>><a href="/GetInvolved/index" data-page-name = "involved" data-url="/GetInvolved/index">Get Involved</a></li>
              <li <?php if($this->params['controller'] == 'Resources'){echo 'class="active"';}?>><a href="/Resources/index" data-page-name = "resources" data-url="/Resources/index">Resources</a></li>
              <li <?php if($this->params['controller'] == 'Contact'){echo 'class="active"';}?>><a href="/Contact/index" data-page-name = "contact" data-url="/Contact/index">Contact Us</a></li>
              <li><a href="/rjl">Log in</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
    <div class='anchor'></div>
    <div class="logo">
      <div class="logoShadow"></div>
    	<img class="logoImage" src="/images/RJL-logo-highres.png" width="643" height="274" alt="RJ Louisville">
      <img class="logoText" src="/images/rjl-text2.png" width="643" height="274" alt="RJ Louisville">
    </div>
    <div class="mainContent">
    <?php echo $this->fetch('content'); ?>
    <!-- Begin page content -->
    </div>
    <div class="footer">
      <div class="foot-container">
        <div class="foot-text col-sm-8">
            <div class="row mainFootContent"> 
                <div class="col-xs-3 footContentFirst">
                  <div> 
                    <img class="logoImageFooter" src="/images/RJL-logo-highres.png" width="643" height="274" alt="RJ Louisville">
                  </div>
                </div>
                <div class="col-xs-3 footContent">
                  <div>
                    <a href="/About/index"><h3>About us</h3></a>
                    <a href="/GetInvolved/index"><h3>Get Involved</h3></a>
                    <a href="/Impact/index"><h3>Our Impact</h3></a>
                  </div> 
                </div>
                <div class="col-xs-3 footContent">
                  <div>
                    <a href="/Resources/index"><h3>Resources</h3></a>
                    <a href="/Contact/index"><h3>Contact Us</h3></a>
                    <a href="/rjl"><h3>Log In</h3></a>
                  </div> 
                </div>
                <div class="col-xs-3 footContentLast">
                  <div>
                    <h3>Follow Us</h3>
                    <ul class="footLinks">
                      <li><a class="fbFollow" target="_blank" href="https://www.facebook.com/rjlouisville"><img src="/images/fb-logo.png"></a></li>
                    </ul>
                  </div> 
                </div>
            </div>
      </div>
    </div>
  </div>
</div>
<?php
    echo $this->Html->script('components/angular.js');
    echo $this->Html->script('app.js');
    echo $this->Html->script('jquery-1.11.1.min');
    echo $this->Html->script('jquery-ui.min');
    echo $this->Html->script('bootstrap.min');
    echo $this->Html->script('share');
    echo $this->Html->script('mainSlider');
    echo $this->Html->script('contact');
?>
<!--[if IE 8]>
<script src="/js/respond.min.js"></script>
<![endif]-->
</body>
</html>
