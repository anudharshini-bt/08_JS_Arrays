var getVisitorReportByDay = function(monthArray, weekNumber, dayNumber) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  
  var weekIndex = weekNumber - 1;
  var dayIndex = dayNumber - 1;

  var visitorReport = "There were ";
  visitorReport += monthArray[weekIndex][dayIndex];
  visitorReport += " visitors on " + days[dayIndex];

  return visitorReport;
};
