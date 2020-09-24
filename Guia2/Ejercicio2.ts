export interface persona
{
nombre:string,
poderes:string[],
}


let persona1:persona=
{
    nombre:'Peter Parker',
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
}
console.log('Nombre:');
console.log(persona1.nombre);
console.log('Poderes:');
console.log(persona1.poderes[0]);
console.log(persona1.poderes[1]);
console.log(persona1.poderes[2]);
console.log(persona1.poderes[3]);

