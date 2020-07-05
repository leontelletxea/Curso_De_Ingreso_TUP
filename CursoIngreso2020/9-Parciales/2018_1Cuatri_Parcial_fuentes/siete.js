function mostrar()
{
    var acumulador=0;
    var contador=0;
    var notabaja=0;
    var sexobajo;
    var notahombre=0;
    var con=0;

    for(var i=1;i<6;i++)
    {
        var nota=prompt("nota "+i);
        var sexo=prompt("sexo "+i);

        if(con==0&& nota>0&& nota <=10)
        {
        notabaja=nota;
        sexobajo=sexo;
        }

        con++;


        if(nota>0&& nota <=10 &&sexo=="f"||sexo=="m")
        {
        acumulador=parseInt(acumulador)+parseInt(nota);
        contador++;
        
        if(nota<=notabaja)
        {
        notabaja=nota;
        sexobajo=sexo;
        }
        }


        if(nota>=6&& nota <=10 &&sexo=="m")
        {
        notahombre++;
        }


    }    
    alert("promedio notas "+acumulador/contador+"nota mas baja "+notabaja+" sexo "+sexobajo+" hombres >=6: "+notahombre);
}
