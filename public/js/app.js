
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
	
	var providerData = {
	firstname: $("#firstname").val().trim(),
	lastname: $("#lastname").val().trim(),
	email: $("#email").val().trim(),
	phone: phone, 
	address: address,
	city: $("#city").val().trim(),
	state: $("#state").val().trim(),
	zip: $("#zip").val().trim(),
	dow: dow,
	starttime: $("#start").val().trim(),
	endtime: $("#start").val().trim()
	}
	
	console.log(providerData);
	
	$.ajax({
    url: "/api/provider",
    method: "POST",
    data: providerData,
  });
	
});


$("#clientsubmit").on("click", function (event) {
  event.preventDefault();

  var clientData = {
    firstname: $("#fname").val(),
    lastname: $("#lname").val(),
    email: $("#email").val(),
    phone: $("#phone_num").val(),
  };

  $.ajax({
    url: "/api/client",
    method: "POST",
    data: clientData,
  });

});