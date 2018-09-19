

$(document).on("click", "#newProviderForm", function(event){
	event.preventDefault();
	
	var phone = $("#phone").val().trim();
	phone = phone.replace(/[^\d]/g, ''); 
	
	var address = $("#address1").val().trim();
	address += " " + $("#address2").val().trim();
	
	var dow = [];
	for (var i=1;i<8;i++){
		var checkbox = "#" + "checkbox" + i;
		if($(checkbox).is(':checked')){
		var day = $(checkbox).val();
		day = parseInt(day.slice(-1));
		dow.push(day);
		}
	}
	var dowString = '[' + dow + ']';
	
	var hours = {
		"dow": dowString,
		"start":  $("#start").val().trim(),
		"end": $("#start").val().trim()
	}
	
	var providerData = {
	providerBusinessName: $("#business").val().trim(),
	repFirstName: $("#firstname").val().trim(),
	repLastName: $("#lastname").val().trim(),
	providerEmail: $("#email").val().trim(),
	providerPhone: phone, 
	providerAddress: address,
	providerCity: $("#city").val().trim(),
	providerState: $("#state").val().trim(),
	providerZip: $("#zip").val().trim(),
	businessHours:JSON.stringify(hours)
	}
	
	console.log(providerData);

  if (validateForm()){
	$.ajax({
    url: "/api/provider",
    method: "POST",
    data: providerData,
  });
};
});


$(document).on("click", "#clientsubmit", function(event){
	
  event.preventDefault(); 
  

  var clientData = {
    clientFirstName: $("#clientfirstname").val().trim(),
    clientLastName: $("#clientlastname").val().trim(),
    clientEmail: $("#clientemail").val().trim(),
    clientPhone: $("#phone").val().trim(),
  };
	
	
	  if (validateForm()){
		$.ajax({
		  url: "/api/client",
		  method: "POST",
		  data: clientData,
		});
	  };

	});
	
	function validateForm() {
    var failed = 0;

    var p = $("#firstname").val().trim();
	  if (p == "") {
		  $("#firstname").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#firstname").css("border-color", "");
    }
    var q = $("#lastname").val().trim();
	  if (q == "") {
		  $("#lastname").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#lastname").css("border-color", "");
    }
    var r = $("#email").val().trim();
	  if (r == "") {
		  $("#email").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#email").css("border-color", "");
    }
    var s = $("#business").val().trim();
	  if (s == "") {
		  $("#business").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#business").css("border-color", "");
    }

    var t = $("#city").val();
	  if (t == "") {
		  $("#city").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#city").css("border-color", "");
    }

    var u = $("#state").val();
	  if (u == "") {
		  $("#state").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#state").css("border-color", "");
    }

    var v = $("#zip").val();
	  if (v == "") {
		  $("#zip").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#zip").css("border-color", "");
    }
    
    var w = $("#clientfirstname").val();
	  if (w == "") {
		  $("#clientfirstname").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#clientfirstname").css("border-color", "");
    }
    
	  var x = $("#clientlastname").val();
	  if (x == "") {
		   $("#clientlastname").css("border-color", "red");
		  failed += 1;
	  } else {
		  $("#clientlastname").css("border-color", "");
    }
    
	  var y = $("#clientemail").val();
	  if (y == "" || !validateEmail (y)) {
		   $("#clientemail").css("border-color", "red");
		  failed += 1;
	  }else {
		  $("#clientemail").css("border-color", "");
	  }
	  var z = $("#phone").val();
	  if (z == "") {
		   $("#phone").css("border-color", "red");
		  failed += 1;
	  }else {
		  $("#phone").css("border-color", "");
	  }
	  if (failed == 0) return true;
	}

	function validateEmail(email) {
	  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(String(email).toLowerCase());
	}
  
  

