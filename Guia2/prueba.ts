//Funcion que recibe un tipo de dato DATE
//Luego retorna un string

function MostrarCiclo(fecha:Date):string
{

var año:number=fecha.getFullYear();
var mes:number=fecha.getMonth();
var n:number=0;
if(mes<7)
{
n=1;
}
else
{
n=2;
}
var ciclo:string;
ciclo=n+" "+año;
return ciclo;
}
//se asigna un valor de tipo string para la fecha
var fecha:string;
fecha="8/16/2020";
//luego se convierte el tipo dato DATE
 var datefech:Date=new Date(fecha);
//se imprime
console.log(MostrarCiclo(datefech));