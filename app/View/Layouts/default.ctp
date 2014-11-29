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
<html>
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
            <li <?php if($this->params['controller'] == 'pages'){echo 'class="active"';}?>><a href="/rjlweb/">Home</a></li>
            <li <?php if($this->params['controller'] == 'About'){echo 'class="active"';}?>><a href="/rjlweb/About/index" data-page-name = "about" data-url="/rjlweb/About/index">About Us</a></li>
            <li <?php if($this->params['controller'] == 'Impact'){echo 'class="active"';}?>><a href="/rjlweb/Impact/index" data-page-name = "impact" data-url="/rjlweb/Impact/index">Our Impact</a></li>
            <li <?php if($this->params['controller'] == 'GetInvolved'){echo 'class="active"';}?>><a href="/rjlweb/GetInvolved/index" data-page-name = "involved" data-url="/rjlweb/GetInvolved/index">Get Involved</a></li>
            <li <?php if($this->params['controller'] == 'Resources'){echo 'class="active"';}?>><a href="/rjlweb/Resources/index" data-page-name = "resources" data-url="/rjlweb/Resources/index">Resources</a></li>
            <li <?php if($this->params['controller'] == 'Contact'){echo 'class="active"';}?>><a href="/rjlweb/Contact/index" data-page-name = "contact" data-url="/rjlweb/Contact/index">Contact Us</a></li>
            <li><a href="/rjl">Log in</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
    <div class='anchor'></div>
    <div class="logo">
      <div class="logoShadow"></div>
    	<img class="logoImage" src="/rjlweb/app/webroot/images/RJL-logo-highres.png" width="643" height="274" alt="RJ Louisville">
      <img class="logoText" src="/rjlweb/app/webroot/images/rjl-text2.png" width="643" height="274" alt="RJ Louisville">
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
                    <img class="logoImageFooter" src="/rjlweb/app/webroot/images/RJL-logo-highres.png" width="643" height="274" alt="RJ Louisville">
                  </div>
                </div>
                <div class="col-xs-3 footContent">
                  <div>
                    <h3>About us</h3>
                    <ul class="footLinks">
                      <li><a></a></li>
                    </ul>
                    <h3>Get Involved</h3>
                    <ul class="footLinks">
                    </ul>
                    <h3>Contact Us</h3>
                    <ul class="footLinks">
                      <li></li>
                    </ul>
                  </div> 
                </div>
                <div class="col-xs-3 footContent">
                  <div>
                    <h3>Our Impact</h3>
                    <ul class="footLinks">
                      <li></li>
                    </ul>
                    <h3>Resources</h3>
                    <ul class="footLinks">
                      <li></li>
                    </ul>
                    <h3>Log In</h3>
                    <ul class="footLinks">
                      <li></li>
                    </ul>
                  </div> 
                </div>
                <div class="col-xs-3 footContentLast">
                  <div>
                    <h3>Follow Us</h3>
                    <ul class="footLinks">
                      <!--<li><a class="fbFollow"href="http://www.facebook.com"><img src="/rjlweb/app/webroot/images/facebook.PNG"></a></li>-->
                    </ul>
                  </div> 
                </div>
            </div>
      </div>
    </div>
  </div>
</div>

<?php

    echo $this->Html->script('jquery-1.11.1.min');
    echo $this->Html->script('jquery-ui.min');
    echo $this->Html->script('bootstrap.min');
    echo $this->Html->script('share');
    echo $this->Html->script('mainSlider');
    echo $this->Html->script('waypoints.min');
?>
</body>
</html>
<!--
<script type="text/javascript">


var  mn = $(".navHeader");
    mns = "navbar-fixed-top";
     mn2 = "navHeader-absolute";
     li = $(".logo .logoImage");
     lt = $(".logo .logoText");
     ls = $(".logoShadow")
     logoImage = "logoImageScroll";
     logoText = "logoTextScroll";
     logoShadow = "logoShadow";
    hdr = $('.navHeader').position();
    

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr.top ) {
    mn.addClass(mns);
    li.addClass(logoImage);
    lt.addClass(logoText);
    ls.removeClass(logoShadow);
  } else {
    ls.addClass(logoShadow);
    mn.removeClass(mns);
    li.removeClass(logoImage);
    lt.removeClass(logoText);
  }
});
</script>
-->

<!--
          <a href="http://rjlou.org">Home</a> | 
          <a href="http://rjlou.org/?page_id=102">About Us</a> |
          <a href="http://rjlou.org/?page_id=103">Our Impact</a> |
          <a href="http://rjlou.org/?page_id=16">Get Involved</a> |
          <a href="http://rjlou.org/?page_id=18">Resources</a> |
          <a href="http://rjlou.org/?page_id=20">Contact Us</a> |
          <a href="http://rjlou.org/rjl/users/login">Log In</a> 
          -->