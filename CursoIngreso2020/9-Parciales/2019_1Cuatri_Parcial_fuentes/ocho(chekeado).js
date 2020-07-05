function mostrar()
{
var cont=0;
var pares=0;
var ceros=0;
var respuesta="si"
var letra;
var numeromax=0;
var contador=0;
var negativos=0;
var numeromin=0;
var letramin;
var impares=0;
var positivos=0;

    while(respuesta=="si")
{
var val1=prompt("letra");
var val2=prompt("numero");

if(cont==0&&val2<100&&val2>-100)
{
letra=val1;
numeromax=val2;
numeromin=val2;
letramin=val1;
}
cont++;

if(val2<100&&val2>-100)
{


if((val2%2)==0&&val2!=0)
{
pares++;
}

if((val2%3)==0)
{
impares++;
}

if(val2==0)
{
ceros++;
}

if(val2>0)
{
positivos=parseInt(positivos)+parseInt(val2);
contador++;
}

if(val2<0)
{
negativos=negativos-val2;
}

if(val2>0)
{
if(val2<numeromin)
{
numeromin=val2;   
letramin=val1; 
}

if(cont>0&&val2>numeromax)
{
numeromax=val2;
letra=val1;    
}
}else
{if(val2<0)
{
    if(val2>numeromin)
    {
    numeromin=val2;   
    letramin=val1; 
    }

    if(val2<numeromax)
    {
    numeromax=val2;
    letra=val1;    
    }
}}
}
respuesta=prompt("desea seguir ingresando datos?");
}
alert("cantidad pares "+pares+" impares "+impares+" ceros "+ceros+" promedio positivos "+positivos/contador+" negativos -"+negativos+" maximo "+numeromax+letra+ " minimo "+numeromin+letramin)
}
