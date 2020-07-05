function mostrar()
{
switch(prompt("Ingrese un planeta del sistema solar:","Ejemplo: tierra"))
{
    case "tierra":
    alert("aca vivimos");
    break;
    case "mercurio":
    case "venus":
    case "marte":
    case "jupiter":
    alert("aca hace mas calor");
    break;
    case "saturno":
    case "urano":
    case "neptuno":
    case "pluton":
    alert("aca hace mas frio")
    break;
    default:
    alert("no es un planeta")
}
}
