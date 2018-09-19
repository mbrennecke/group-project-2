$(function () {

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
        click: function () {
          alert('clicked custom button 1!');
        }
      },
      custom2: {
        text: 'custom 2',
        click: function () {
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
    }, {
      title: 'dynamic event three',
      allDay: false,
      start: '20180918T120000Z',
      end: '20180918T130000Z',
      overlap: false,
      color: 'blue',
      textColor: 'white'
    }, {
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

$("#userSubmit").on("click", function (event) {
  event.preventDefault();

  var userData = {
    firstname: $("#fname").val(),
    lastname: $("#lname").val(),
    email: $("#email").val(),
    phone: $("#phone_num").val(),
  };

  console.table(userData);
 
  if (validateForm()){
    $.ajax({
      url: "/api/client",
      method: "POST",
      data: userData,
    });
  }

});

function validateForm() {
  var w = $("#fname").val();
  if (w == "") {
      alert("Name must be filled out");
      return false;
  }
  var x = $("#lname").val();
  if (x == "") {
      alert("Name must be filled out");
      return false;
  }
  var y = $("#email").val();
  if (y == "" || !validateEmail (y)) {
      alert("Enter a valid email");
      return false;
  }
  var z = $("#phone_num").val();
  if (z == "") {
      alert("Enter a valid phone number");
      return false;
  }
  return true;
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}