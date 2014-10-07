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
$this->end(); ?>	

<div class="row mainContainer page"> 
	<div class = "col-md-8 contentContainer center">
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
			        
			<form id="volForm" action="volunteer.php" method="post">
				<ul>
					<li>
						<label for="inputFirstName">*First Name: </label>
					</li>
					<li>
						<input type="text" name="inputFirstName" id="inputFirstName" placeholder="First Name">
					</li>
					<li>	
						<label for="inputLastName">*Last Name: </label> 
					</li>
					<li>
						<input type="text" name="inputLastName" id="inputLastName" placeholder="Last Name">
					</li>
					<li>
						<label for="inputEmail">*Email:</label>  
					</li>
					<li>
						<input type="email" name="inputEmail" id="inputEmail" class="required" placeholder="Email">
					</li>	
						<label for="inputGender">Gender:</label>
							<ul>
								<li>
								<input type="radio" id="radio" name="inputGender" value="male">Male<br>
								<input type="radio" id="radio" name="inputGender" value="female">Female<br>
								<input type="radio" id="radio" name="inputGender" value="na" checked>I prefer not to answer<br>
								</li>
							</ul>
					</li>
					<li>	
						<label for="inputDateOfBirth">*Date of Birth: </label> 
					</li>
					<li>
						<input type="text" name="inputDateOfBirth" id="inputDateOfBirth" readonly="readonly">
					</li>
					<li>	
						<label for="inputPriPhone">Primary Phone: </label> 
					</li>
					<li>
						<input type="text" name="inputPriPhone" id="inputPriPhone" placeholder="555-555-5555">
					<li>	
					<li>
						<label for="volunteerReference">How did you hear about Restorative Justice Louisville?</label>
					</li>
						<textarea name="inputHear"rows="6" placeholder="Please provide a short description of how you heard about RJL"></textarea>
					<li>	
						<label for="volunteerStrengths"> What skills and interests do you have? What are you looking for as a volunteer? </label>
					</li>
					<li>	
						<textarea name="inputSkills" rows="6" placeholder="These may include something that you learned in school, or simply that you're willing to help the youth in Louisville!"></textarea>
					</li>
				<ul>

	
				<input type="submit" name="Submit">
			</form>

<script>
$().ready(function() {
$("#volForm").validate({
  rules: {
    inputFirstName: { required: true, letterswithbasicpunc: true },
    inputLastName: { required: true, letterswithbasicpunc: true },
    inputDateOfBirth: {
      required: true,
      date: true
    },
    inputPriPhone: { phoneUS: true }
  }
});
});
</script>
		</div>
		<div class ="col-md-4 rail">
                <h3 class='headerText'>Keep Up With Our Newsletters</h3>
                <ul>
                    <li class="list"><span>January</span><a>Restorative Justice Louisville On The Rise</a></li>
                    <li class="list"><span> February</span><a>Keeping Crime Out of the Street</a></li>
                    <li class="list"><span> March</span><a>Our Spring Newsletter</a></li>
                </ul>
                <h3 class='headerText'>Announcements</h3>
                 <ul>
                    <li><span>Facilitator Training</span><p>We are holding open sessions for volunteers to become Facilitators</p></li>
                    <li><span>Volunteer Submission Form</span><p>Become a Volunteer for free in a few easy steps</p></li>
                    <li><span>Our First Event</span><p>We are hosting our first event at Cross Country Golf Club</p></li>
                    <li><span>Donation to RJL</span><p>Donate online and help us grow</p></li>
                    <li><span>Watch Our Video</span><p>Learn about us through watching our video</p></li>
                </ul>
                <button class="donateButton"><span>Donate</span></button>
             </div>
	<div class ="col-md-4 footerPad"></div>
</div>

<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53f56303144fe2bd"></script>