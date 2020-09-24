export class Rombo {
    DiagonalVertical:number;
    DiagonalHorizontal:number;

    constructor(_diagonalV:number, _DiagonalH:number) {
    this.DiagonalVertical = _DiagonalH;
    this.DiagonalHorizontal =_diagonalV;
    }

    CalcularArea():number{
       return this.DiagonalHorizontal*this.DiagonalVertical;
    }
   }

console.log(new Rombo(30,40).CalcularArea());



   