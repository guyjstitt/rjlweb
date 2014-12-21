
//needed because of conflict with dynamic fields
var j = jQuery.noConflict();

/*	
	events listened on the entire RjCase form to dynamically
	add values to localStorage
*/

j(document).ready(function() {

	j('#RjCaseAddForm').on('submit', function() {
		event.preventDefault();
		if(j(this).valid()) {

			j.ajax({
				type: "POST",
				url: "/rjl/RjCases/ajaxSave",
				data: j(this).serialize(),
				dataType: 'json',
				success: function(data) {
					validateData(data);
					//location.reload();
				}
			});

			function validateData(data) {
				console.log(data['success']);
				if(data['success']==true) {
					localStorage.clear();
					location.reload();
				} else {
					alert('There was a problem processing the information, please report this to the Administrator')
				}
			}
		}
	});

	j(document).bind('keyup mouseup mousedown focusout focuson input blur change paste', function() {
		console.log(event);
		//get the case information values

		var caseID = j('#caseID').val();
		var caseStatus = j('#RjCaseCaseStatus').val();
		var courtDate = j('#RjCaseCourtDate').val();
		var dateOfCharge = j('#RjCaseDateOfCharge').val();
		var dateOfReferral = j('#RjCaseDateOfReferral').val()
		var charges = j('#ChargeCharge').val();
		var chargesJson = JSON.stringify(charges);
		var caseManager = j('#RjCaseUserId').val();
		var facilitator = j('#UserUser').val();
		var facilitatorJson = JSON.stringify(facilitator);
		var caseDescription = j('#RjCaseCaseDescription').val();

		//set case information to local storage as JSON
		var caseObject = JSON.stringify( {"caseID": caseID,"caseStatus": caseStatus,"courtDate": courtDate,"dateOfCharge":dateOfCharge, "dateOfReferral":dateOfReferral,"charges":charges,"caseManager":caseManager,"facilitator":facilitator,"caseDescription":caseDescription} );
		localStorage.setItem('caseObject', caseObject);

		//get the context of the element that triggered the event
		//pass to setOffenderInfo method to set data to local storage
		var id = event.target.id;
		var context = id.slice(-1);
	
		//console.log(id);

		//get the class name when the user slects a result
		var chosenSingle = event.target.parentElement.className;

		if(chosenSingle.search("chosen-results") !== -1) {
			//hack to get the id whent the user selects a result
			var id = event.target.parentElement.parentElement.parentElement.previousSibling.id;
			var context = id.slice(-1);
		}

		//convert to int
		context = parseInt(context);
		//console.log(context);
		setOffenderInfo(context); 
		setVictimInfo(context);
	});

	caseObject = JSON.parse(localStorage.getItem('caseObject'));
	
	j('#caseID').val(caseObject.caseID);
	j('#RjCaseCaseStatus').val(caseObject.caseStatus);
	j('#RjCaseCourtDate').val(caseObject.courtDate);
	j('#RjCaseDateOfCharge').val(caseObject.dateOfCharge);
	j('#RjCaseDateOfReferral').val(caseObject.dateOfReferral);
	j('#ChargeCharge').val(caseObject.charges);
	j('#RjCaseUserId').val(caseObject.caseManager);
	j('#UserUser').val(caseObject.facilitator);
	j('#RjCaseCaseDescription').val(caseObject.caseDescription);

	//set counter equal to to value return by numOffenderId()
	maxOffenders = maxOffenderId();
	maxVictims = maxVictimId();
	//console.log("max victims" + maxVictims);
	
	//loops through items in local storage to see how many offenderID's exist
	function maxOffenderId() {
		var counter = 0;
		for(var item in localStorage) {
			if(item.substring(0,14) == "offenderObject") {
				///console.log(item);
				++counter
			}
		}
		//console.log('counter =' + counter);
		return counter;
	}

	function maxVictimId() {
		var counter = 0;
		for(var item in localStorage) {
			if(item.substring(0,12) == "victimObject") {
				//console.log(item);
				++counter
			}
		}
		//console.log('counter =' + counter);
		return counter;
	}

	//create all the elements before trying to add the content
	for(i = 1; i <= maxOffenders; i++) { 
		j('#ofAdd button').trigger('onclick');
	}

	//use counter to add the correct amount of offenders back to the page
	for(i = 1; i <= maxOffenders; i++) {
		var offenderObject = JSON.parse(localStorage.getItem('offenderObject'+i));
		if(localStorage.getItem('offenderObject' + i)) {
			//console.log('setting items for ' + offenderObject);
			j('#offenderID'+ i).val(offenderObject.offenderID);
			j('#offenderFirstName'+ i).val(offenderObject.offenderFirstName);
			j('#offenderLastName'+ i).val(offenderObject.offenderLastName);
			j('#offenderSSN'+i).val(offenderObject.offenderSSN);
			j('#offenderDateOfBirth'+i).val(offenderObject.offenderDateOfBirth);
			j('#offenderRace'+i).val(offenderObject.offenderRace);
			j('#offenderGender'+i).val(offenderObject.offenderGender);
			j('#offenderStreetAddress'+i).val(offenderObject.offenderStreetAddress);
			j('#offenderCity'+i).val(offenderObject.offenderCity);
			j('#offenderState'+i).val(offenderObject.offenderState);
			j('#offenderZipCode'+i).val(offenderObject.offenderZipCode);
			j('#offenderguardianOneFirstName'+i).val(offenderObject.offenderGuardianOneFirstName);
			j('#offenderguardianOneLastName'+i).val(offenderObject.offenderGuardianOneLastName);
			j('#offenderGuardianOneRelation'+i).val(offenderObject.offenderGuardianOneRelation);
			j('#guardianTwoFirstName'+i).val(offenderObject.offenderGuardianTwoFirstName);
			j('#guardianTwoLastName'+i).val(offenderObject.offenderGuardianTwoLastName);
			j('#offenderGuardianTwoRelation'+i).val(offenderObject.offenderGuardianTwoRelation);
			j('#offenderPhoneOne'+i).val(offenderObject.offenderPhoneOne);
			j('#offenderPhoneTwo'+i).val(offenderObject.offenderPhoneTwo);
			j('#offenderEmail'+i).val(offenderObject.offenderEmail);
			j('#offenderPhoneOneType'+i).val(offenderObject.offenderPhoneOneType);
			j('#offenderPhoneTwoType'+i).val(offenderObject.offenderPhoneTwoType);
			j('#offenderCommHours'+i).val(offenderObject.offenderCommHours);
		}
	}

	//use counter to add the correct amount of offenders back to the page
	for(i = 1; i <= maxVictims; i++) {
		var victimObject = JSON.parse(localStorage.getItem('victimObject'+i));
		if(localStorage.getItem('victimObject' + i)) {
			//console.log('setting items for ' + victimID);
			addPerson();
			j('#victimID'+ i).val(victimObject.victimID);
			j('#victimFirstName'+ i).val(victimObject.victimFirstName);
			j('#victimLastName'+ i).val(victimObject.victimLastName);
			j('#victimSSN'+i).val(victimObject.victimSSN);
			j('#victimAge'+i).val(victimObject.victimAge);
			j('#victimDateOfBirth'+i).val(victimObject.victimDateOfBirth);
			j('#victimRace'+i).val(victimObject.victimRace);
			j('#victimGender'+i).val(victimObject.victimGender);
			j('#victimStreetAddress'+i).val(victimObject.victimStreetAddress);
			j('#victimCity'+i).val(victimObject.victimCity);
			j('#victimState'+i).val(victimObject.victimState);
			j('#victimZipCode'+i).val(victimObject.victimZipCode);
			j('#victimPhoneOne'+i).val(victimObject.victimPhoneOne);
			j('#victimPhoneTwo'+i).val(victimObject.victimPhoneTwo);
			j('#victimEmail'+i).val(victimObject.victimEmail);
			j('#victimPhoneOneType'+i).val(victimObject.victimPhoneOneType);
			j('#victimPhoneTwoType'+i).val(victimObject.victimPhoneTwoType);
		}
	}

	/*
		function: called to get the value and set to local storage
		param: takes the context or index value of the offender
	*/
	function setOffenderInfo(context) {
		var i = context;
		console.log(context);
		console.log(Number.isInteger(context));
		if(Number.isInteger(context)) {
			var offenderID = j("#offenderID" + i).val();
			var offenderFirstName = j('#offenderFirstName' + i).val();
			var offenderLastName = j('#offenderLastName' + i).val();
			var offenderSSN = j('#offenderSSN' + i).val();
			var offenderDateOfBirth = j('#offenderDateOfBirth'+ i).val();
			var offenderRace = j('#offenderRace' + i).val();
			var offenderGender = j('#offenderGender'+ i).val();
			var offenderStreetAddress = j('#offenderStreetAddress' + i).val();
			var offenderCity = j('#offenderCity'+ i).val();
			var offenderState = j('#offenderState' + i).val();
			var offenderZipCode = j('#offenderZipCode'+ i).val();
			var offenderGuardianOneFirstName = j('#offenderguardianOneFirstName' + i).val();
			var offenderGuardianOneLastName = j('#offenderguardianOneLastName' + i).val(); 
			var offenderGuardianOneRelation = j('#offenderGuardianOneRelation'+ i).val();
			var offenderGuardianTwoFirstName = j('#guardianTwoFirstName' + i).val();
			var offenderGuardianTwoLastName = j('#guardianTwoLastName' + i).val();
			var offenderGuardianTwoRelation = j('#offenderGuardianTwoRelation' + i).val();
			var offenderPhoneOne = j('#offenderPhoneOne' + i).val();
			var offenderPhoneTwo = j('#offenderPhoneTwo' + i).val();
			var offenderEmail = j('#offenderEmail' + i).val();
			var offenderPhoneOneType = j('#offenderPhoneOneType'+ i).val();
			var offenderPhoneTwoType = j('#offenderPhoneTwoType' + i).val();
			var offenderCommHours = j('#offenderCommHours' + i).val();

			//object to offender information
			var OffenderObject = JSON.stringify({'offenderID':offenderID, "offenderFirstName": offenderFirstName, "offenderLastName": offenderLastName, 
			"offenderSSN":offenderSSN, "offenderDateOfBirth":offenderDateOfBirth, "offenderRace":offenderRace, "offenderGender":offenderGender, "offenderStreetAddress":offenderStreetAddress,
			"offenderCity":offenderCity, "offenderState":offenderState, "offenderZipCode":offenderZipCode, "offenderGuardianOneFirstName": offenderGuardianOneFirstName,
			"offenderGuardianOneLastName": offenderGuardianOneLastName, "offenderGuardianOneRelation":offenderGuardianOneRelation,
			"offenderGuardianTwoFirstName": offenderGuardianTwoFirstName, "offenderGuardianTwoLastName":offenderGuardianTwoLastName,
			"offenderGuardianTwoRelation":offenderGuardianTwoRelation,"offenderPhoneOne":offenderPhoneOne, "offenderPhoneOneType":offenderPhoneOneType,
			"offenderPhoneTwo":offenderPhoneTwo, "offenderPhoneTwoType":offenderPhoneTwoType, "offenderEmail":offenderEmail, "offenderCommHours":offenderCommHours});
			//set offender object to local storage
			localStorage.setItem('offenderObject'+i, OffenderObject);
		}

	}

	/*
		function: called to get the value and set to local storage
		param: takes the context or index value of the offender
	*/
	function setVictimInfo(context) {
		var i = context;
		var vicString = "#victimID" + i;
		var victimID = j(vicString).val();
		if(victimID !== undefined) {
			var victimFirstName = j('#victimFirstName' + i).val();
			var victimLastName = j('#victimLastName' + i).val();
			var victimSSN = j('#victimSSN' + i).val();
			var victimAge = j('#victimAge' + i).val();
			var victimDateOfBirth = j('#victimDateOfBirth'+ i).val();
			var victimRace = j('#victimRace' + i).val();
			var victimGender = j('#victimGender'+ i).val();
			var victimStreetAddress = j('#victimStreetAddress' + i).val();
			var victimCity = j('#victimCity'+ i).val();
			var victimState = j('#victimState' + i).val();
			var victimZipCode = j('#victimZipCode'+ i).val();
			var victimPhoneOne = j('#victimPhoneOne' + i).val();
			var victimPhoneTwo = j('#victimPhoneTwo' + i).val();
			var victimEmail = j('#victimEmail' + i).val();
			var victimPhoneOneType = j('#victimPhoneOneType'+ i).val();
			var victimPhoneTwoType = j('#victimPhoneTwoType' + i).val();

			//victim object
			var victimObject = JSON.stringify({"victimID":victimID,"victimFirstName":victimFirstName, "victimLastName": victimLastName,
			"victimSSN":victimSSN, "victimAge":victimAge, "victimDateOfBirth":victimDateOfBirth, "victimRace":victimRace, "victimGender":victimGender,
			"victimStreetAddress": victimStreetAddress, "victimCity":victimCity,"victimState":victimState,"victimZipCode":victimZipCode, "victimEmail":victimEmail,
			"victimPhoneOne":victimPhoneOne, "victimPhoneTwo":victimPhoneTwo, "victimPhoneOneType":victimPhoneOneType, "victimPhoneTwoType":victimPhoneTwoType});


			//set victim info to local storage
			localStorage.setItem('victimObject'+i,victimObject);
		}
	}	

	j('#trAdd button').on('click', function() {
		console.log('hey');
		addPerson();
	});
	

  	var lastRow=0;
	function addPerson() {
		lastRow++;
		$("#victimsTable tbody>tr:#victim0").clone(true).attr('id','victim'+lastRow).removeAttr('style').insertBefore("#victimsTable tbody>tr:#trAdd");
		j("#victim"+lastRow+" button.remove").attr('onclick','removePerson('+lastRow+')');
		j("#victim"+lastRow+" button.fnSearch").attr('onclick','SearchFN('+'victimFirstName'+lastRow+')');
		j("#victim"+lastRow+" button.lnSearch").attr('onclick','SearchLN('+'victimLastName'+lastRow+')');
		j("#victim"+lastRow+" button.ssnSearch").attr('onclick','SearchSSN('+'victimSSN'+lastRow+')');
		j("#victim"+lastRow+" input.vTxtID").attr('name','data[Victim]['+lastRow+'][victimId]').attr('id','victimID'+lastRow).addClass('required').attr('onfocusout','ValidateVictimID('+lastRow+')');
		j("#victim"+lastRow+" input.vFN").attr('name','data[Victim]['+lastRow+'][firstName]').attr('id','victimFirstName'+lastRow).addClass('required');
		j("#victim"+lastRow+" input.vLN").attr('name','data[Victim]['+lastRow+'][lastName]').attr('id','victimLastName'+lastRow).addClass('required');
		j("#victim"+lastRow+" input.vSSN").attr('name','data[Victim]['+lastRow+'][socialSecurityNumber]').attr('id','victimSSN'+lastRow);
		j("#victim"+lastRow+" input.age").attr('name','data[Victim]['+lastRow+'][age]').attr('id','victimAge'+lastRow);
		j("#victim"+lastRow+" input.victimdatepicker").attr('name','data[Victim]['+lastRow+'][dateOfBirth]').attr('id','victimDateOfBirth'+lastRow);
		j("#victim"+lastRow+" select.r").attr('name','data[Victim]['+lastRow+'][race]').attr('id','victimRace'+lastRow);
		j("#victim"+lastRow+" select.g").attr('name','data[Victim]['+lastRow+'][gender]').attr('id','victimGender'+lastRow);
		j("#victim"+lastRow+" input.vADDR").attr('name','data[Victim]['+lastRow+'][streetAddress]').attr('id','victimStreetAddress'+lastRow).addClass('required');
		j("#victim"+lastRow+" input.vCITY").attr('name','data[Victim]['+lastRow+'][city]').attr('id','victimCity'+lastRow).addClass('required');
		j("#victim"+lastRow+" select.vST").attr('name','data[Victim]['+lastRow+'][state]').attr('id','victimState'+lastRow).addClass('required');
		j("#victim"+lastRow+" input.vZIP").attr('name','data[Victim]['+lastRow+'][zipCode]').attr('id','victimZipCode'+lastRow).addClass('required');
		j("#victim"+lastRow+" input.vPh1").attr('name','data[Victim]['+lastRow+'][phoneOne]').attr('id','victimPhoneOne'+lastRow);
		j("#victim"+lastRow+" select.p1t").attr('name','data[Victim]['+lastRow+'][phoneOneType]').attr('id','victimPhoneOneType'+lastRow).addClass('required');
		j("#victim"+lastRow+" input.vPh2").attr('name','data[Victim]['+lastRow+'][phoneTwo]').attr('id','victimPhoneTwo'+lastRow);
		j("#victim"+lastRow+" select.p2t").attr('name','data[Victim]['+lastRow+'][phoneTwoType]').attr('id','victimPhoneTwoType'+lastRow);
		j("#victim"+lastRow+" input.vEML").attr('name','data[Victim]['+lastRow+'][email]').attr('id','victimEmail'+lastRow);
		j("#victim"+lastRow+" input.vID").attr('name','data[Victim]['+lastRow+'][id]').attr('id','Idvictim'+lastRow);
		
		AddVictimCalScript(lastRow);
		AddVictimChosenGenderScript(lastRow);
		AddVictimChosenRaceScript(lastRow);
		AddVictimChosenState(lastRow);
		AddVictimChosenPhoneOneTypeScript(lastRow);
		AddVictimChosenPhoneTwoTypeScript(lastRow);
		AddVictimValidation(lastRow);

	}
	
	function removePerson(x) {
		j("#victim"+x).remove();
	}
	

  	var lastORow=0;	

  	/*
  	j(document).ready( function() {
  		j('#ofAdd button').on('click', function() {
  			var data = j('#totalOffenders').data();
  			data.counter = data.counter + 1;
  			console.log(data.counter);
  		})
  	})*/
  
	
	function removeOffender(x) {
		j("#offender"+x).remove();
	}	
});
