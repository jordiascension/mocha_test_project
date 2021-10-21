// chai is an assertion library
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';
import Calculadora from './calculadora';

describe('Suma function', () => {
  it('should return 4', () => {
    const calculadora = new Calculadora;
    expect(calculadora.suma(2,2)).to.equal(4);
  });
});

describe('Resta function', () => {
    it('should return 2', () => {
      const calculadora = new Calculadora;
      expect(calculadora.resta(4,2)).to.equal(2);
    });
  });

  describe('Multiplicacion function', () => {
    it('should return 8', () => {
      const calculadora = new Calculadora;
      expect(calculadora.multiplicacion(4,2)).to.equal(8);
    });
  });

  describe('Division function', () => {
    it('should return 5', () => {
      const calculadora = new Calculadora;
      expect(calculadora.division(10,2)).to.equal(5);
    });
  });