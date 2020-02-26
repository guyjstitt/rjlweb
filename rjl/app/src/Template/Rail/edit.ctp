<legend>Edit Component</legend>
<div class="reasons form">
	<?php echo $this->Form->create('Rail',array('id'=>'railForm')); ?>
	<div>
		<div class="row required">
			<div class="col-sm-3"><?php echo $this->Form->input('header',array('class'=>'required')); ?></div>
		</div>
		<div class="row">
			<div class="col-sm-3"><?php echo $this->Form->input('subHeaderOne',array('class'=>'required')); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('linkOne',array('class'=>'required','label'=>'Content One')); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('hrefOne',array('class'=>'required', 'label'=>'Target One')); ?></div>
		</div>
		<div class="row">
			<div class="col-sm-3"><?php echo $this->Form->input('subHeaderTwo'); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('linkTwo', array('label' => 'Content Two')); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('hrefTwo', array('label' => 'Target Two')); ?></div>
		</div>
		<div class="row">
			<div class="col-sm-3"><?php echo $this->Form->input('subHeaderThree'); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('linkThree', array('label' => 'Content Three')); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('hrefThree', array('label' => 'Target Three')); ?></div>
		</div>
		<div class="row">
			<div class="col-sm-3"><?php echo $this->Form->input('subHeaderFour'); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('linkFour', array('label' => 'Content Four')); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('hrefFour', array('label' => 'Target Four')); ?></div>
		</div>
		<div class="row">
			<div class="col-sm-3"><?php echo $this->Form->input('subHeaderFive'); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('linkFive', array('label' => 'Content Five')); ?></div>
			<div class="col-sm-3"><?php echo $this->Form->input('hrefFive', array('label' => 'Target Five')); ?></div>
		</div>
	</div>
	<?php echo $this->Form->end('Edit'); ?>
</div>
<div class="navactions">
    <ul>
        <li><?php echo $this->Html->link('List Components', array('action' => 'index'));?></li>
    </ul>
</div>