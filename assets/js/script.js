
    var header = document.header;
    const m = moment();
    var m2 = m.format("dddd[.] MMM Do");
    var m3 = m.format("YYYY");
    var taskTime = ["9AM", "10AM", "11AM", "12pm", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var currentHour = moment().format("dddd, MMMM Do YYYY, h:mm:ss")



$(currentMonth).text(m)
$(currentDay).text(m2)
$(currentYear).text(m3)

//  check current time
$('.info').each(function(){
    var currentTime = moment().hours();
    var currentHour = Number(currentTime);
    console.log(currentTime)
});
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");