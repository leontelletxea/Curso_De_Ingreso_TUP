function mostrar()
{
i=1;
var altura=0;
var conaltura=0;
var minaltura=0;
var minsex=0;
var acufem=0;


while(i<6)
{
    var val1=prompt("alturas en centimetros "+i);
    var val2=prompt("validar el sexo "+i);
    if(i==1&&val1>0&&val1<250&&val2=="f"||val2=="m")
    {
    minaltura=val1;
    minsex=val2;
    }
    i++;

    if(val1>0&&val1<250)
    {
    altura=altura+parseInt(val1);
    conaltura++;
    

    if(val1<=minaltura)
    {
    minaltura=val1;
    minsex=val2;
    }

    if(val2=="f"&&val1>190)
    {
    acufem++;
    }
    }
}
document.write("Promedio alturas "+altura/conaltura+"<br>")
document.write("altura minima "+minaltura+" sexo "+minsex+"<br>")
document.write("mujeres con mas de 1,90 "+acufem+"<br>")

}
