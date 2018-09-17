$("#new-client").on("click", function(){});

$("#existing-client").on("click", function(){
	$("#client-ui").html('<div class="dropdown">' +
		  '<button class="btn btn-secondary dropdown-toggle btn-lg" type="button" id="providerid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
			'Please select your Provider' +
		  '</button>' +
		  '<div class="dropdown-menu" aria-labelledby="providerid">' +
			'<a class="dropdown-item" href="#" data-val="1">Touch Me</a>' +
			'<a class="dropdown-item" href="#" data-val="2">Hands On</a>' +
		  '</div></div>'
	);
});