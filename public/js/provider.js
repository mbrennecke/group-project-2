$(function() {
  var calEvents = [];
  var id = $("#providerid").text();
  console.log(id);
  $("#providerid").hide();

  $.get("/api/events/" + id, function(events) {
    console.log(events);
    for (var i = 0; i < events.length; i++) {
      var event = JSON.parse(events[i].event);
      if (localStorage.email) {
        event.title = "Unavailable";
        calEvents.push(event);
      } else {
        calEvents.push(event);
      }
    }
    console.log(calEvents);
    $.get("/api/provider/" + id, function(busHours) {
      var busHoursdisp = JSON.parse(busHours.businessHours);
      console.log(busHoursdisp);
      var busStart = busHoursdisp.start;
      console.log(busStart);
      $("#calendar").fullCalendar({
        defaultView: "agendaWeek",
        nowIndicator: true,
        dayClick: function(date, jsEvent, view) {
          var start = date.format();
          $("#newEvent").modal("show");
          $("#timeslot").text(
            "New appointment on " + date.format("MMMM Do YYYY, h:mm a")
          );
          $("#saveAppt").attr("start", start);
        },
        header: {
          left: "month,agendaWeek,agendaDay",
          center: "title",
          right: "prevYear,prev,next,nextYear"
        },
        footer: {
          left: "",
          center: "",
          right: "prev,next"
        },
        businessHours: busHoursdisp,
        minTime: busStart
      });
      $("#calendar").fullCalendar("renderEvents", calEvents, true);
      $("#calProvider").text("Calendar for " + busHours.providerBusinessName);
    });
  });
});
