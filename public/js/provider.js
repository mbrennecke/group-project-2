

$(function() {

    var calEvents = [];
    var id = $("#providerid").text();
    console.log(id);
    $("#providerid").hide();

    $.get("/api/events/" + id, function(events){
        console.log(events);
        for (var i = 0; i < events.length; i++) {
            calEvents.push(JSON.parse(events[i].event));
        }
        console.log(calEvents);
        $('#calendar').fullCalendar({
			defaultView: 'agendaWeek',
            header: {
              left: 'month,agendaWeek,agendaDay',
              center: 'title',
              right: 'prevYear,prev,next,nextYear'
            },
            footer: {
              left: '',
              center: '',
              right: 'prev,next'
            }
          });
          $('#calendar').fullCalendar('renderEvents', 
              calEvents, true
			
            );
    })

    
  
  });