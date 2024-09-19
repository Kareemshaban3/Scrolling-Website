let Start = document.getElementById("starts");
let Moon = document.getElementById("moon");
let Mountains3 = document.getElementById("mountains3");
let Mountains4 = document.getElementById("mountains4");
let River = document.getElementById("river");
let Boats = document.getElementById("boat");
let Nouvil = document.querySelector(".nouvil");

window.onscroll = function(){
    let value = scrollY;
    Start.style.left = value + "px";
    Moon.style.top = value * 4 + "px";
    Mountains3.style.top = value * 2 + "px";
    Mountains4.style.top = value * 1.5 + "px";
    River.style.top = value + "px";
    Boats.style.top = value + "px";
    Boats.style.left = value * 3 + "px";
    Nouvil.style.fontSize = value + "px";
    if ( scrollY >= 70){
        Nouvil.style.fontSize = 70 + "px";
        Nouvil.style.position = "fixed";
        if(scrollY >= 470 ){
            Nouvil.style.display = "none";
        }else{
            Nouvil.style.display = "";            
        }
    }
    if ( scrollY >= 120){
        document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)"
    }else{
        document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)"
    }

}

