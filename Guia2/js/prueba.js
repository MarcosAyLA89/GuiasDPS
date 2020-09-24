"use strict";
//Funcion que recibe un tipo de dato DATE
//Luego retorna un string
function MostrarCiclo(fecha) {
    var año = fecha.getFullYear();
    var mes = fecha.getMonth();
    var n = 0;
    if (mes < 7) {
        n = 1;
    }
    else {
        n = 2;
    }
    var ciclo;
    ciclo = n + " " + año;
    return ciclo;
}
//se asigna un valor de tipo string para la fecha
var fecha;
fecha = "8/16/2020";
//luego se convierte el tipo dato DATE
var datefech = new Date(fecha);
//se imprime
console.log(MostrarCiclo(datefech));
