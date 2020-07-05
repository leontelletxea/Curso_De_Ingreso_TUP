function CalcularPrecio ()
{
var can=document.getElementById("Cantidad").value;
var mar=document.getElementById("Marca").value;
var iba=document.getElementById("precioDescuento").value;
var porcentaje=parseInt(iba)*0.1;
var porcentaje2=parseInt(iba)+porcentaje;
var desc=parseInt(can)*parseInt(35);

if(can>=6)
    {
    document.getElementById("precioDescuento").value=desc-(desc*0.5);
    }

if(mar=="ArgentinaLuz" && can==5)
{
    document.getElementById("precioDescuento").value=desc-(desc*0.4);
}
else
{
if(mar!="ArgentinaLuz"&& can==5)
    document.getElementById("precioDescuento").value=desc-(desc*0.3);
}

if(can==4 && mar=="ArgentinaLuz" || mar=="FelipeLamparas")
{
    document.getElementById("precioDescuento").value=desc-(desc*0.25);
}

else
{ 
if(mar!="ArgentinaLuz" || mar!="FelipeLamparas" && can==4)
{
    document.getElementById("precioDescuento").value=desc-(desc*0.20);
}
}

if(can==3 && mar=="ArgentinaLuz")
{
    document.getElementById("precioDescuento").value=desc-(desc*0.15);
}

if(can==3 && mar=="FelipeLamparas")
{
    document.getElementById("precioDescuento").value=desc-(desc*0.10);
}
else
{ 
    if(mar!="ArgentinaLuz" && mar!="FelipeLamparas" && can==3)
    {
    document.getElementById("precioDescuento").value=desc-(desc*0.05); 
    }
}

if(iba>120)
{
document.getElementById("precioDescuento").value=porcentaje2;
alert("IIBB Usted pagara "+porcentaje2+" siendo "+porcentaje+" el impuesto agregado");
}

}