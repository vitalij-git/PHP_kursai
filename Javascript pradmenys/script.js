"use strict"
// Skaiciu apvertimas
var skaicius1, skaicius2, skaicius3, skaicius4, skaicius5, skaicius6, sum, multiplay;
skaicius1 = 7;
skaicius2 = 15;
skaicius3 = 9;
skaicius4 = 12;
skaicius5 = 125;
skaicius6 = 247;
sum = skaicius1 + skaicius2 + skaicius3 + skaicius4;
multiplay = skaicius1 * skaicius2 * skaicius3 * skaicius4;
console.log("Suma yra: " + sum);
console.log("sandauga yra: " + multiplay);
var changeNumberPlace = [skaicius1, skaicius2];
console.log(changeNumberPlace);
changeNumberPlace.reverse();
// var swap = function(theArray, indexA, indexB) {
//     var temp = theArray[indexA];
//     theArray[indexA] = theArray[indexB];
//     theArray[indexB] = temp;
// };
// swap(changeNumberPlace, 0, 1);
console.log(changeNumberPlace);
var changeNumberPlace1 = [skaicius3, skaicius4];
console.log(changeNumberPlace1);
changeNumberPlace1.reverse();
console.log(changeNumberPlace1);
//alert("skaciai 1 ir 2 sukeisti vietoms: " + changeNumberPlace + "    skaciai 3 ir 4 sukeisti vietoms: " +changeNumberPlace1);
skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
var isvedimas = document.querySelector("#rezultatas");
isvedimas.value = skaicius5 + " " + skaicius6;
//skaiciuotuvas
var x, y, z, calculatorSum, calculatorSubtract, calculatorMultiplay, calculatorDivision;
var calculatorResult = document.querySelector(".skaiciotuvo-rezultatas");
document.querySelector("#sum").addEventListener("click", function () {
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    if (x >= 0 && y >= 0) {
        calculatorSum = x + y;
        calculatorResult.value = calculatorSum;
    }
    else {
        calculatorResult.value = "iveskite skaicius";
    }

});
document.querySelector("#subtract").addEventListener("click", function () {
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    if (x >= 0 && y >= 0) {
        calculatorSum = x - y;
        calculatorResult.value = calculatorSum;
    }
    else {
        calculatorResult.value = "iveskite skaicius";
    }

});
document.querySelector("#multiplay").addEventListener("click", function () {
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    if (x >= 0 && y >= 0) {
        calculatorSum = x * y;
        calculatorResult.value = calculatorSum;
    }
    else {
        calculatorResult.value = "iveskite skaicius";
    }

});
document.querySelector("#division").addEventListener("click", function () {
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    if (x >= 0 && y >= 0) {
        calculatorSum = x / y;
        calculatorResult.value = calculatorSum;
    }
    else {
        calculatorResult.value = "iveskite skaicius";
    }

});
document.querySelector("#palyginimas").addEventListener("click", function () {
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    if (x > y) {
        calculatorResult.value = "x skaicius didesnis";
    }
    else if (x < y) {
        calculatorResult.value = "y skaicius didesnis";
    }
    else if (x == y) {
        calculatorResult.value = "x ir y vienodi skaiciai";
    }
    else {
        calculatorResult.value = "iveskite skaicius";
    }
});
document.querySelector("#palyginimas3").addEventListener("click", function () {
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    z = parseInt(document.querySelector("#z").value);
    if (x > y && x > z) {
        calculatorResult.value = "x skaicius yra didesnis";
    }
    else if (x < y && y > z) {
        calculatorResult.value = "y skaicius yra didesnis";
    }
    else if (z > x && z > y) {
        calculatorResult.value = "z skaicius yra didesnis";
    }
    else if (x == y && x == z) {
        calculatorResult.value = "x,y ir z yra vienodi skaiciai";
    }
    else {
        calculatorResult.value = "iveskite skaicius";
    }
});
document.querySelector("#trikampis").addEventListener("click", function () {
    x = parseInt(document.querySelector("#x").value);
    y = parseInt(document.querySelector("#y").value);
    z = parseInt(document.querySelector("#z").value);
    var xs = Math.pow(x,2);
    var ys = Math.pow(y,2);
    var zs = Math.pow(z,2);
    if (x + y > z && x + z > y && y + z > x) {
        if( x==y && x==z){
        calculatorResult.value = "trikampis yra lygiakraštis ";
        }
        else if(x==z || x==y || z==y){
            calculatorResult.value =" trikampis yra lygiašonis";
        }
        else{
            calculatorResult.value="trikampis yra įvairiakraštis";
        }
        if(xs+ys>zs && xs+zs>ys && ys+zs>xs){
            calculatorResult.value +="  ir trikampis yra smailusis";
        }
        else if(xs+ys<zs || xs+zs<ys || ys+zs<xs){
            calculatorResult.value +="  ir trikampis yra bukas";
        }
        else if(xs+ys==zs || xs+zs==ys || ys+zs==xs){
            calculatorResult.value +="  ir trikampis yra status";
            console.log("status");
        }

    }
    else if (isNaN(x) && isNaN(y) && isNaN(z)) {
        calculatorResult.value = "blogai ivestas skaicius";
    }
    else {
        calculatorResult.value = "toks trikampis ne ezgistoja";
    }
});
console.log();

// Javascript "Ciklai"
var numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var lyginiaiSk=[];
var neLyginiaiSk=[];
for(var i=0; i<numbers.length;i++){
    if(numbers[i]%2==0){
        
    }
}