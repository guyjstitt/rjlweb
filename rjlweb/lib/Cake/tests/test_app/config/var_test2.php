<?php
namespace rjlweb\lib\Cake\Test\test_app\config;

$config = array(
	'Read' => 'value2',
	'Deep' => array(
		'Second' => array(
			'SecondDeepest' => 'buried2'
		)
	),
	'TestAcl' => array(
		'classname' => 'Overwrite',
		'custom' => 'one'
	)
);
