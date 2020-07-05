/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numuno;
    var numdos;
        var numuno = document.getElementById("importe").value; 
        var numdos= resul = parseInt(numuno) * 0.75;
        document.getElementById("resultado").value= resul;	
    }	

