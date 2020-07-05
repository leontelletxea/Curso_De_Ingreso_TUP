function mostrar()
{
i=0;   
var respuesta="si";
var temperaturaspares=0;
var productomaspesado=0;
var productomaspesadomarca=0;
var productosamenosde0=0;
var acumuladorpeso=0;
var contadorpeso=0;
var pesomaximo=0;
var pesominimo=0;

while(respuesta=="si")
{
var marca=prompt("marca");

do
{
    var peso=prompt("peso");
}
while(isNaN(peso)||peso<1||peso>100)

do
{
    var temperatura=prompt("temperatura");
}
while(isNaN(temperatura)||temperatura<-30||temperatura>30)

if((temperatura%2)==0)
{
    temperaturaspares++;
}

if(i==0)
{
    productomaspesado=peso;
    productomaspesadomarca=marca;
}

if(i>0&&peso>productomaspesado)
{
    productomaspesado=peso;
    productomaspesadomarca=marca;
}

if(temperatura<0)
{
productosamenosde0++;
}

if(i>=0)
{
acumuladorpeso=parseInt(acumuladorpeso)+parseInt(peso);
contadorpeso++;
}

if(i==0)
{
pesomaximo=peso;
pesominimo=peso;
}

if(i>0&&peso>pesomaximo)
{
pesomaximo=peso;
}

if(i>0&&peso<pesominimo)
{
pesominimo=peso;
}

i++;
respuesta=prompt("desea ingresar mas datos?");
}
document.write("temperaturas pares: "+temperaturaspares+"<br>");
document.write("marca producto mas pesado: "+productomaspesadomarca+"<br>");
document.write("productos a menos de 0 grados: "+productosamenosde0+"<br>");
document.write("promedio de peso de productos: "+acumuladorpeso/contadorpeso+"<br>");
document.write("peso maximo: "+pesomaximo+"<br>");
document.write("peso minimo: "+pesominimo+"<br>");

}
