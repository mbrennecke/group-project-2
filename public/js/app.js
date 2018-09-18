$(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'month,agendaWeek,agendaDay, custom1',
      center: 'title',
      right: 'custom2 prevYear,prev,next,nextYear'
    },
    footer: {
      left: 'custom1,custom2',
      center: '',
      right: 'prev,next'
    },
    customButtons: {
      custom1: {
        text: 'custom 1',
        click: function() {
          alert('clicked custom button 1!');
        }
      },
      custom2: {
        text: 'custom 2',
        click: function() {
          alert('clicked custom button 2!');
        }
      }
    }
  });
  $('#calendar').fullCalendar('renderEvents', [
    {
      title: 'dynamic event one',
      allDay: false,
      start: '20180917T120000Z',
      end: '20180917T130000Z',
      overlap: false,
      color: 'red',
      textColor: 'white'
    },
    {
      title: 'dynamic event two',
      allDay: false,
      start: '20180916T120000Z',
      end: '20180916T130000Z',
      overlap: false,
      color: 'green',
      textColor: 'white'
    },{
      title: 'dynamic event three',
      allDay: false,
      start: '20180918T120000Z',
      end: '20180918T130000Z',
      overlap: false,
      color: 'blue',
      textColor: 'white'
    },{
      title: 'dynamic event four',
      allDay: false,
      start: '20180917T100000Z',
      end: '20180917T110000Z',
      overlap: false,
      color: 'red',
      textColor: 'white'
    }
  ]);

});


$(document).on("click", "#newProviderForm", function(event){
	event.preventDefault();
	var firstname = $("#firstname").val().trim();
	var lastname = $("#lastname").val().trim();
	var email = $("#email").val().trim();
	var phone = $("#phone").val().trim();
	phone = phone.replace(/[^\d]/g, ''); 
	var address = $("#address1").val().trim();
	address += " " + $("#address2").val().trim();
	var city = $("#city").val().trim();
	var state = $("#state").val().trim();
	var zip = $("#zip").val().trim();
	var dow = [];
	for (var i=1;i<8;i++){
		var checkbox = "#" + "checkbox" + i;
		if($(checkbox).is(':checked')){
		var day = $(checkbox).val();
		day = parseInt(day.slice(-1));
		dow.push(day);
		}
	}
	var starttime = $("#start").val().trim();
	var endtime = $("#start").val().trim();
	
	var newObj = {
		firstname: firstname,
		lastname: lastname,
		email: email,
		phone: phone,
		address: address,
		city: city,
		state: state,
		zip: zip,
		dow: dow,
		start: starttime,
		end: endtime
	}
	
	console.log(newObj);
	
});