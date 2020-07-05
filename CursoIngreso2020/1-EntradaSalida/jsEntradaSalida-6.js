/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numuno = document.getElementById("numeroUno").value;
var numdos = document.getElementById("numeroDos").value;
resul = parseInt(numuno)+ parseInt(numdos);
alert("La suma da: " +resul);
}

