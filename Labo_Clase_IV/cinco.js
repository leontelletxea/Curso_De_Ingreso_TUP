function mostrar()
{
var planet=prompt("Planeta","Ingrese un planeta");
switch(planet)
{ 
case "tierra":
alert("aca vivimos")
break;
case "mercurio":
case "venus":
case "marte":
case "jupiter":
alert(" acá hace más calor")
break;
case "saturno":
case "urano":
case "neptuno":
case "pluton":
alert(" acá hace más frio")    
break;
default:alert("El planeta no existe")
}




 
}
