/* Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
/* var mmList = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]; */
var yyyy = today.getFullYear();
console.log(dd + "/" + mm + "/" + yyyy);
console.log(mm + "-" + dd + "-" + yyyy);
console.log(mm + "/" + dd + "/" + yyyy);