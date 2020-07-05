/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var n1=document.getElementById("PrecioUno").value;
    var n2=document.getElementById("PrecioDos").value;
    var n3=document.getElementById("PrecioTres").value;
    resul=(parseInt(n1)+parseInt(n2)+parseInt(n3));
    alert(resul);
}
function Promedio () 
{
    var n1=document.getElementById("PrecioUno").value;
    var n2=document.getElementById("PrecioDos").value;
    var n3=document.getElementById("PrecioTres").value;
    resul=(parseInt(n1)+parseInt(n2)+parseInt(n3));
    alert(resul/3);
}
function PrecioFinal () 
{
    var n1=document.getElementById("PrecioUno").value;
    var n2=document.getElementById("PrecioDos").value;
    var n3=document.getElementById("PrecioTres").value;
    resul=(parseInt(n1)+parseInt(n2)+parseInt(n3));
    alert(resul*21/100+resul);
}