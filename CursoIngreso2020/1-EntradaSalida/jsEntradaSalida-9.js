/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var numuno;
var numdos;
    var numuno = document.getElementById("sueldo").value; 
    var numdos= resul = parseInt(numuno) * 1.1;
    document.getElementById("resultado").value= resul;	
}
