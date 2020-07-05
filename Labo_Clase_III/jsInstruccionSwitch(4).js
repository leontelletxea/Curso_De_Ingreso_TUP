function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
case "Febrero":
alert("Usted selecciono: " +mesDelAño+ " Si tiene 28 dias");
}

switch(mesDelAño)
{
case "Abril":
case "Junio":
case "Septiembre":
case "Noviembre":
alert("Usted selecciono: " +mesDelAño+ " Si tiene 30 dias");
break;
default:
alert("Usted selecciono: " +mesDelAño+ " Si tiene 31 dias");   

}

	



}//FIN DE LA FUNCIÓN