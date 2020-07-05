/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numuno = document.getElementById("numeroUno").value;
    var numdos = document.getElementById("numeroDos").value;
    resul = parseInt(numuno) + parseInt(numdos);
    alert("La operacion da: " +resul);
}

function restar()
{
	var numuno = document.getElementById("numeroUno").value;
    var numdos = document.getElementById("numeroDos").value;
    resul = parseInt(numuno) - parseInt(numdos);
    alert("La operacion da: " +resul);	
}

function multiplicar()
{ 
	var numuno = document.getElementById("numeroUno").value;
    var numdos = document.getElementById("numeroDos").value;
    resul = parseInt(numuno) * parseInt(numdos);
    alert("La operacion da: " +resul);	
}

function dividir()
{
	var numuno = document.getElementById("numeroUno").value;
    var numdos = document.getElementById("numeroDos").value;
    resul = parseInt(numuno) / parseInt(numdos);
    alert("La operacion da: " +resul);	
}

