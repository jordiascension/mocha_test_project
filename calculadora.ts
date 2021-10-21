/* eslint-disable class-methods-use-this */
export default class Calculadora {
    public suma(num1: number, num2: number): number {
        return num1 + num2;
    }

    public resta(num1: number, num2: number): number {
        return num1 - num2;
    }

    public multiplicacion(num1: number, num2: number): number {
        return num1 * num2;
    }

    public division(num1: number, num2: number): number {
        return num1 / num2;
    }
}

const calculadora = new Calculadora();
console.log(calculadora.suma(2, 2));
