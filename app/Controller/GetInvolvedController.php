<?php

App::uses('AppController', 'Controller');

/**
 * GetInvolved controller
 *
 * Display the GetInvolved page
 *
 * @package       app.Controller
 * @link http://book.cakephp.org/2.0/en/controllers/pages-controller.html
 */
class GetInvolvedController extends AppController {
/**
 * This controller does not use a model
 *
 * @var array
 */
	public $uses = array();
	public $components = array('RequestHandler');

/**
 * Displays a view
 *
 * @param mixed What page to display
 * @return void
 * @throws NotFoundException When the view file could not be found
 *	or MissingViewException in debug mode.
 */
	public function index() {
		$this->layout=false;
		$this->autoRender =false;
		$this->view = 'index';
		$response = $this->render();

		$jsonResponse = array(
        	'template' => $response->body()
	    );

	    $response->body(json_encode($jsonResponse));
	}

	public function volunteer() {
		$this->layout=false;
		$this->autoRender =false;
		$this->view = 'volunteer';
		$response = $this->render();

		$jsonResponse = array(
        	'template' => $response->body()
	    );

	    $response->body(json_encode($jsonResponse));

		function connectDB() {
			/* 
			 CONNECT-DB.PHP
			 Allows PHP to connect to your database
			*/

			 // Database Variables (edit with your own server information)
			 // live db
			 $server = 'mysql.rjlou.org';
			 $user = 'rjlcms';
			 $pass = '#cmsRjsystem1';
			 $db = 'rjldb';
			 
			 
			 // $server = 'localhost';
			 // $user = 'root';
			 // $pass = 'linux1234';
			 // $db = 'rjldb';
			 
			 // Connect to Database
			 $connection = mysql_connect($server, $user, $pass) 
			 or die ("Could not connect to server ... \n" . mysql_error ());
			 mysql_select_db($db) 
			 or die ("Could not connect to database ... \n" . mysql_error ());
		}

		if($this->request->is('ajax') && $this->request->is('post')) {
			connectDB();

			$data = array();

			if(empty($_POST['inputFirstName'])) {
				$data['success'] = false;
			} else {
			
				$fname = ($_POST['inputFirstName']);
				$lname = ($_POST['inputLastName']);
				$email = ($_POST['inputEmail']);
				$gender = ($_POST['inputGender']);
				$dob = ($_POST['inputDateOfBirth']);
				$phone = ($_POST['inputPriPhone']);
				$hear = mysql_real_escape_string($_POST['inputHear']);
				$skills = mysql_real_escape_string($_POST['inputSkills']);
				$seen = 'Not Viewed';

				$rows = mysql_query("INSERT INTO `rjldb`.`potentials` (`firstName`, `lastName`, `email`, `gender`, `dateOfBirth`, `phone`, `hear`, `skills`, `seen`) VALUES ('" . $fname . "','" . $lname . "', '" . $email . "', '" . $gender . "', '" . $dob . "','" . $phone . "', '" . $hear . "', '" . $skills . "', '" . $seen . "');") 
				                or die(mysql_error());
				$data['success']=true;
			}	                
			echo json_encode($data);
			exit();
		}

	}

	public function volunteerSuccess() {
		$this->layout = null;
	}

	public function video() {
		$this->layout=false;
		$this->autoRender =false;
		$this->view = 'video';
		$response = $this->render();

		$jsonResponse = array(
        	'template' => $response->body()
	    );

	    $response->body(json_encode($jsonResponse));
	}

	public function events() {
		$this->layout=false;
		$this->autoRender =false;
		$this->view = 'events';
		$response = $this->render();

		$jsonResponse = array(
        	'template' => $response->body()
	    );

	    $response->body(json_encode($jsonResponse));
	}

	public function facilitator() {
		$this->layout=false;
		$this->autoRender =false;
		$this->view = 'facilitator';
		$response = $this->render();

		$jsonResponse = array(
        	'template' => $response->body()
	    );

	    $response->body(json_encode($jsonResponse));
	}
}

?>