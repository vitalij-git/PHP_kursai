function myFunction(){
    var x;
    x = document.getElementById("submit-post").value
}
/*
function sayHello(name){
    alert("Hi , " + name);
}
sayHello("David");
sayHello("Sarah");
sayHello("John");

var user = prompt ("Please enter your name");
alert(user);
*/
var result = confirm ("Do you really want to leave this page?");
if(result== true){
    alert("Thanks for visiting");
}
else{
    alert("Thanks for staying with us");
}
