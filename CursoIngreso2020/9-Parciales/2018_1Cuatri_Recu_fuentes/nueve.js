function mostrar()
{
i=0;
var respuesta="si";
var temperaturaspares=0;
var animalmaspesado=0;
var animalmaspesadotemp=0;
var animalmaspesadonombre=0;
var animalesamenosde0=0;
var acumuladorpeso=0;
var contadorpeso=0;
var pesomax=0;
var pesomin=0;

while(respuesta=="si")
{
do
{
    var animal=prompt("animal");
}
while(!isNaN(animal))

do
{
    var peso=prompt("peso");
}
while(isNaN(peso)||peso<1||peso>1000)

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
    animalmaspesado=peso;
    animalmaspesadotemp=temperatura;
    animalmaspesadonombre=animal;
}

if(i>0&&peso>animalmaspesado)
{
    animalmaspesado=peso;
    animalmaspesadotemp=temperatura;
    animalmaspesadonombre=animal;
}

if(temperatura<0)
{
animalesamenosde0++;
}

acumuladorpeso=parseInt(acumuladorpeso)+parseInt(peso);
contadorpeso++;

if(i==0&&temperatura<0)
{
pesomax=peso;
pesomin=peso;
}

if(i>0&&temperatura<0&&peso>pesomax)
{
pesomax=peso;
}

if(i>0&&temperatura<0&&peso<pesomin)
{
pesomin=peso;
}

i++;
respuesta=prompt("desea ingresar mas datos?"); 
}
document.write("temperaturas pares: "+temperaturaspares+"<br>");
document.write("nombre y temperatura del animal mas pesado: "+animalmaspesadonombre+" "+animalmaspesadotemp+"<br>");
document.write("animales a menos de 0 grados: "+animalesamenosde0+"<br>");
document.write("promedio de peso de animales: "+acumuladorpeso/contadorpeso+"<br>");
document.write("peso maximo de animales a menos de 0 grados: "+pesomax+"<br>");
document.write("peso minimo de animales a menos de 0 grados "+pesomin+"<br>");
}
