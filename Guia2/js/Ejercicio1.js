"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rombo = void 0;
var Rombo = /** @class */ (function () {
    function Rombo(_diagonalV, _DiagonalH) {
        this.DiagonalVertical = _DiagonalH;
        this.DiagonalHorizontal = _diagonalV;
    }
    Rombo.prototype.CalcularArea = function () {
        return this.DiagonalHorizontal * this.DiagonalVertical;
    };
    return Rombo;
}());
exports.Rombo = Rombo;
console.log(new Rombo(30, 40).CalcularArea());
