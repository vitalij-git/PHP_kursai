"use strict"

var g;
var banknotai = [20, 20, 30, 30, 30];
var isduotiBanknotai = [0, 0, 0, 0, 0];
var monetos = [50, 50];
var isduotiMonetos = [0, 0];

document.querySelector("#graza").addEventListener("click", function () {
    g = document.querySelector("#grazosSuma").value;
    console.log(`graza: ${g}`);
    while (g >= 100) {
        if (banknotai[0] === 0) {
            break;
        }
        g -= 100;
        banknotai[0]--;
        isduotiBanknotai[0]++;

    }
    while (g >= 50) {
        if (banknotai[1] === 0) {
            break;
        }
        g -= 50;
        banknotai[1]--;
        isduotiBanknotai[1]++;
    }
    while (g >= 20) {
        if (banknotai[2] === 0) {
            break;
        }
        g -= 20;
        banknotai[2]--;
        isduotiBanknotai[2]++;
    }
    while (g >= 10) {
        if (banknotai[3] === 0) {
            break;
        }
        g -= 10;
        banknotai[3]--;
        isduotiBanknotai[3]++;
    }
    while (g >= 5) {
        if (banknotai[4] === 0) {
            break;
        }
        g -= 5;
        banknotai[4]--;
        isduotiBanknotai[4]++;
    }
    while (g >= 2) {
        if (monetos[0] === 0) {
            break;
        }
        g -= 2;
        monetos[0]--;
        isduotiMonetos[0]++;
    }
    while (g >= 1) {
        if (monetos[1] === 0) {
            break;
        }
        g -= 1;
        monetos[1]--;
        isduotiMonetos[1]++;
    }
    if (g >= 1) {
        console.log("atsiprasome, kasoje yra truksta nominalu, jums grazinti. Prasome kviesti konsultanta");
        console.log(`jums liko ismoketi ${g} euru`);
    }
    console
    console.log(`kasoje liko: \n 100 nominalu kiekis ${banknotai[0]} \n 50 nominalu kiekis ${banknotai[1]} \n 20 nominalu kiekis ${banknotai[2]} \n 10 nominalu kiekis ${banknotai[3]} \n 5 nominalu kiekis ${banknotai[4]} \n 2 nominalu kiekis ${monetos[0]} \n 1 nominalu kiekis ${monetos[1]} `);
    console.log(`jums priklauso: \n 100 nominalu kiekis ${isduotiBanknotai[0]}\n 50 nominalu kiekis ${isduotiBanknotai[1]} \n 20 nominalu kiekis ${isduotiBanknotai[2]} \n 10 nominalu kiekis ${isduotiBanknotai[3]} \n 5 nominalu kiekis ${isduotiBanknotai[4]} \n 2 nominalu kiekis ${isduotiMonetos[0]} \n 1 nominalu kiekis ${isduotiMonetos[1]}`);
    isduotiBanknotai=[0,0,0,0,0]; 
    isduotiMonetos=[0,0];
});