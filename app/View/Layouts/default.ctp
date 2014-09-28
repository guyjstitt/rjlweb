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
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>
		RJL
	</title>
	<?php
		echo $this->Html->meta('icon');
		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->Html->css('jquery.bxslider');
		echo $this->Html->css('bootstrap');
		echo $this->Html->css('bootstrap-theme');
		echo $this->Html->css('sticky.footer');
		echo $this->Html->css('header');
		echo $this->Html->css('body');
    echo $this->Html->css('social');
		echo $this->Html->script('jquery-1.11.1.min');
		echo $this->Html->script('bootstrap.min');
    echo $this->Html->script('jquery-1.9.1.min');
    echo $this->Html->script('jssor.core');
    echo $this->Html->script('jssor.utils');
    echo $this->Html->script('jssor.slider');
     echo $this->Html->script('jssorSlider');
	?>
</head>
<body>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<div class= "wrapper">
  <div class="navTop">
    <div class="shareBarHeader">
      <div class="fb-like" data-href="https://www.facebook.com/rjlouisville" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
      <a href="https://twitter.com/RJLouisville" class="twitter-follow-button" data-show-count="false">Follow @GuyjStitt</a>
        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
      </div>
    </div>
  </div>
	<div id="navHeader" class="navbar  navbar-fixed-top" role="navigation">
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
            <li class="active"><a href="/rjlweb/">Home</a></li>
            <li><a href="/rjlweb/About/index">About Us</a></li>
            <li><a href="/rjlweb/Impact/index">Our Impact</a></li>
            <li><a href="/rjlweb/GetInvolved/index">Get Involved</a></li>
            <li><a href="#contact">Resources</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#contact">Log in</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

    <div class="logo">
    	<img src="http://www.rjlou.org/wp-content/uploads/2014/04/RJL-logo.png" width="643" height="274" alt="RJ Louisville">
    </div>
    <?php echo $this->fetch('content'); ?>
    <!-- Begin page content -->
</div>
    <div class="footer">
      <div class="foot-container">
        <div class="foot-text">
          <a href="http://rjlou.org">Home</a> | 
          <a href="http://rjlou.org/?page_id=102">About Us</a> |
          <a href="http://rjlou.org/?page_id=103">Our Impact</a> |
          <a href="http://rjlou.org/?page_id=16">Get Involved</a> |
          <a href="http://rjlou.org/?page_id=18">Resources</a> |
          <a href="http://rjlou.org/?page_id=20">Contact Us</a> |
          <a href="http://rjlou.org/rjl/users/login">Log In</a> 
      </div>
    </div>


</body>
</html>

