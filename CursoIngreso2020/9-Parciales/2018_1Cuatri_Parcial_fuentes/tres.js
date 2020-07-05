function mostrar()
{
    var precio=prompt("Ingrese el precio del producto:","Ejemplo:700");
    var porc=prompt("Ingrese el % de descuento","Ejemplo:25");
    var preciodesc=(precio*porc)/100;
    var descfinal=precio-preciodesc;
    document.getElementById("elPrecioFinal").value=descfinal;
}
