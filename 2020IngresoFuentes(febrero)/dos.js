function mostrar()
{
var respuesta="si";
var acumuladorpeso=0;
var preciodescuento=0;
var descuentomas100=0;
var descuentomas300=0;
var acumuladorprecio=0;
var contador=0;
var alimentomascaroprecio=0;
var alimentomascarotipo=0;
var contadorprecio=0;

while(respuesta=="si")
{
do
{
var peso=prompt("peso");
}
while(isNaN(peso)||peso<10||peso>1000)

do
{
var precio=prompt("precio");
}
while(isNaN(precio)||precio<=0)

do
{
var tipo=prompt("tipo");
}
while(tipo!="v"&&tipo!="m"&&tipo!="a")

if(contador>=0)
acumuladorpeso=parseInt(acumuladorpeso)+parseInt(peso);
acumuladorprecio=parseInt(acumuladorprecio)+parseInt(precio);
contadorprecio++;

if(acumuladorpeso<100)
{
preciodescuento=acumuladorprecio
}

if(acumuladorpeso>=100)
{
descuentomas100=acumuladorprecio*0.15
preciodescuento=acumuladorprecio-descuentomas100
}

if(acumuladorpeso>=300)
{
descuentomas300=acumuladorprecio*0.25
preciodescuento=acumuladorprecio-descuentomas300
}

if(contador==0)
{
alimentomascaroprecio=precio;
alimentomascarotipo=tipo;
}

if(contador>0&&precio>alimentomascaroprecio)
{
alimentomascaroprecio=precio;
alimentomascarotipo=tipo;
}

contador++;
respuesta=prompt("desea ingresar mas datos?")
}
alert("El importe total a pagar: "+preciodescuento+" alimento mas caro: "+alimentomascarotipo+" promedio de precio por kilo: "+acumuladorprecio/contadorprecio)
}