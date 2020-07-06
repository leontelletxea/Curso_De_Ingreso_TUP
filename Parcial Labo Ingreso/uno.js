
function mostrar()
{
i=0;
var tipovalidado;
var preciovalidado=0;
var unidadesval=0;
var fabricanteval;
var marcaval;
var unidadesmayor;
var fabricantemay;
var jaboncont=0;

	while(i<5)
	{
	var val=prompt("producto");
	var precio=prompt("precio");
	var unidades=prompt("unidades");
	var marca=prompt("marca");
	var fabricante=prompt("fabricante");
	var unidadesmay=0;
	if(i==0)
	{
	preciovalidado=precio;
	marcaval=marca;
	fabricanteval=fabricante;
	unidadesmay=unidades;
	}

    i++;
	if(val=="barbijo"||val=="jabon"||val=="alcohol");
    {
	tipovalidado=val;
	}

	if(val=="barbijo"&&precio>preciovalidado)
	{
		unidadesval=unidades;
		fabricanteval=fabricante;
		marcaval=marca;
		fabricantemay=fabricante;
	}

	if(precio>=100&&precio<=300)
	{
    preciovalidado=precio;
	}

	if(unidades>0&&unidades<=1000)
    {
    unidadesval=unidades;
     
	if (unidades>unidadesmay)
	{
	fabricantemay=fabricante;
	}

	}
	
	if(val=="jabon")
	{
    jaboncont++;
	}
	
    }
	alert("barbijo mas caro "+marcaval+" unidades "+unidadesval+" fabricante "+fabricanteval+" fabricante con mas unidades "+fabricantemay+" cantidad de jabon "+jaboncont);
}
