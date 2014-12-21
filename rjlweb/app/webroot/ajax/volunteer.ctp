	
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
		<?php echo $this->element('rail'); ?>
	<div class ="col-md-4 footerPad"></div>
</div>

<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53f56303144fe2bd"></script>