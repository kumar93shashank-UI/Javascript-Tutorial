/* JS doesn't have date data type. However, Date object can be used to work with dates and time in 
applications.For example:   */
            var dateObjectName = new Date([parameters]);

// Methods of Date Object
/*  "set" ====> for setting date and time values in Date objects.
    "get" ====> for getting date and time values from Date objects.
    "to"  ====> for returning string values from Date objects.
    parse and UTC methods ====> for parsing Date strings. 
*/

var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year

var IPODate =new Date();
IPODate.setTime(Date.parse(IPODate));
console.log(IPODate);// Tue Jun 02 2020 09:56:27 GMT+0530 (India Standard Time)