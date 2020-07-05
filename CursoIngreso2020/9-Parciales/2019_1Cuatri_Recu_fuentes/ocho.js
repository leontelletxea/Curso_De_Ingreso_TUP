function mostrar()
{
var respuesta="si";
var contadorrojos=0;
var contadorrojos5000=0;
var contadormenos5000=0;
var acumulador=0;
var contador=0;
var i=0;

while(respuesta=="si")
{
    do
    {
        var color=prompt("color");
    }
    while(color!="rojo"&&color!="verde"&&color!="amarillo")

    do
    {
        var valor=prompt("valor");
    }
    while(isNaN(valor)||valor<0||valor>10000)
    
    if(color=="rojo")
    {
        contadorrojos++;
    }

    if(color=="rojo"&&valor>5000)
    {
        contadorrojos5000++;
    }

    if(valor<5000)
    {
        contadormenos5000++;
    }

        acumulador=parseInt(acumulador)+parseInt(valor);
        contador++; 
    
    if(i==0)
    {
        vehiculomascaro=valor;
        vehiculomascarocolor=color;
    }
    
    if(valor>vehiculomascaro)
    {
        vehiculomascaro=valor;
        vehiculomascarocolor=color;       
    }

    i++;

    respuesta=prompt("desea ingresar mas datos?");
}
document.write("cantidad rojos: "+contadorrojos+"<br>");
document.write("cantidad rojos con valor mayor a 5000: "+contadorrojos5000+"<br>");
document.write("cantidad de vehiculos menores a 5000: "+contadormenos5000+"<br>");
document.write("promedio vehiculos: "+acumulador/contador+"<br>");
document.write("el vehiculo mas caro es color: "+vehiculomascarocolor+" y cuesta: "+vehiculomascaro+"<br>");
}
