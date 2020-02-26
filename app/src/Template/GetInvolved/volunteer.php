<?php

namespace app\Template\GetInvolved;

include('connect-db.php');

$fname = ($_POST['inputFirstName']);
$lname = ($_POST['inputLastName']);
$email = ($_POST['inputEmail']);
$gender = ($_POST['inputGender']);
$dob = ($_POST['inputDateOfBirth']);
$phone = ($_POST['inputPriPhone']);
$hear = mysql_real_escape_string($_POST['inputHear']);
$skills = mysql_real_escape_string($_POST['inputSkills']);
$seen = 'Not Viewed';



/*$rows = mysql_query("INSERT INTO `rjl`.`potential` (`firstName`, `lastName`, `email`, `gender`, `dateOfBirth`, `phone`, `hear`, `skills`, `id`)
VALUES ('" . $fname . "','" . $lname . "');") 
                or die(mysql_error());  */

$rows = mysql_query("INSERT INTO `rjldb`.`potentials` (`firstName`, `lastName`, `email`, `gender`, `dateOfBirth`, `phone`, `hear`, `skills`, `seen`) VALUES ('" . $fname . "','" . $lname . "', '" . $email . "', '" . $gender . "', '" . $dob . "','" . $phone . "', '" . $hear . "', '" . $skills . "', '" . $seen . "');") 
                or die(mysql_error()); 


	
	
			


 //  header( 'Location:http://rjlou.org/?page_id=653' ) ;
