$("#new-client").on("click", function(){
  '<form action="/action_page.php">'+
        '<div class="form-group">'+
            '<label for="fname">First Name</label>'+
            '<input type="text" id="fname" name="firstname" placeholder="Client name..">'+
        '</div>'+
        '<div class="form-group">'+
            '<label for="lname">Last Name</label>'+
            '<input type="text" id="lname" name="lastname" placeholder="Client last name..">'+
        '</div>'+
        '<div class="form-group">'+
            '<label for="email">Email address:</label>'+
            '<input type="email" id="email">'+
        '</div>'+
        '<div class="form-group">'+
                '<label for="phone_num">Client Phone No:</label>'+
                '<input type="tel" id="phone_num" name="phone_num" required/>'+
        '</div>'+

        '<button type="submit" class="btn btn-default">Submit</button>'+
    '</form>'+
});

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