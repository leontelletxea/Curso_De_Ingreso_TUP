function mostrar()
{
var contador=0;
var respuesta="si";
var temperaturaspares=0;
var habitantesmenor=0
var habitantesmenorpais=0;
var paisconmasde40=0;
var acuhabitantes=0;
var contadorhabitantes=0;
var temperaturaminima=0;
var temperaturaminimapais=0;

while(respuesta=="si")
{ 

var pais=prompt("pais");

do
{
var habitantes=prompt("habitantes");
}
while(isNaN(habitantes)||habitantes<1||habitantes>7000)

do
{
var temperatura=prompt("temperatura minima registrada")
}
while(isNaN(temperatura)||temperatura<-50||temperatura>50)

if((temperatura%2)==0)
{
temperaturaspares++;
}

if(contador==0)
{
habitantesmenor=habitantes;
habitantesmenorpais=pais;
}

if(contador>0&&habitantes<habitantesmenor)
{
habitantesmenor=habitantes;
habitantesmenorpais=pais;
}

if(temperatura>40)
{
paisconmasde40++;
}

acuhabitantes=parseInt(acuhabitantes)+parseInt(habitantes)
contadorhabitantes++;

if(contador==0)
{
temperaturaminima=temperatura;
temperaturaminimapais=pais;
}

if(contador>0&&temperatura<temperaturaminima)
{
temperaturaminima=temperatura;
temperaturaminimapais=pais;  
}

contador++;
respuesta=prompt("desea continuar ingresando datos?");
}
document.write("temperaturas pares: "+temperaturaspares+"<br>"+"pais con menos habitantes: "+habitantesmenorpais+"<br>"+"paises con mas de 40 grados: "+paisconmasde40+"<br>"+"promedio habitantes: "+acuhabitantes/contadorhabitantes+"<br>"+"temperatura minima ingresada: "+temperaturaminima+" pais: "+temperaturaminimapais)


}