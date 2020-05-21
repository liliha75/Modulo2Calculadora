

var numeros = document.querySelectorAll(".buttons-numbers button");
var valor = numeros.length;
var operaciones=document.getElementsByClassName("operacion");
// variable que indica si se ha elegido una operacion
var operacion = false;
console.log(operacion);
var numeroClicks = 0;

var result = document.getElementById("igual");
var resetClick= document.getElementById("reset");

//botones de numeros clicks
for(var i=0; i<valor;i++){

    numeros[i].addEventListener("click", calcular );

}



//botones operaciones
for(var a=0; a<operaciones.length;a++){

   // if(operacion==false){

    operaciones[a].addEventListener("click", operacionbutt);

   // }

}

var reset = false;
igual.addEventListener("click",resultado);
resetClick.addEventListener("click",resetea);



//valores seleccionados se guardan
let valorclick1 = "";
let valorclick2 = "";
//display numero al que se le este dando click 
function calcular (event){
   
    numeroClicks++;
    var numero =  event.target.innerText;
 
if(operacion==false){
    valorclick1+= numero;
   // valorclick[numeroClicks-1] =  event.target.innerText;
    //console.log(valorclick);
    //console.log (numeroClicks);
    displayValor(valorclick1);
}
else{

    valorclick2+= numero;
    displayValor(valorclick1 +signo +  valorclick2);
}
 

}

//display valor 
function displayValor (valor){
    var display = document.getElementById("display");
    display.innerText = valor;

}

var signo = "";
function operacionbutt (event){
    operacion=true;
    console.log(event);
    console.log(event.target.innerText);
    signo=event.target.innerText;
    //valorclick1.push(signo);
    displayValor(valorclick1 + signo);
  
}

function resultado (event){

    switch(signo){
        case ("+"):
            var suma = parseInt(valorclick1)+parseInt(valorclick2)
            displayValor(suma);
        break;
        case ("-"):
            var resta = parseInt(valorclick1)-parseInt(valorclick2)
            displayValor(resta);
        break;
        case ("*"):
            var mult = parseInt(valorclick1)*parseInt(valorclick2)
            displayValor(mult);
        break;
        case ("/"):
            var div = parseInt(valorclick1)/parseInt(valorclick2)
            displayValor(div);
        break;


    }



}

function resetea(event){
   
    valorclick1="";
    valorclick2="";
    signo="";
    displayValor(0);
    operacion=false;
 
}



