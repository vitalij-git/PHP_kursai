"use strict"
var trikampioParametruIsvedimas = document.querySelector(".trikampio-rezultatas");
var trikampis ={
    a:0,
    b:0,
    c:0,
    plotas:0,
    perimetras:0,
    pusperimetris:0,
    kampasTarpBC:0,
    kampasTarpAC:0,
    kampasTarpAB:0,
    trikampiosudarymas:false,
    trikampiusTikrinimas: function(){
        if(this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a){
            return trikampis.trikampiosudarymas= true;
        }
    },
    trikampioPlotas: function(){
        this.plotas = Math.sqrt((this.pusperimetris*(this.pusperimetris-this.a))*(this.pusperimetris*(this.pusperimetris-this.b))*(this.pusperimetris*(this.pusperimetris-this.c)));
        return this.plotas;
    },
    trikampioPerimetras: function(){
        this.perimetras=this.a + this.b + this.c;
        return this.perimetras;
    },
    trikampioPusperimetras: function(){
        this.pusperimetris=this.perimetras/2;
        return this.pusperimetris;
    },
    trikampioKampai:function(){
        var pi = Math.PI;
        this.kampasTarpBC=(Math.acos((Math.pow(this.b,2)+Math.pow(this.c,2)- Math.pow(this.a,2))/(2*this.b*this.c))) * (180/pi);
        this.kampasTarpAC=(Math.acos((Math.pow(this.a,2)+Math.pow(this.c,2)- Math.pow(this.b,2))/(2*this.a*this.c))) * (180/pi);
        this.kampasTarpAB=(Math.acos((Math.pow(this.a,2)+Math.pow(this.b,2)- Math.pow(this.c,2))/(2*this.a*this.b))) * (180/pi);
        return this.kampasTarpBC,this.kampasTarpAC,this.kampasTarpAB;
    },
    paleidimas: function(){
        // this.x = x;
        // this.y = y;
        // this.z = z;
        trikampis.trikampiusTikrinimas();
        if(trikampis.trikampiosudarymas != false){
        trikampis.trikampioPerimetras();
        trikampis.trikampioPusperimetras();
        trikampis.trikampioPlotas();
        trikampis.trikampioKampai();
        }
    } 
}
document.querySelector(".trikampio-perimetras").addEventListener("click", function(){
    trikampis.a=parseFloat(document.querySelector("#a").value);
    trikampis.b=parseFloat(document.querySelector("#b").value);
    trikampis.c=parseFloat(document.querySelector("#c").value);
    trikampis.paleidimas();
    if (trikampis.trikampiosudarymas==false) {
        trikampioParametruIsvedimas.innerHTML= "toks trikampis neegzistuoja";
    }
    else{
        trikampioParametruIsvedimas.innerHTML="Trikampio perimetras: " + trikampis.perimetras;
    }
    
});
document.querySelector(".trikampio-pusperimetras").addEventListener("click", function(){
    trikampis.a=parseFloat(document.querySelector("#a").value);
    trikampis.b=parseFloat(document.querySelector("#b").value);
    trikampis.c=parseFloat(document.querySelector("#c").value);
    trikampis.paleidimas();
    if (trikampis.trikampiosudarymas==false) {
        trikampioParametruIsvedimas.innerHTML= "toks trikampis neegzistuoja";
    }
    else{
        trikampioParametruIsvedimas.innerHTML="Trikampio pusperimetras: " + trikampis.pusperimetris;
    }
    
});
document.querySelector(".trikampio-plotas").addEventListener("click", function(){
    trikampis.a=parseFloat(document.querySelector("#a").value);
    trikampis.b=parseFloat(document.querySelector("#b").value);
    trikampis.c=parseFloat(document.querySelector("#c").value);
    trikampis.paleidimas();
    if (trikampis.trikampiosudarymas==false) {
        trikampioParametruIsvedimas.innerHTML= "toks trikampis neegzistuoja";
    }
    else{
        trikampioParametruIsvedimas.innerHTML="Trikampio plotas: " + trikampis.plotas;
    }
});
document.querySelector(".trikampio-kampai").addEventListener("click", function(){
    trikampis.a=parseFloat(document.querySelector("#a").value);
    trikampis.b=parseFloat(document.querySelector("#b").value);
    trikampis.c=parseFloat(document.querySelector("#c").value);
    trikampis.paleidimas();
    if (trikampis.trikampiosudarymas==false) {
        trikampioParametruIsvedimas.innerHTML= "toks trikampis neegzistuoja";
    }
    else{
        trikampioParametruIsvedimas.innerHTML="α – kampas tarp kraštinių b ir c: " + trikampis.kampasTarpBC + " β – kampas tarp kraštinių a ir c: " + trikampis.kampasTarpAC + " γ – kampas tarp kraštinių a ir b: " + trikampis.kampasTarpAB;
    }
});
console.log(trikampis);