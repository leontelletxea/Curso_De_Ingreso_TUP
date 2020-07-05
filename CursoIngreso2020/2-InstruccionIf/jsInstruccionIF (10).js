function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random =Math.floor(Math.random() *10+1) ; 
	 
alert(random);

if(random>=9)
{
	alert("EXCELENTE")
}
if(random>=4)
{	
	alert("APROBÓ")
}
if(random<4)
{
    alert("Vamos, la proxima se puede")
}
	



}