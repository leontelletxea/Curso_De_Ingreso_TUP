function mostrar()
{
var respuesta="si";
var varonesaprobados=0;
var acumenoresnota=0;
var contadormenoresnota=0
var acuadolescentesnota=0;
var contadoradolescentesnota=0;
var acumayoresnota=0;
var contadormayoresnota=0;
var acufem=0;
var contfem=0;
var acuvar=0;
var contvar=0;

while(respuesta=="si")
{
    do
    { 
    var nombre=prompt("nombre");
    }
    while(!isNaN(nombre))

    do
    {
        var edad=prompt("edad");
    }
    while(isNaN(edad))

    do
    {
        var sexo=prompt("sexo")
    }
    while(sexo!="f"&&sexo!="m")

    do
    {
        var nota=prompt("nota");
    }
    while(isNaN(nota)||nota<1||nota>10)

    if(sexo=="m"&&nota>=6)
    {
        varonesaprobados++;
    }

    if(edad<15)
    {
        acumenoresnota=parseInt(acumenoresnota)+parseInt(nota);
        contadormenoresnota++;
    }

    if(edad>=15&&edad<=17)
    {
        acuadolescentesnota=parseInt(acuadolescentesnota)+parseInt(nota);
        contadoradolescentesnota++;
    }
    
    if(edad>=18)
    {
        acumayoresnota=parseInt(acumayoresnota)+parseInt(nota);
        contadormayoresnota++;
    }

    if(sexo=="f")
    {
    acufem=parseInt(acufem)+parseInt(nota);
    contfem++;
    }

    if(sexo=="m")
    {
    acuvar=parseInt(acuvar)+parseInt(nota);
    contvar++;
    }

    respuesta=prompt("desea continuar ingresando datos?");
}
document.write("varones aprobados: "+varonesaprobados+"<br>");
document.write("promedio de notas de los menores de edad: "+acumenoresnota/contadormenoresnota+"<br>");
document.write("promedio de notas de los adolescentes: "+acuadolescentesnota/contadoradolescentesnota+"<br>");
document.write("promedio de notas de los mayores: "+acumayoresnota/contadormayoresnota+"<br>");
document.write("promedio femenino: "+acufem/contfem+"<br>");
document.write("promedio masculino: "+acuvar/contvar+"<br>");
}
