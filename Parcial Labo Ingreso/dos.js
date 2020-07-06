function mostrar()
{
var desc2;
var desc;
var respuesta="si";
while(respuesta=="si")
{
var peso=prompt("peso");
var precio=prompt("precio");
var validad=prompt("tipo")

if(peso>=10&&peso<1000&&precio>0&&validad=="v"||validad=="a"||validad=="m")
{
  if(peso>=100)
  {
 desc=parseInt(precio)*0.15; 
  }
  
  if(peso>=300)
{
desc2=parseInt(precio)*0.25; 
}

}






respuesta=prompt("desea seguir ingresando numeros?");
}
  alert("precio a pagar "+precio+" precio desc "+precio-desc||precio-desc2);
}
