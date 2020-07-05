function mostrar()
{

for(var i=0; ; i++)
{
    var valor=prompt("Ingrese un numero: ")
    alert("Usted ingreso: "+valor);
    if(valor==9)
    {
        alert("Fin del programa")
        break;
    }
}
}