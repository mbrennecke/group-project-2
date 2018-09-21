

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
		"end": $("#end").val().trim()
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

  var email = $("#email").val().trim();
  var password = $("#providerPassword").val().trim();
  
  var providerLogin = {
    firstname: $("#firstname").val().trim(),
	  lastname: $("#lastname").val().trim(),
    email: email,
    password: password,
  }

	
	if (providerData.providerBusinessName == "") {
		providerData.providerBusinessName = providerData.repFirstName + " " + providerData.repLastName;
	}
	
	console.log(providerData);

	if (validateProvider(providerData)){
		$.ajax({
		  url: "/api/provider",
		  method: "POST",
		  data: providerData,
    });
    $.ajax({
      url: "/auth/register",
      method: "POST",
      data: providerLogin,
    }).then(function(data){
      var login = {
        email: email,
        password: password
      };
      $.post("/auth/login", login).done(function(data) {
        console.log(data);
        localStorage.setItem("token", data.token);
        console.log(localStorage.token);
        var provEmail = "/api/calendar/" + email;
        $("#newUser").empty();
        $.get(provEmail, function (data) {
               console.log(data);
        }).then(function(data) {
          var provUrl = "/provider/" + data.id;
          window.location.href = provUrl;
        })
      })
    })
    }
    
    
	
});


$(document).on("click", "#clientsubmit", function(event){
	
  event.preventDefault(); 
  

  var clientData = {
    clientFirstName: $("#clientfirstname").val().trim(),
    clientLastName: $("#clientlastname").val().trim(),
    clientEmail: $("#clientemail").val().trim(),
    clientPhone: $("#phone").val().trim(),
	  clientPassword: $("#password").val().trim()
  };
  
  var clientLogin = {
    firstname: $("#clientfirstname").val().trim(),
    lastname: $("#clientlastname").val().trim(),
    email: $("#clientemail").val().trim(),
    password: $("#password").val().trim()
  }

  var login = {
    email: $("#clientemail").val().trim(),
    password: $("#password").val().trim()
  }
	
	  if (validateClient(clientData)){
		$.ajax({
		  url: "/api/client",
		  method: "POST",
		  data: clientData,
    });
    $.ajax({
      url: "/auth/register",
      method: "POST",
      data: clientLogin,
    }).done(function() {
      $.ajax({
        url: "/auth/login",
        method: "POST",
        data: login,
      })
    })
    
    }
    
    $("#newUser").empty();
    // $("#wholeLogin").off().on("click", function () {
      $.get("/api/providers", function (data) {
        providers = data;
      }).then(function () {
        console.log($("#wholeLogin"));
          var dropdown = '<div class="dropdown d-flex justify-content-center"><button class="btn btn-secondary dropdown-toggle btn-lg" type="button" id="providerid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Please select your Company</button><div class="dropdown-menu" aria-labelledby="providerid">';
          for (var i = 0; i < providers.length; i++) {
            var prov = '<a class="dropdown-item" href="/provider/' + providers[i].id + '" data-val="' + providers[i].id + '">' + providers[i].providerBusinessName + '</a>';
            console.log(dropdown, prov);
            dropdown = dropdown + prov;
          }
          $(".wholeLogin").html(dropdown + '</div></div>');
      // });
    
    });

});
	
function validateProvider(newObj) {
	var failed = 0;
  var w = newObj.repFirstName;
  if (w == "") {
	  $("#firstname").css("border-color", "red");
	  failed += 1;
  } else {
	  $("#firstname").css("border-color", "");
  }
  var x = newObj.repLastName;;
  if (x == "") {
	   $("#lastname").css("border-color", "red");
	  failed += 1;
  } else {
	  $("#lastname").css("border-color", "");
  }
  var y = newObj.providerEmail;
  if (y == "" || !validateEmail (y)) {
	   $("#email").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#email").css("border-color", "");
  }
  var z = newObj.providerPhone;
  if (z == "") {
	   $("#phone").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#phone").css("border-color", "");
  }
  var a = newObj.providerAddress;;
  if (a == "") {
	   $("#address1").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#address1").css("border-color", "");
  }
  var a = newObj.providerCity;;
  if (a == "") {
	   $("#city").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#city").css("border-color", "");
  }
  var a = newObj.providerState;;
  if (a == "") {
	   $("#state").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#state").css("border-color", "");
  }
  var a = newObj.providerZip;;
  if (a == "") {
	   $("#zip").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#zip").css("border-color", "");
  }
  if (failed == 0) return true;
}

function validateClient(newObj) {
	var failed = 0;

  var w = newObj.clientFirstName;
  if (w == "") {
	  $("#clientfirstname").css("border-color", "red");
	  failed += 1;
  } else {
	  $("#clientfirstname").css("border-color", "");
  }
  var x = newObj.clientLastName;;
  if (x == "") {
	   $("#clientlastname").css("border-color", "red");
	  failed += 1;
  } else {
	  $("#clientlastname").css("border-color", "");
  }
  var y = newObj.clientEmail;
  if (y == "" || !validateEmail (y)) {
	   $("#clientemail").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#clientemail").css("border-color", "");
  }
  var z = newObj.clientPhone;
  if (z == "") {
	   $("#phone").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#phone").css("border-color", "");
  }
  var a = newObj.clientPassword;;
  if (a == "") {
	   $("#password").css("border-color", "red");
	  failed += 1;
  }else {
	  $("#password").css("border-color", "");
  }
  if (failed == 0) return true;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$("#saveAppt").on("click", function () {
  var title = $("#apptText").val();
  var start = $(this).attr("start");
  var end = moment(start).add($("#duration").val(), "minutes");
  end = moment(end).toISOString(true);
  $.ajax({
    url: "/api/client/" + localStorage.getItem("email"),
    method: "GET",
  }).then(function(data) {
    var event = '{"title": "' + title + '", "allDay": "false", "start": "' + start + '", "end": "' + end + '", "overlap": "false", "color": "blue", "textColor": "white"}';
    var providerId = $("#providerid").text();
    var clientId = data.id;
    var newEvent = {
      event: event,
      clientId: clientId,
      providerId: providerId
    }
    $.ajax({
      url: "/api/events",
      method: "POST",
      data: newEvent,
    });
    $("#newEvent").modal("hide");
    $("#calendar").fullCalendar('renderEvent', JSON.parse(newEvent.event));
    $("#apptText").val("");

  });

})
  
$("#providerlogin").on("click", function(event){
	event.preventDefault();
	if ($("#providerlogin").hasClass("inactive")){
		$("#providerlogin").removeClass("inactive");
		$("#clientlogin").addClass("inactive");
		$("#emailLogin").text("Provider Email");
		$("#newUser").empty();
		$("#anchor").html('<div id="newProvider"><a href="#">New provider click here&nbsp;<i class="fa fa-list-alt" aria-hidden="true"></i></a></div>');
    $("#rendButton").empty();
    $("#rendButton").html('<button type="button" class="btn btn-secondary" id="loginProvider">Log in</button>');
  }
})

$("#clientlogin").on("click", function(event){
	event.preventDefault();
	if ($("#clientlogin").hasClass("inactive")){
		$("#clientlogin").removeClass("inactive");
		$("#providerlogin").addClass("inactive");
		$("#emailLogin").text("Client Email");
		$("#newUser").empty();
		$("#anchor").html('<div id="newClient"><a href="#">New client click here&nbsp;<i class="fa fa-list-alt" aria-hidden="true"></i></a></div>');
    $("#rendButton").empty();
    $("#rendButton").html('<button type="button" class="btn btn-secondary" id="loginClient">Log in</button>');
  }
})

$("#loginClient").on("click", function (event) {
  event.preventDefault();
  var email = $("#inputEmail1").val().trim();
  localStorage.setItem("email", email);
  var password = $("#exampleInputPassword1").val().trim();
  var login = {
    email: email,
    password: password
  };
  $.ajax({
    method: "POST",
    url: "/auth/login",
    data: login,
    success: function (data) {
      localStorage.setItem("token", data.token);
      console.log(localStorage.token);
      $("#newUser").empty();
      $.ajax({
        type: "GET",
        beforeSend: function (request) {
          request.setRequestHeader("x-access-token", localStorage.token);
        },
        url: "/api/providers",
        success: function (data) {
          providers = data;
        }
      }).then(function () {
        console.log($("#wholeLogin"));
        var dropdown = '<div class="dropdown d-flex justify-content-center"><button class="btn btn-secondary dropdown-toggle btn-lg" type="button" id="providerid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Please select your Company</button><div class="dropdown-menu" aria-labelledby="providerid">';
        for (var i = 0; i < providers.length; i++) {
          var prov = '<a class="dropdown-item" href="/provider/' + providers[i].id + '" data-val="' + providers[i].id + '">' + providers[i].providerBusinessName + '</a>';
          console.log(dropdown, prov);
          dropdown = dropdown + prov;
        }
        $(".wholeLogin").html(dropdown + '</div></div>');
      });
    },
    complete: function (data, xhr) {
      console.log(data, "xhr = " + xhr);
      if (xhr === "error") {
        $("#loginProblem").modal("show");
        $("#errorText").text("Wrong username or password.");
      }
    },
    
  })
})

$(document).on("click", "#loginProvider", function (event) {
  event.preventDefault();
  var email = $("#inputEmail1").val().trim();
  var password = $("#exampleInputPassword1").val().trim();
  var login = {
    email: email,
    password: password
  };
  $.ajax({
    method: "POST",
    url: "/auth/login",
    data: login,
    success: function (data) {
      localStorage.setItem("token", data.token);
      $("#newUser").empty();
      var provEmail = "/api/calendar/" + email;
      $.get(provEmail, function (data) {
      }).then(function (data) {
        var provUrl = "/provider/" + data.id;
        window.location.href = provUrl;
      })
    },
    complete: function (data, xhr) {
      console.log(data, "xhr = " + xhr);
      if (xhr === "error") {
        $("#loginProblem").modal("show");
        $("#errorText").text("Wrong username or password.");
      }
    },
  })
})

$("#logout").on("click", function(event) {
  event.preventDefault();
  $.ajax({
    type: "GET",
    url: "/auth/logout",
  }).then(function() {
    localStorage.clear();
    window.location.href = "/";
  })
})


