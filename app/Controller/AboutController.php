<?php

App::uses('AppController', 'Controller');

/**
 * About controller
 *
 * Display the About page
 *
 * @package       app.Controller
 * @link http://book.cakephp.org/2.0/en/controllers/pages-controller.html
 */
class AboutController extends AppController {
/**
 * This controller does not use a model
 *
 * @var array
 */
	public $uses = array();

/**
 * Displays a view
 *
 * @param mixed What page to display
 * @return void
 * @throws NotFoundException When the view file could not be found
 *	or MissingViewException in debug mode.
 */
	public function index() {
		$url = "http://rjlou.org/About/index";
		$this->set('url', $url);
	}

}

?>