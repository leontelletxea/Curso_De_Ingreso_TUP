/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var far=document.getElementById("Temperatura").value;
var conv=far-32;
alert(far+"°Farenheit son: "+conv+"°Celsius");
}

function CentigradosFahrenheit () 
{
    var cel=document.getElementById("Temperatura").value;
    var conv=(parseInt(cel)*9/5)+32;
    alert(cel+"°Celsius son: "+conv+"°Farenheite");	
}
