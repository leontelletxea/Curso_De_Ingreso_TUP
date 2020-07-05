/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numuno = document.getElementById("numeroDividendo").value;
    var numdos = document.getElementById("numeroDivisor").value;
    resul = parseInt(numuno) % parseInt(numdos);
    alert("La operacion da: " +resul);
}
