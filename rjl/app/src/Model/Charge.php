<?php
namespace rjl\app\Model;

class Charge extends AppModel {
 
			public $hasAndBelongsToMany = array(
		'RjCase'
    );
 
}