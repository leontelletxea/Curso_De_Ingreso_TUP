function mostrar()
{       var cont=0;
        var valor=prompt("Ingrese un numero: ");
        for(var i=1; i<=valor; i++ )
    {
        if((i%2)==0)
        {
        cont++;
        document.write(i+"<br>");
        }


    }
    document.write("Hay "+cont+" numeros pares"); 

}//FIN DE LA FUNCIÓN