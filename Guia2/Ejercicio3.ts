export class Empleado {
    Nombre:string;
    Salario:number;

    constructor(_name:string, _salary:number) {
    this.Nombre = _name;
    this.Salario =_salary;
    }

    CalcularSalario():number{
        return this.Salario-(this.Salario*0.03+this.Salario*0.07);
    }
   }
const empleado=new Empleado('Marcos',700);

console.log('Salario sin descuentos:'+empleado.Salario);
console.log('Nombre:'+empleado.Nombre);   
console.log('Salario con descuentos:'+empleado.CalcularSalario());

