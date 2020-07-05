
function mostrar()
{
var respuesta="si";
var numeropar=0;
var numeroimpar=0;
var contadorceros=0;
var acupositivos=0;
var contadorpositivos=0;
var acunegativos=0;
var contador=0;
var numeromaximo=0;
var numeromaximoletra=0;
var numerominimo=0;
var numerominimoletra=0;

while(respuesta=="si")
{

do
{
var letra=prompt("ingrese una letra");
}
while(!isNaN(letra))

do
{
var numero=prompt("ingrese un numero entre -100 y 100");
}
while(isNaN(numero)||numero<-100||numero>100)

// Pares e Impares
if((numero%2)==0)
{
numeropar++;
}
else
{
numeroimpar++;
}
// Pares e Impares

if(numero==0)
{
contadorceros++;
}

if(numero>0)
{
acupositivos=parseInt(acupositivos)+parseInt(numero);
contadorpositivos++;
}

if(numero<0)
{
acunegativos=acunegativos-numero;
}

// Numeros Max. y Min.
if(contador==0)
{
numeromaximo=numero;
numeromaximoletra=letra;
numerominimo=numero;
numerominimoletra=letra
}

if(numero>0)
{
if(contador>0&&numero<numerominimo)
{
numerominimo=numero;   
numerominimoletra=letra; 
}
if(contador>0&&numero>numeromaximo)
{
numeromaximo=numero;
numeromaximoletra=letra;    
}
}else
{
if(numero<0)
{
if(contador>0&&numero>numerominimo)
{
numeromaximo=numero;   
numeromaximoletra=letra; 
}
if(contador>0&&numero<numeromaximo)
{
numerominimo=numero;
numerominimoletra=letra;    
}}}

contador++;
//Numeros Max. y Min.

respuesta=prompt("desea ingresar mas datos?");
}
document.write("numeros pares: "+numeropar+"<br>"+"numeros impares: "+numeroimpar+"<br>"+"cantidad de ceros: "+contadorceros+"<br>"+"promedio positivos: "+acupositivos/contadorpositivos+"<br>"+"suma negativos: "+acunegativos+"<br>"+"numero y letra maximo: "+numeromaximo+numeromaximoletra+"<br>"+"numero y letra minimo: "+numerominimo+numerominimoletra)


}