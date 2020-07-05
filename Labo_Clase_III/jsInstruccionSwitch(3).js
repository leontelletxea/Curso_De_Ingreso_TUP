function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
case "Febrero":
alert("Usted selecciono: " +mesDelAño+ " Este mes no tiene más de 29 días.");
break;
default:
alert("Usted selecciono: " +mesDelAño+ " Este mes tiene 30 o más días");
}




}//FIN DE LA FUNCIÓN