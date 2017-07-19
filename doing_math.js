var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day.');

var age = prompt("What is your age? ");
var daysPerYear = 365;

var timeAlive = (secondsPerDay * daysPerYear ) * age;

document.write(' You have been alive for roughly ' + timeAlive + ' seconds.');