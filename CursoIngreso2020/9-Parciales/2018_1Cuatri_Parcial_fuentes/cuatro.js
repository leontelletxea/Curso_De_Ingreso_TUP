function mostrar()
{
    var n1=prompt("Ingrese un numero","Ejemplo:7");
    var n2=prompt("Ingrese un numero","ejemplo:3");
    var suma=parseInt(n1)+parseInt(n2);
    
    if(n1==n2)
    {
        alert(n1+n2);
    }
    
    if(n1>n2)
    {
        alert(n1-n2);
    }else
    {
    if(n1<n2)     
    {
    alert(suma)  
    }
    }

    if(suma>10)
    {
        alert("La suma "+n1+"+"+n2+"="+suma+" supero el 10")
    }
}
