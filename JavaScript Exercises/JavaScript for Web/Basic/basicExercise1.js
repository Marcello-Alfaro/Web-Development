/* 1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday. 
Current time is : 10 PM : 30 : 38
*/

var today = new Date();
var day = today.getDay();
var listDay = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + listDay[day]);
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
/* Ternary Operator = (condition) ?  true : false*/
hour = (hour >= 12) ? hour - 12 + " PM" : hour + " AM";
console.log("Current time is: " + hour + " : " + minutes + " : " + seconds);