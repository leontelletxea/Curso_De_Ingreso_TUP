function mostrar()
{       var cont=0;
        var valor=prompt("Ingrese un numero: ");
        for(var i=1; i<=valor; i++ )
    {
        if((valor%i)==0)
        {
        cont++;
        document.write(i+"<br>");
        }


    }
    document.write("Hay "+cont+" numeros divisores"); 

}//FIN DE LA FUNCIÓN