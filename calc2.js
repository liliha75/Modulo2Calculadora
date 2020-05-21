




var operaciones = document.getElementsByClassName("operacion");
  var resultado = document.getElementById("display");

console.log(operaciones);
console.log(resultado.innerText);

for(let u=0; u<operaciones.length;u++){

    operaciones[u].addEventListener("click", function (event){

        console.log(event.target.id);

        switch(event.target.id){
            case "suma":
                
                resultado.innerText= suma();
                console.log(suma());
            break;
            case "resta":
                
                resultado.innerText= resta();
                console.log(resta());
            break;
            case "mult":
                
                resultado.innerText= multi();
                console.log(multi());
            break;
            case "div":
                
                resultado.innerText= div();
                console.log(div());
            break;


        }
    });
}

var getvalues = () =>{
    var x = parseFloat(document.getElementById("numero1").value);
    var y = parseFloat(document.getElementById("numero2").value);

    var numeros = [x,y];
    return numeros;
   
}

var suma = () => {
    
    var sum= getvalues()[0]+getvalues()[1];
    
   return (sum);
 

}

var resta = () => {
    
    var rest= getvalues()[0]-getvalues()[1];
    
   return (rest);
 

}

var multi = () => {
    
    var m= getvalues()[0]*getvalues()[1];
    
   return (m);
 

}

var div = () => {
    
    var d= getvalues()[0]/getvalues()[1];
    
   return (d);
 

}