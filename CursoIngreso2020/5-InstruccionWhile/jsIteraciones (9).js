
function mostrar()
{

	var valor=0;
	var minimo=0;
	var maximo=0;
	// declarar variables
	
	var respuesta='Si';	
valor=prompt("Ingrese un numero: ");
minimo=valor;
maximo=valor;
respuesta=prompt("Desea ingresar otro numero? ","Si");
while(respuesta=="Si")
{
valor=prompt("Ingrese un numero: ");

if(valor>maximo)
{
maximo=valor;
}
if(valor<minimo)
{
minimo=valor;

}
respuesta=prompt("Desea ingresar otro numero? ","Si");
if(respuesta!="Si")
{
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
}
}





}//FIN DE LA FUNCIÓN