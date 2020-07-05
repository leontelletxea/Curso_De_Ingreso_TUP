
function mostrar()
{
i=0;
var contador=0;
var barbijocarounidades=0;
var barbijocarofabricante=0;
var barbijocaroprecio=0;
var maxunidades=0;
var maxunidadesfabricante;
var acujabon=0;

while(i<2)
{
do
{ 
var tipo=prompt("tipo");
}
while(tipo!="barbijo"&&tipo!="jabon"&&tipo!="alcohol")

do
{
var precio=prompt("precio");	
}
while(isNaN(precio)||precio<100||precio>300)

do
{
var unidades=prompt("unidades");	
}
while(isNaN(unidades)||unidades<=0||unidades>1000)

var marca=prompt("marca");

var fabricante=prompt("fabricante");

if(contador==0&&tipo=="barbijo")
{
barbijocarounidades=unidades;
barbijocarofabricante=fabricante;
barbijocaroprecio=precio;
}

if(contador>0&&tipo=="barbijo"&&precio>barbijocaroprecio)
{
barbijocarounidades=unidades;
barbijocarofabricante=fabricante;
barbijocaroprecio=precio;
}

if(contador==0)
{
maxunidades=unidades;
maxunidadesfabricante=fabricante;
}

if(contador>0&&unidades>maxunidades)
{
maxunidades=unidades;
maxunidadesfabricante=fabricante;
}

if(tipo=="jabon")
{
acujabon=parseInt(acujabon)+parseInt(unidades);
}
contador++;
i++;
}
alert("Unidades y fabricante del mas caro de los barbijos: "+barbijocarounidades+" "+barbijocarofabricante+" fabricante del item con mas unidades: "+maxunidadesfabricante+" unidades de jabon en total: "+acujabon);

}
