var getDayOfTheWeek = require("./Lab-two").getDayOfTheWeek;
var makeCalendar = require("./Lab-two").makeCalendar;
var readline = require("readline-sync");

var year = readline.question("Enter a year YYYY: ");
var month = readline.question("Enter the month in letters ex- March: ");
var day = readline.question("Enter the day ex- 24: " );
getDayOfTheWeek(year ,month ,day);
makeCalendar();