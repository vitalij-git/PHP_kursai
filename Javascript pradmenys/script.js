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
    var xs = Math.pow(x, 2);
    var ys = Math.pow(y, 2);
    var zs = Math.pow(z, 2);
    if (x + y > z && x + z > y && y + z > x) {
        if (x == y && x == z) {
            calculatorResult.value = "trikampis yra lygiakraštis ";
        }
        else if (x == z || x == y || z == y) {
            calculatorResult.value = " trikampis yra lygiašonis";
        }
        else {
            calculatorResult.value = "trikampis yra įvairiakraštis";
        }
        if (xs + ys > zs && xs + zs > ys && ys + zs > xs) {
            calculatorResult.value += "  ir trikampis yra smailusis";
        }
        else if (xs + ys < zs || xs + zs < ys || ys + zs < xs) {
            calculatorResult.value += "  ir trikampis yra bukas";
        }
        else if (xs + ys == zs || xs + zs == ys || ys + zs == xs) {
            calculatorResult.value += "  ir trikampis yra status";
        }

    }
    else if (isNaN(x) && isNaN(y) && isNaN(z)) {
        calculatorResult.value = "blogai ivestas skaicius";
    }
    else {
        calculatorResult.value = "toks trikampis ne ezgistoja";
    }
});

// Javascript "Ciklai"
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var lyginiaiSk = [];
var neLyginiaiSk = [];
var division5 = [];
var division3 = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        lyginiaiSk.push(numbers[i]);
    }
    else {
        neLyginiaiSk.push(numbers[i]);
    }
}
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 == 0) {
        division5.push(numbers[i]);
    }
}
for (var i = 0; i < lyginiaiSk.length; i++) {
    if (lyginiaiSk[i] % 3 == 0) {
        division3.push(lyginiaiSk[i]);
    }
}
console.log("visi skaiciai: " + numbers);
console.log("lyginiai skaiciai yra: " + lyginiaiSk);
console.log("ne lyginiai skaiciai yra: " + neLyginiaiSk);
console.log("skaiciai kurie dalinasi is 5: " + division5);
console.log("lyginiai skaiciai kurie dalinasi is 3: " + division3);

// Martynas labai mėgsta saldainius. Mamos slėptuvėje jis rado m saldainių. 
// Pirmą dieną jis suvalgė 1 saldainį, antrąją – 2, trečiąją – 3. 
// Kiekvieną kitą dieną jis suvalgydavo vienu saldainiu daugiau negu prieš tai buvusią dieną. 
// Per kelias dienas d Martynas suvalgys visus saldainius? 
// Paskutinei dienai gali likti mažiau saldainių. 
// Pasitikrinkite. Kai m = 11, turėtumėte gauti d = 5.

var m,d;
m=11;
d=0;
var n=1;
var saldainiuSyvalgyta=0;
while(saldainiuSyvalgyta<m){
    saldainiuSyvalgyta= saldainiuSyvalgyta + n;
    d++;
    n++;
}
console.log(d);

//Javascript "Masyvai"
var masyvai,masyvoIsvedimas;
masyvoIsvedimas= document.querySelector("#masyvo-rezultatas");
var massive = [];
document.querySelector(".masyvo-mygtukas").addEventListener("click", function () {
    masyvai = document.querySelector("#masyvas").value;
    massive.push(masyvai);
    document.querySelector("#masyvas").value = "";
   masyvoIsvedimas.value = massive;
});

var nsk = 8421;
var liekana;
var nskMasyvas=[];
while(nsk !=0 ){
    liekana = nsk % 10;
    nskMasyvas.push(liekana);
    nsk = parseInt(nsk / 10);
}
console.log(nskMasyvas);

//5. Sukurkite skaičiuotuvą, sudedantį dvi trupmenas. 
//Rezultatas atvaizduojamas su sveikąja ir trupmenine dalimi.
var trupmena1 = [];
var trupmena2 = [];
var suma = [0,0,0];
var tvs1 = [];
var tvs2 = [];
var netaisyklingojiTrupmenosSkaitiklis = document.querySelector("#netaisyklingoji-trupmenos-skaitiklis");
var netaisyklingojiTrupmenosVardiklis = document.querySelector("#netaisyklingoji-trupmenos-vardiklis");
var taisyklingojiTrupmenosSkaitiklis = document.querySelector("#taisyklingoji-trupmenos-skaitiklis");
var taisyklingojiTrupmenosVardiklis = document.querySelector("#taisyklingoji-trupmenos-vardiklis");
var taisyklingojiTrupmenosSveikasis = document.querySelector("#taisyklingoji-trupmenos-sveikasis");
document.querySelector("#trupmenos-suma").addEventListener("click", function(){
    trupmena1.push(parseInt(document.querySelector("#sveikasisa").value));
    if(isNaN(trupmena1[0])){
        trupmena1[0]=0;
    }
    trupmena1.push(parseInt(document.querySelector("#skaitiklisa").value));
    trupmena1.push(parseInt(document.querySelector("#vardiklisa").value));
    trupmena2.push(parseInt(document.querySelector("#sveikasisb").value));
    if(isNaN(trupmena2[0])){
        trupmena2[0]=0;
    }
    trupmena2.push(parseInt(document.querySelector("#skaitiklisb").value));
    trupmena2.push(parseInt(document.querySelector("#vardiklisb").value));
    tvs1 = netaisyklingojiTrupmena(trupmena1);
    tvs2 = netaisyklingojiTrupmena(trupmena2);
    trupmenuSuma();
    netaisyklingojiTrupmenosSkaitiklis.value= suma[1];
    netaisyklingojiTrupmenosVardiklis.value=suma[2];
    trupmenuRezultatas();
    taisyklingojiTrupmenosSveikasis.value=suma[0];
    taisyklingojiTrupmenosSkaitiklis.value=suma[1];
    taisyklingojiTrupmenosVardiklis.value=suma[2];
});

function netaisyklingojiTrupmena(trupmena) {
    var tvs;
    tvs = [trupmena[0] * trupmena[2] + trupmena[1], trupmena[2]];
    return tvs;
}


function skaitikliuSuma(){
    tvs1[0] = tvs1[0] * tvs2[1];
    tvs2[0] = tvs2[0] * tvs1[1];
    return tvs1,tvs2;
}
function vardiklis (){
    tvs1[1] = tvs1[1] * tvs2[1];
    tvs2[1] = tvs1[1];
    return tvs1,tvs2;
}
function trupmenuSuma(){
    skaitikliuSuma();
    vardiklis();
    suma[1] = tvs1[0] + tvs2[0];
    suma[2] = tvs1[1];
    return suma;
}
function trupmenuRezultatas(){
    suma[0] = parseInt(suma[1]/suma[2]);
    suma[1] = suma[1]%suma[2];
    console.log(suma);
    if(suma[1] == 0){
        suma[2]=0;
    }
    var gcd = didžiausiasBendrasDaliklis();
    suma[1]/=gcd;
    suma[2]/=gcd;
    return suma;
}
function didžiausiasBendrasDaliklis(){
    let gcd;
    for (let i = 1; i <= suma[1] && i <= suma[2]; i++) {
        if( suma[1] % i == 0 && suma[2] % i == 0) {
           gcd = i;
        }
    }
    return gcd;
}



