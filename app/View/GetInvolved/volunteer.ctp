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
  <meta property="og:url" content="http://rjlou.org/GetInvolved/volunteer"/>
  <meta property="og:site_name" content="restorativejustivelouisville rjlou restorative justice louisville"/>
  <?php
    echo $this->Html->css('jquery-ui.min');
    echo $this->Html->css('jquery-ui.structure.min');
    echo $this->Html->css('jquery-ui.theme.min');
    echo $this->Html->css('bootstrap-theme.min');
    echo $this->Html->css('volunteerForm');

    echo $this->Html->script('jquery-1.11.1.min');
    echo $this->Html->script('jquery-ui.min');
    echo $this->Html->script('lib/jquery.form');
    echo $this->Html->script('lib/jquery.mockjax');
    echo $this->Html->script('lib/jquery.simulate');
    echo $this->Html->script('lib/jquery.validate.min');
    echo $this->Html->script('lib/additional-methods.min');
    echo $this->Html->script('lib/require');
    echo $this->Html->script('volunteer-submission');
   ?>

<?php 
$this->end(); ?>	

<div class="row mainContainer page"> 
	<div id= "contentContainer" class = "col-md-8 center">
		<div class="col-md-8">
			<h1 class="headerMain">Volunteer</h1>
			<p class="subHeader">Interested in volunteering? Fill out the information below, and give us a brief description of why you would like to volunteer! Your information will be sent to RJL and we will be in contact with you.</p>
			<p>* denotes a required field</p><br>
			<div class="shareBarHolder">	
				<div class="shareBar">	
					<ul class="soc shareThis">
                        <li><a class="soc-twitter" href="https://twitter.com/intent/tweet?url=http://rjlou.org"></a></li>
                        <li><a class="soc-facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://rjlou.org"></a></li>
                        <li><a class="soc-google" href="https://plus.google.com/share?url=http://rjlou.org"></a></li>
                        <li><a class="soc-linkedin soc-icon-last" href="http://www.linkedin.com/shareArticle?mini=true&url=http://rjlou.org"></a></li>
                    </ul>
				</div>
			</div>
			
			<div class="row">       
				<form id="volForm" action="/GetInvolved/volunteer" method="post">
					<div class="row">
						<div class="col-sm-4">
							<label for="inputFirstName">*First Name: </label>
							<input type="text" name="inputFirstName" id="inputFirstName" placeholder=" First Name">
						</div>
						<div class="col-sm-4">
							<label for="inputLastName">*Last Name: </label>
							<input type="text" name="inputLastName" id="inputLastName" placeholder=" Last Name">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<label for="inputGender">Gender:</label>
							<ul>
								<li>
								<input type="radio" id="radio" name="inputGender" value="male">Male<br>
								<input type="radio" id="radio" name="inputGender" value="female">Female<br>
								<input type="radio" id="radio" name="inputGender" value="na" checked>I prefer not to answer<br>
								</li>
							</ul>
						</div>
						<div class="col-sm-4">
							<label for="inputDateOfBirth">Date of Birth: </label> 
							<input type="text" name="inputDateOfBirth" id="inputDateOfBirth" placeholder=" Choose Date" readonly="readonly">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<label for="inputEmail">Email:</label> 
							<input type="email" name="inputEmail" id="inputEmail" placeholder=" Email"> 
						</div>
						<div class="col-sm-4">
							<label for="inputPriPhone">*Primary Phone: </label> 
							<input type="text" name="inputPriPhone" id="inputPriPhone" placeholder=" 555-555-5555">
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12">
							<label for="volunteerReference">How did you hear about Restorative Justice Louisville?</label>
							<textarea name="inputHear"rows="6" placeholder=" Please provide a short description of how you heard about RJL"></textarea>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12">
							<label for="volunteerStrengths">*What skills and interests do you have? What are you looking for as a volunteer? </label>
							<textarea name="inputSkills" rows="6" placeholder=" These may include something that you learned in school, or simply that you're willing to help the youth in Louisville!"></textarea>
						</div>
					</div>
					<input type="submit" name="Submit">
				</form>
			</div> 
		</div>
		<rail></rail>
	<div class ="col-md-4 footerPad"></div>
</div>


