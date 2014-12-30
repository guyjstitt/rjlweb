<?php

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
		$data = $this->Rail->find('all');
		$this->set('data',$data);
	}

	public function edit($componentId = null){
		$this->Rail->id = $componentId;

		if(!$this->Rail->exists()){
			throw new NotFoundException(__('Invalid Rail Component'));
		}
		if ($this->request->is('post') || $this->request->is('put')) {
			if ($this->Rail->save($this->request->data)) {
				$this->Session->setFlash(__('This component has been saved'));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('This component could not be saved. Please, try again.'));
			}
		} else {
			$this->request->data = $this->Rail->read(null, $componentId);
		}
	}
}

?>
