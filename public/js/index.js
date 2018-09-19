$("#new-client").on("click", function(){
	$("#client-ui").html('<form><div class="row"><div class="col-sm-3">' +
	'<div class="form-group">' +
		'<label for="clientfirstname">First name</label>' +
		'<input type="text" class="form-control" id="clientfirstname" placeholder="">' +
	 '</div></div>' +
	  '<div class="col-sm-3">' +
	  '<div class="form-group">' +
		'<label for="clientlastname">Last name</label>' +
		'<input type="text" class="form-control" id="clientlastname" placeholder="">' +
	  '</div></div></div>' +
	  '<div class="row">' +
	'<div class="col-sm-3">' +
	  '<div class="form-group">' +
		'<label for="clientemail">Email address</label>' +
		'<input type="email" class="form-control" id="clientemail" aria-describedby="emailHelp" placeholder="">' +
	  '</div></div><div class="col-sm-3">' +
	 '<div class="form-group">' +
			'<label for="phone">Phone</label>' +
			'<input type="tel" class="form-control" id="phone"  placeholder="(555) 555-5555">' +
		  '</div></div></div>' +
	  '<button type="submit" class="btn btn-secondary" id="clientsubmit">Submit</button>' +
	'</form>');
});

$("#existing-client").off().on("click", function () {
	console.log("enter existing client");
	$.get("/api/providers", function (data) {
		providers = data;
	}).then(function () {
		console.log($("#client-ui"));
			var dropdown = '<div class="dropdown d-flex justify-content-center"><button class="btn btn-secondary dropdown-toggle btn-lg" type="button" id="providerid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Please select your Provider</button><div class="dropdown-menu" aria-labelledby="providerid">';
			for (var i = 0; i < providers.length; i++) {
				var prov = '<a class="dropdown-item" href="/provider/' + providers[i].id + '" data-val="' + providers[i].id + '">' + providers[i].providerBusinessName + '</a>';
				console.log(dropdown, prov);
				dropdown = dropdown + prov;
			}
			$("#client-ui").html(dropdown + '</div></div>');
	});

});

$("#new-provider").on("click", function() {'<form>' +
		$("#provider-ui").html('<div class="row">' +
			'<div class="col">' +
				'<div class="form-group">' +
					'<label for="business">Business</label>' +
					'<input type="text" class="form-control" id="business"  placeholder="">' +
				'</div></div><div class="col"></div></div>' +
		  '<div class="row">' +
			'<div class="col">' +
			'<div class="form-group">' +
			'<label for="firstname">First Name</label>' +
			'<input type="text" class="form-control" id="firstname"  placeholder="">' +
		  '</div></div>' +
			'<div class="col">' +
			'<div class="form-group">' +
			'<label for="lastname">Last Name</label>' +
			'<input type="text" class="form-control" id="lastname"  placeholder="">' +
		  '</div></div><div class="col"></div><div class="col"></div></div>' +
		  '<div class="row">' +
			'<div class="col">' +
				 '<div class="form-group">' +
			'<label for="email">Email address</label>' +
			'<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="">' +
		  '</div></div>' +
		  '<div class="col"><div class="form-group">' +
			'<label for="phone">Phone</label>' +
			'<input type="tel" class="form-control" id="phone"  placeholder="(555) 555-5555">' +
		  '</div></div>' +
		 '<div class="col"></div><div class="col"></div></div>' +
		  '<div class="row">' +
			'<div class="col">' +
				'<div class="form-group">' +
					'<label for="address1">Address</label>' +
					'<input type="text" class="form-control" id="address1"  placeholder="address line 1">' +
				 '</div></div><div class="col"></div></div>' +
		  '<div class="row">' +
			'<div class="col">' +
				'<div class="form-group">' +
				'<label for="address2">Address</label>' +
				'<input type="text" class="form-control" id="address2"  placeholder="address line 2">' +
			'</div></div><div class="col"></div></div>' +
		'<div class="row">' +
			'<div class="col-sm-6">' +
				'<div class="form-group">' +
				'<label for="city">City</label>' +
				'<input type="text" class="form-control" id="city"  placeholder="">' +
			  '</div></div><div class="col-sm-6"></div></div>' +
		'<div class="row">' +
			'<div class="col-sm-3">' +
				'<div class="form-group">' +
				'<label for="state">State</label>' +
				'<input type="text" class="form-control" id="state"  placeholder="">' +
				'</div></div>' +
				'<div class="col-sm-3">' +
				'<div class="form-group">' +
			'<label for="zip">Zip</label>' +
			'<input type="text" class="form-control" id="zip"  placeholder="">' +
		  '</div></div><div class="col-sm-6"></div></div>' +
		  '<p>Availability:</p>' +
			'<div class="form-check form-check-inline">' +
			  '<input class="form-check-input" type="checkbox" id="checkbox1" value="option0">' +
			 '<label class="form-check-label" for="checkbox1">Sunday</label></div>' +
			'<div class="form-check form-check-inline">' +
			 '<input class="form-check-input" type="checkbox" id="checkbox2" value="option1">' +
			  '<label class="form-check-label" for="checkbox2">Monday</label></div>' +
			'<div class="form-check form-check-inline">' +
			  '<input class="form-check-input" type="checkbox" id="checkbox3" value="option2" >' +
			  '<label class="form-check-label" for="checkbox3">Tuesday</label></div>' +
			'<div class="form-check form-check-inline">' +
			  '<input class="form-check-input" type="checkbox" id="checkbox4" value="option3">' +
			  '<label class="form-check-label" for="checkbox4">Wednesday</label></div>' +
			'<div class="form-check form-check-inline">' +
			  '<input class="form-check-input" type="checkbox" id="checkbox5" value="option4">' +
			  '<label class="form-check-label" for="checkbox5">Thursday</label></div>' +
			'<div class="form-check form-check-inline">' +
			  '<input class="form-check-input" type="checkbox" id="checkbox6" value="option5" >' +
			  '<label class="form-check-label" for="checkbox6">Friday</label></div>' +
			'<div class="form-check form-check-inline">' +
			  '<input class="form-check-input" type="checkbox" id="checkbox7" value="option6" >' +
			  '<label class="form-check-label" for="checkbox7">Saturday</label></div>' +
			'<p></p>' +
			'<div class="row">' +
			'<div class="col">' +
				'<div class="form-group">' +
			'<label for="start">Start Time</label>' +
			'<input type="text" class="form-control" id="start"  placeholder="08:00">' +
		  '</div></div>' +
			'<div class="col">' +
			'<div class="form-group">' +
			'<label for="end">End Time</label>' +
			'<input type="text" class="form-control" id="end"  placeholder="17:00">' +
		  '</div></div><div class="col"></div><div class="col"></div></div>'+		  
	  '<button type="submit" class="btn btn-secondary" id="newProviderForm">Submit</button></form>');
});

$("#existing-provider").off().on("click", function () {
	$.get("/api/providers", function (data) {
		providers = data;
	}).then(function () {
		console.log($("#provider-ui"));
			var dropdown = '<div class="dropdown d-flex justify-content-center"><button class="btn btn-secondary dropdown-toggle btn-lg" type="button" id="providerid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Please select your Company</button><div class="dropdown-menu" aria-labelledby="providerid">';
			for (var i = 0; i < providers.length; i++) {
				var prov = '<a class="dropdown-item" href="/provider/' + providers[i].id + '" data-val="' + providers[i].id + '">' + providers[i].providerBusinessName + '</a>';
				console.log(dropdown, prov);
				dropdown = dropdown + prov;
			}
			$("#provider-ui").html(dropdown + '</div></div>');
	});

});