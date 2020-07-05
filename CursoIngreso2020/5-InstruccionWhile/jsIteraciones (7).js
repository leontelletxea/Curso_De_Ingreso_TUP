
function mostrar()
{
    var valor=0;
	var contador=0;
	var acumulador=0;
	var respuesta="Si";

	while(respuesta=="Si")
	{contador++
valor=prompt("Ingrese un numero: ");
respuesta=prompt("Desea ingresar otro numero? ","Si");
acumulador=acumulador+parseInt(valor);
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;	
}


}//FIN DE LA FUNCIÓN