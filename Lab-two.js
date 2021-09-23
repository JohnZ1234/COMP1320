function getDayOfTheWeek(year,month,days) {
let day = parseInt(days);
let getYear = String(year);
let lastTwoNumber = getYear.substr(2,3);
let lastTwoNumbers = parseInt(lastTwoNumber);
let stepOne = Math.floor(lastTwoNumbers / 12);
let stepTwoRemainder = (lastTwoNumbers % 12);
let stepThree = Math.floor(stepTwoRemainder / 4);
let stepFour = stepOne + stepTwoRemainder + stepThree + day;
if (month === 'Janurary' || month === 'October' ) {
    var stepFive = (stepFour + 1) % 7;
} else if (month === 'Feburary' || month === 'March' || month === 'November') {
    var stepFive = (stepFour + 4) % 7;
} else if (month === 'April' || month === 'July') {
    var stepFive = (stepFour + 0) % 7;
} else if (month === 'May') {
    var stepFive = (stepFour + 2) % 7;
} else if (month === 'August') {
    var stepFive = (stepFour + 3) % 7;
} else if (month === 'September' || month === 'December') {
    var stepFive = (stepFour + 6) % 7;
} else if (month === 'June') {
    var stepFive = (stepFour + 5) % 7;
}

if(year <= 2000) {
    if (stepFive === 0) {
    console.log('It Saturday');
    } else if (stepFive === 1) {
    console.log('Sunday');
    } else if (stepFive === 2) {
    console.log('Monday');
    } else if (stepFive === 3) {
    console.log('Tuesday');
    } else if (stepFive === 4) {
    console.log('Wednesday');
    } else if (stepFive === 5) {
    console.log('Thursday');
    } else if (stepFive === 6) {
    console.log('Friday');
        }
} else {
    //call to if it's a leap year function
    isLeapYeare(stepFour, month)
}
}
//}
//if it's a leap year function
function isLeapYeare(year , month) {
var leapYear = year;
if (month === 'Janurary' || month === 'October' ) {
    var stepFive = (leapYear + 0) % 7;
} else if (month === 'Feburary' || month === 'March' || month === 'November') {
    var stepFive = (leapYear + 3) % 7;
} else if (month === 'April' || month === 'July') {
    var stepFive = (leapYear + 7) % 7;
} else if (month === 'May') {
    var stepFive = (leapYear + 1) % 7;
} else if (month === 'August') {
     var stepFive = (leapYear + 2) % 7;
} else if (month === 'September' || month === 'December') {
     var stepFive = (leapYear + 5) % 7;
} else if (month === 'June') {
    var stepFive = (leapYear + 4) % 7;
}
      
if (stepFive === 0) {
    console.log('Saturday');
} else if (stepFive === 1) {
    console.log('Sunday');
} else if (stepFive === 2) {
    console.log('Monday');
} else if (stepFive === 3) {
    console.log('Tuesday');
} else if (stepFive === 4) {
    console.log('Wednesday');
} else if (stepFive === 5) {
    console.log('Thursday');
} else if (stepFive === 6) {
    console.log('Friday');
     }
}

function makeCalendar() {
//days in a week starting friday because Jan 1 is friday
var daysInWeek = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

for (var i = 1; i <= 365; i++) {
    if(i <= 31 ){
        console.log('01' + '-' + i + '-' + '2021' + ' is ' + daysInWeek[i - 1]);
    } else if ( i <= 59 ) {
        console.log('02' + '-' + (i -31) + '-' + '2021' + ' is ' + daysInWeek[i - 29]);
    } else if ( i <= 90 ) {
        console.log('03' + '-' + (i - 59) + '-' + '2021' + ' is ' + daysInWeek[i - 57]);
    } else if ( i <= 120 ) {
        console.log('04' + '-' + (i - 90) + '-' + '2021' + ' is ' + daysInWeek[i - 85]);
    } else if ( i <= 151 ) {
        console.log('05' + '-' + (i - 120) + '-' + '2021' + ' is ' + daysInWeek[i - 120]);
    } else if ( i <= 181 ) {
        console.log('06' + '-' + (i - 151) + '-' + '2021' + ' is ' + daysInWeek[i - 148]);
    } else if ( i <= 212 ) {
        console.log('07' + '-' + (i - 181) + '-' + '2021' + ' is ' + daysInWeek[i - 176]);
    } else if ( i <= 243 ) {
        console.log('08' + '-' + (i - 212) + '-' + '2021' + ' is ' + daysInWeek[i - 211]);
    } else if ( i <= 273 ) {
        console.log('09' + '-' + (i - 243) + '-' + '2021' + ' is ' + daysInWeek[i - 239]);
    } else if ( i <= 304 ) {
        console.log('10' + '-' + (i - 273) + '-' + '2021' + ' is ' + daysInWeek[i - 267]);
    } else if ( i <= 334 ) {
        console.log('11' + '-' + (i - 304) + '-' + '2021' + ' is ' + daysInWeek[i - 302]);
    } else if ( i <= 365 ) {
        console.log('12' + '-' + (i - 334) + '-' + '2021' + ' is ' + daysInWeek[i - 330]);
        }
    }
}
module.exports =  { getDayOfTheWeek, makeCalendar }