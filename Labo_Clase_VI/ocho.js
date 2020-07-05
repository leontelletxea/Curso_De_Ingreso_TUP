
function mostrar()
{
var contador=0;
var respuesta="si";
var val1=0;
var val2=0;
var numeropar=0;
var numeroimpar=0;
var ceros=0;
var acumpos=0;
var contpos=0;
var acumneg=0;
var letramax=0;
var numeromax=0;
var numeromin=0;
var letramin=0;

while(respuesta=="si")
{  
    var val1=prompt("Ingrese una letra","Ejemplo:A");
    var val2=prompt("Ingrese un numero entre -100 y 100","Ejemplo:50");
    
    if(contador==0)
    {
    numeromax=val2;
    letramax=val1;
    numeromin=val2;
    letramin=val1;
    }

    contador++;

    if(isNaN(val1))
    {
    letra=val1;
    }
    
    if(val2>-100 && val2<100)
    {
    numero=val2;   
    

    if((val2%2)==0 && val2!=0)
    {
    numeropar++;
    }

    if((val2%3)==0 && val2!=0)
    {
    numeroimpar++;
    }

    if(val2==0)
    {
    ceros++;
    }
    
    if(val2>0 && val2<100 && val2!=0)
    {
    acumpos=acumpos+parseInt(val2);
    contpos++;
    }

    if(val2<0 && val2>-100 && val2!=0)
    {
    acumneg=acumneg+parseInt(val2);
    }

    if(val2>0)
    {
    if(val2<numeromin)
    {
    numeromin=val2;   
    letramin=val1; 
    }

    if(val2>numeromax)
    {
    numeromax=val2;
    letramax=val1;    
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
        letramax=val1;    
        }
    }}

}
    respuesta=prompt("Desea ingresar mas datos?","si");
}
document.write("Numeros pares: "+numeropar+"<br>");
document.write("Numeros impares: "+numeroimpar+"<br>");
document.write("Cantidad de ceros: "+ceros+"<br>");
document.write("Promedio Positivos: "+acumpos/contpos+"<br>");
document.write("Suma negativos: "+acumneg+"<br>");
document.write("Numero max: "+numeromax+" letra "+letramax+"<br>");
document.write("Numero min: "+numeromin+" letra "+letramin+"<br>");

}