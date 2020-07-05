function mostrar()
{
//tomo la edad  
if(document.getElementById("edad").value >=13 && document.getElementById("edad").value <=17)
{
    edad= alert("Usted es adolescente");   
}

if(document.getElementById("edad").value>=18)
{
    edad= alert("Usted es mayor de edad");
}
if(document.getElementById("edad").value <13)
{
    alert("Usted es un niño")
}



}//FIN DE LA FUNCIÓN