var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log( days[dayInWeek] );
console.log( days[dayInWeek - 1] );

var getday = function(dayIndex) {
    return days[dayIndex];

}
console.log( getday (4));