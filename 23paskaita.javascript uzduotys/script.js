"use strict"
var masyvai,masyvoIsvedimas;
masyvoIsvedimas= document.querySelector("#masyvo-rezultatas");
var massive = [];
var divArray=[];
function masivoPapildymas(){
    masyvai = document.querySelector("#masyvas").value;
    massive.push(masyvai);
    document.querySelector("#masyvas").value = "";
    masyvoIsvedimas.value = massive;
}
function kvadratineSaknis(){
    for(let i=0; i<massive.length; i++){
        Math.sqrt(massive[i],2)
    }
    return massive;
}
document.querySelector(".masyvo-mygtukas").addEventListener("click", function () {
    if(document.querySelector("#masyvas").value == ""){
        alert("irasykite skaiciu")
    }
    else{
        masivoPapildymas();
        document.querySelector(".square-root").style.display="block"; 
    }

});
document.querySelector("#square-root-button").addEventListener("click", function(){
    var squareRootMassive=[]
    for(var i=0; i<massive.length; i++){
        var saknis = parseFloat((Math.sqrt(massive[i],2)).toFixed(2));
        squareRootMassive.push(saknis);
    }
    console.log(squareRootMassive);
    var squareRootResults = document.querySelector("#square-root-results");
    squareRootResults.value = squareRootMassive;
});
console.log(Math.sqrt(9,3));

document.querySelector(".elementas").addEventListener("click",function(){
    var div = document.createElement("div");
    div.innerText="tekstas";
    document.getElementsByClassName('naujas-elementas')[0].appendChild(div);
    div.classList.add("klase");
    divArray.push(div);
});
console.log(divArray);