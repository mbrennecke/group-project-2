

$(function() {

    var calEvents = [];
    var id = $("#providerid").text();
    console.log(id);
    $("#providerid").hide();

    $.get("/api/events/" + id, function(events){
        console.log(events);
        for (var i = 0; i < events.length; i++) {
            calEvents.push(JSON.parse(events[i].event));
        };
        console.log(calEvents);
        $.get("/api/provider/" + id, function(busHours) {
            var busHoursdisp = JSON.parse(busHours.businessHours);
			console.log(busHoursdisp);
			var busStart = busHoursdisp.start;
			console.log(busStart);
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
                },
                businessHours: busHoursdisp,
				minTime: busStart
              });
              $('#calendar').fullCalendar('renderEvents', 
                  calEvents, true
                
                );
        });
        
    })

    
  
  });