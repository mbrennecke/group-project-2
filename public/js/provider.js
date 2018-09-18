

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
          $('#calendar').fullCalendar('renderEvents', 
              calEvents, true
            );
    })

    
  
  });