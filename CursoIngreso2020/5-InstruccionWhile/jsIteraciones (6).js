  
function mostrar()
{

	var contador=0;
	var acumulador=0;
	var i=0;
	while (i<5)
	{
	var contador = parseInt(prompt("Ingrese el numero: "+i));
	var acumulador = acumulador + contador;
	i++;
	document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/5;
	}


}//FIN DE LA FUNCIÓN