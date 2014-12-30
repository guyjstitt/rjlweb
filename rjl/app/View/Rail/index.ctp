<link rel="stylesheet" href="/rjl/app/webroot/css/jquery.dataTables_themeroller.css" /> 
<link rel="stylesheet" href="/rjl/app/webroot/css/jquery-ui-1.10.4.custom.min.css" /> 
<link rel="stylesheet" href="/rjl/app/webroot/css/jquery-ui-1.10.4.custom.css" /> 

<div class="rail index">
    <h2>Rail Component</h2>
	<div class="table-responsive">
		<table id="rail" class="table">
			<thead>
			    <th>Header</th>
				<th>Actions</th> 
			</thead> 
			<tbody id="table">
				<?php foreach ($data as $item): ?>
				<tr>
					<td><?php echo $item['Rail']['header']; ?></td>
					<td class="actions">
						<?php echo $this->Html->link(__('Edit'), array('controller'=> 'Rail','action' => 'edit', $item['Rail']['id'])); ?>
					</td>
				</tr>
				<?php endforeach; ?>
			</tbody>
		</table>
	</div>
</div>
<div class="padding"></div>

<script>
$(document).ready( function () {
    $('#rail').dataTable({
	"bJQueryUI": true
	});
} );
</script>