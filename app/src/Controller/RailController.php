<?php

namespace app\Controller;

App::uses('AppController', 'Controller');

/**
 * Rail controller
 *
 * Handle Rail data
 *
 * @package       app.Controller
 * @link http://book.cakephp.org/2.0/en/controllers/pages-controller.html
 */
class RailController extends AppController {

	public function index() {
		$this->layout = 'ajax'; 
		$this->render(false);

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
		connectDB();
		$data = $this->Rail->find('all');
		$open=$this->Rail->find('all', array('conditions'=>array('Rail.header'=>'Open')));
		echo json_encode($data);
		exit();
	}
}

?>
