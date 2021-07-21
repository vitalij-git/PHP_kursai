"use strict"

//var date = new Date();
function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

}
var masyvas =[];
function duomenuBaze() {
        for (var i = 0; i < 200; i++) {
            var klientas = {
                id: i + 1,
                vardas: "vardas " + (i + 1),
                pavarde: "pavarde " + (i + 1),
                asmensKodas: getRndInteger(39111111111,39999999999),
                prisijungimoData:new Date(),
                adresas: "adresas " + (i + 1),
                elPastas: "elektroninis pastas " + (i + 1) + "@gmail.com"
            }
            masyvas.push(klientas);  
        }
    }

duomenuBaze();
console.log(masyvas);
var isvedimoElementas = document.querySelector(".klientai");

for (let i=0; i<masyvas.length;i++){
    var eilute =document.createElement("tr");
    eilute.classList.add("klientas");
    var vardas= document.createElement("td");
    vardas.innerHTML=masyvas[i].vardas;
    eilute.append(vardas);
    var pavarde= document.createElement("td");
    pavarde.innerHTML=masyvas[i].pavarde;
    eilute.append(pavarde);
    var asmensKodas= document.createElement("td");
    asmensKodas.innerHTML=masyvas[i].asmensKodas;
    eilute.append(asmensKodas);
    var prisijungimoData= document.createElement("td");
    prisijungimoData.innerHTML=masyvas[i].prisijungimoData;
    eilute.append(prisijungimoData);
    var adresas= document.createElement("td");
    adresas.innerHTML=masyvas[i].adresas;
    eilute.append(adresas);
    var elPastas= document.createElement("td");
    elPastas.innerHTML=masyvas[i].elPastas;elPastas
    eilute.append(elPastas);
    isvedimoElementas.append(eilute);
}