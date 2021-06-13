var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();

today = yyyy + '/' + mm + '/' + dd +"  " +  hour + ":" + minute;
document.getElementById("Date").innerHTML=today;