"use strict"

var date = new Date();
var masyvas =[];
function duomenuBaze() {
        for (var i = 0; i < 200; i++) {
            var klientas = {
                id: i + 1,
                vardas: "vardas " + (i + 1),
                pavarde: "pavarde " + (i + 1),
                asmensKodas: "asmens kodas " + (i + 1),
                prisijungimoData:new Date(),
                adresas: "adresas " + (i + 1),
                elPastas: "elektroninis pastas " + (i + 1)
            }
            masyvas.push(klientas);
              
        }
    }

duomenuBaze();
console.log(masyvas);