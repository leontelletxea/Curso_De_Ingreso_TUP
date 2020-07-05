function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
case "Diciembre":
case "Enero" :
case "Febrero":
alert("Es Verano , Ya pasamos el frio, ahora calor!!!" );
}

switch(mesDelAño)
{
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
alert("Es Otoño, Falta para el invierno." );
}

switch(mesDelAño)
{
case "Julio" :
case "Agosto":
case "Septiembre":
alert("Es Invierno, Abrigate que hace frio." );
}




}//FIN DE LA FUNCIÓN