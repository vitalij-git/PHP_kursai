"use strict"

var staciakampis ={
    a:0,
    b:0,
    plotas:0,
    perimetras:0,
    istrizaine:0,
    staciakampioPlotas: function(){
        this.plotas=this.a*this.b;
        return this.plotas;
    },
    staciakampioPerimetras: function(){
        this.perimetras = 2*(this.a+this.b);
        return this.perimetras;
    },
    istrizainesIlgis(){
        this.istrizaine=Math.sqrt((Math.pow(this.a,2))+(Math.pow(this.b,2)));
        return this.istrizaine;
    },
    nubraizyk: function(){
        var staciakampioContainer = document.querySelector(".staciakampio-container");
        var div = document.createElement("div");
        div.style.width= this.a + "cm";
        div.style.height= this.b + "cm";
        // div.style.backgroundColor = "green";
        div.classList.add("staciakampio-figura");
        staciakampioContainer.append(div);
    },
    paleidimas: function(){
        staciakampis.staciakampioPlotas();
        staciakampis.staciakampioPerimetras();
        staciakampis.istrizainesIlgis();
        staciakampis.nubraizyk();
    }
   
};

document.querySelector(".staciakampio-rezultatas").addEventListener("click",function(){
    staciakampis.a= parseFloat(document.querySelector("#a").value);
    staciakampis.b= parseFloat(document.querySelector("#b").value);
    staciakampis.paleidimas();
    var staciakampioIsvedimas= document.querySelector(".staciakampis");
    staciakampioIsvedimas.innerHTML="Staciakampio plotas: " + staciakampis.plotas + " Staciakampio perimetras: " + staciakampis.perimetras + " Staciakampio istrizaine: " + staciakampis.istrizaine;
});

