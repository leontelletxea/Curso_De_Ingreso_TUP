function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while (sexo=="f")
{
document.getElementById("Sexo").value="femenino";
break;
}
while (sexo=="m")
{
document.getElementById("Sexo").value="masculino";
break;
}
}
