"use strict"


var elementas = {
    pradziosZyme: "",
    pabaigosZyme: "",
    elementoKlases: "",
    turinys: "",
    paleidimas: function (pradziosZyme, elementoKlases,turinys,pabaigosZyme) {
        this.pradziosZyme = pradziosZyme;
        this.elementoKlases = elementoKlases;
        this.turinys = turinys;
        this.pabaigosZyme = pabaigosZyme;
       
    },
    atvaizduok: function(){
        var atvaizduojamasElementas="";
        atvaizduojamasElementas+=this.pradziosZyme;
        atvaizduojamasElementas+=' class="';
        for(let i=0; i<this.elementoKlases.length;i++){
            atvaizduojamasElementas+=this.elementoKlases[i] + " ";
        }
        atvaizduojamasElementas+='"';
        atvaizduojamasElementas+='>';
        atvaizduojamasElementas+=this.turinys;
        atvaizduojamasElementas+=this.pabaigosZyme;
        return atvaizduojamasElementas;
        // var div = document.createElement("div");
        // var container = document.querySelector(".container");  
    }
};
elementas.paleidimas("<div",["container", "raudonas"], "<p>labas</p><br>", "</div>");
var isvedimoElementas =document.querySelector("body");
isvedimoElementas.innerHTML=elementas.atvaizduok();