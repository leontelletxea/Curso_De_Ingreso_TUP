function mostrar()
{    
var num=prompt("Precio","Ingrese el precio");
var desc=prompt("Descuento %","Ingrese el porcentaje");
var resul=(num*desc)/100;
document.getElementById("elPrecioFinal").value=num-resul;
}
