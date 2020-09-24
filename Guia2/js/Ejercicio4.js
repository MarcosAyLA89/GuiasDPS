"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(_n1, _n2) {
        this.n1 = _n1;
        this.n2 = _n2;
    }
    Calculadora.prototype.Sumar = function () {
        return this.n1 + this.n2;
    };
    Calculadora.prototype.Restar = function () {
        return this.n1 - this.n2;
    };
    Calculadora.prototype.Multiplicar = function () {
        return this.n1 * this.n2;
    };
    Calculadora.prototype.Dividir = function () {
        return this.n1 / this.n2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var persona = new Calculadora(50, 25);
console.log('Numeros ingresados:' + persona.n1 + ' y ' + persona.n2);
console.log('suma: ' + persona.Sumar());
console.log('resta: ' + persona.Restar());
console.log('multiplicacion: ' + persona.Multiplicar());
console.log('división: ' + persona.Dividir());
