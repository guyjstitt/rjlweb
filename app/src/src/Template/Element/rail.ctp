<div ng-cloak class ="col-md-4 rail" ng-controller="RailController as rail">
	<div ng-repeat="item in rail.items">
		<h3 ngCloak class='headerText'>{{item.Rail.header}}</h3>
		<ul>
		    <li ng-if="item.Rail.subHeaderOne != ''" class="list"><span class="prefix">{{item.Rail.subHeaderOne}}</span><a target="_blank" href="{{item.Rail.hrefOne}}">{{item.Rail.linkOne}}</a></li>
			<li ng-if="item.Rail.subHeaderTwo != ''" class="list"><span class="prefix">{{item.Rail.subHeaderTwo}}</span><a target="_blank" href="{{item.Rail.hrefTwo}}">{{item.Rail.linkTwo}}</a></li>
			<li ng-if="item.Rail.subHeaderThree != ''" class="list"><span class="prefix">{{item.Rail.subHeaderThree}}</span><a target="_blank" href="{{item.Rail.hrefThree}}">{{item.Rail.linkThree}}</a></li>
			<li ng-if="item.Rail.subHeaderFour != ''" class="list"><span class="prefix">{{item.Rail.subHeaderFour}}</span><a target="_blank" href="{{item.Rail.hrefFour}}">{{item.Rail.linkFour}}</a></li>
			<li ng-if="item.Rail.subHeaderFive != ''" class="list"><span class="prefix">{{item.Rail.subHeaderFive}}</span><a target="_blank" href="{{item.Rail.hrefFive}}">{{item.Rail.linkFive}}</a></li>
		</ul>
	</div>
	<?php if($this->params['controller'] !== 'pages'){echo '<a target="_blank" href="http://www.razoo.com/story/Restorative-Justice-Louisville"><button class="donateButton"><span >Donate</span></button></a>';}?>
</div>
