function mostrar()
{
	var respuesta="si"
	var contador=0;
	var casadomasjovenedad=0;
	var casadomasjovennombre=0;
	var pasajeromasviejoedad=0;
	var pasajeromasviejonombre=0;
	var pasajeromasviejosexo=0;
	var contadormujerescasadas=0;
	var contadormujeres=0;
	var acumuladormujeres=0;
	var acumuladorvarones=0;
	var contadorvarones=0;

	while(respuesta=="si")
	{
	
	var nombre=prompt("nombre");
	
	do
	{
	var edad=prompt("edad");
	}
	while(isNaN(edad)||edad<18)
	
	do
	{
	var sexo=prompt("sexo");
	}
	while(sexo!="f"&&sexo!="m")
	
	do
	{
	var estadocivil=prompt("estado civil");
	}
	while(estadocivil!="soltero"&&estadocivil!="casado"&&estadocivil!="viudo"&&estadocivil!="casada"&&estadocivil!="viuda")
	
	if(contador==0&&estadocivil=="casado"&&sexo=="m")
	{
	casadomasjovenedad=edad;
	casadomasjovennombre=nombre
	}

	if(contador>0&&estadocivil=="casado"&&sexo=="m"&&edad<casadomasjovenedad)
	{
	casadomasjovenedad=edad;
	casadomasjovennombre=nombre
	}

	if(contador==0)
	{
	pasajeromasviejoedad=edad;
	pasajeromasviejonombre=nombre
	pasajeromasviejosexo=sexo;
	}

	if(contador>0&&edad>pasajeromasviejoedad)
	{
	pasajeromasviejoedad=edad;
	pasajeromasviejonombre=nombre
	pasajeromasviejosexo=sexo;
	}

	if(sexo=="f"&&estadocivil=="viuda"||estadocivil=="casada")
	{
	contadormujerescasadas++;
	}
	
	if(sexo=="f")
	{
	acumuladormujeres=parseInt(acumuladormujeres)+parseInt(edad);
	contadormujeres++;
	}

	if(sexo=="m"&&estadocivil=="soltero")
	{
	acumuladorvarones=parseInt(acumuladorvarones)+parseInt(edad);
	contadorvarones++;
	}

	contador++;
	respuesta=prompt("desea continuar ingresando datos?");  
	}
    alert("casado mas joven: "+casadomasjovennombre+" pasajero mas viejo: "+pasajeromasviejosexo+" cantidad de mujeres casadas o viudas: "+contadormujerescasadas+" promedio de edad entre mujeres: "+acumuladormujeres/contadormujeres+" promedio de edad varones solteros: "+acumuladorvarones/contadorvarones)
}