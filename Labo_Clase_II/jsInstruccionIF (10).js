function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random =Math.floor(Math.random() *10+1) ;
	if (random>=9)
	{
	alert("Su nota es: " +random + " Excelente")
	}
	else
	{
    if(random>=4)
    {
	alert("Su nota es: " +random + " Aprobo")
	}
	else
	{
	alert("Su nota es: " +random + " Vamos, la proxima se puede")
	}
	}
}//FIN DE LA FUNCIÓN