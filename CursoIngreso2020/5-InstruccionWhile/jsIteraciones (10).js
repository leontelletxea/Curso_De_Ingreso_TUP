function mostrar()
{
	var contador=0;
	var acumneg=0;
	var acumpos=0;
    var contpos=0;
	var valor=0;
	var contpos=0;
	var contneg=0;
	var contpares=0;
	var contceros=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		valor=prompt("Ingrese un numero: ");
		contador++;

		if(valor>0)
		{
		acumpos=parseInt(valor)+parseInt(acumpos);
		contpos++;
		}

		if(valor<0)
		{
		acumneg=parseInt(valor)+parseInt(acumneg);
		contneg++;
		}	

        if(valor==0)
		{
			contceros++;
		}

		if(valor%2==0 && valor!=0)
		{
			contpares++;
		}
		respuesta=prompt("Desea ingresar otro numero? ","si");
		
		if(respuesta=="no")
		{
		var diferencia=parseInt(acumpos)+parseInt(acumneg);
		document.write("1.Suma de negativos: "+acumneg+"<br>")
		document.write("2.Suma de positivos: "+acumpos+"<br>");
		document.write("3.Cantidad de positivos: "+contpos+"<br>");
		document.write("4.Cantidad de negativos: "+contneg+"<br>");
	    document.write("5.Cantidad de ceros: "+contceros+"<br>");
		document.write("6.Cantidad de pares: "+contpares+"<br>");
		if(acumneg==0 && acumpos==0)
		{
		document.write("7.Promedio de positivos: "+0+"<br>");
		document.write("8.Promedio de negativos: "+0+"<br>");		
		}
		else
		{
		document.write("7.Promedio de positivos: "+acumpos/contpos+"<br>");	
	    document.write("8.Promedio de negativos: "+acumneg/contneg+"<br>");	
		}

		document.write("9.Diferencia entre positivos y negativos: "+diferencia+"<br>");
		}
	    }


}//FIN DE LA FUNCIÓN