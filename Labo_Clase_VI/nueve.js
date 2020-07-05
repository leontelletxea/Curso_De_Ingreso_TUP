function mostrar()
{
    var contador=0;
    var respuesta="si";
    var contadorpes=0;
    var acupes=0;
    var tempar=0;
    var marcmax;
    var contemp=0;


    while(respuesta=="si")
    { 
    var val1=prompt("marca del producto");
    var val2=prompt("peso del producto");
    var val3=prompt(" temperatura de almacenamiento");
    
    if(contador==0)
    {
    var pesomax=val2;
    var pesomin=val2;    
    }
    contador++;

    if(val2>=1&&val2<=100)
    {
    acupes=acupes+val2;
    contadorpes++;
    }

    if(val2<pesomin)
    {
    pesomin=val2;   
    }

    if(val2>pesomax)
    {
    pesomax=val2; 
    marcmax=val1

    }

    if(val3>-30&&val3<30)
    {
    if((val3)%2==0)
    {
    tempar++;
    }
    if(val3<0)
    {
    contemp++;
    }
    }



 

    respuesta=prompt("Desea ingresar mas datos?","si");
    }
    document.write("temperaturas pares: "+tempar+"<br>");
    document.write("peso max: "+pesomax+" marca "+marcmax+"<br>");
    document.write("temperaturas a menos de 0: "+contemp)
}
