"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(_name, _salary) {
        this.Nombre = _name;
        this.Salario = _salary;
    }
    Empleado.prototype.CalcularSalario = function () {
        return this.Salario - (this.Salario * 0.03 + this.Salario * 0.07);
    };
    return Empleado;
}());
exports.Empleado = Empleado;
var empleado = new Empleado('Marcos', 700);
console.log('Salario sin descuentos:' + empleado.Salario);
console.log('Nombre:' + empleado.Nombre);
console.log('Salario con descuentos:' + empleado.CalcularSalario());
