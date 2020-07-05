function mostrar()
{       
        var valor=prompt("Ingrese un numero: ");
        var flag=true;
        for(var i=2; i<valor; i++)
    {
        if((valor%i)==0)
        {
         flag=false;
        }
    }
       
    if (flag==true)
    {
        alert(valor+ " es primo")
    }else
    {
    alert(valor+" no es primo"); 
    }
}//FIN DE LA FUNCIÓN