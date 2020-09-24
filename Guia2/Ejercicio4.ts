export class Calculadora {
    n1:number;
    n2:number;

    constructor(_n1:number, _n2:number) {
    this.n1 = _n1;
    this.n2 =_n2;
    }
    Sumar():number{
        return this.n1+this.n2; 
    }
    Restar():number{
        return this.n1-this.n2;
    }
    Multiplicar():number{
        return this.n1*this.n2;
    }
    Dividir():number{
        return this.n1/this.n2;
    }
   }
const persona=new Calculadora(50,25);
console.log('Numeros ingresados:'+persona.n1 +' y '+persona.n2);
console.log('suma: '+persona.Sumar());
console.log('resta: '+persona.Restar());
console.log('multiplicacion: '+persona.Multiplicar());
console.log('división: '+persona.Dividir());
