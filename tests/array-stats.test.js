const ArrayStats = require("../array-stats.js");

const prueba = new ArrayStats();

describe("array tests", () => {
  test("average", () => {
    expect(prueba.average([1, 2, 3, 5, 8, 11])).toBe(5);
  });
});


//PRUEBA DE FEDE ===================================================================================
/*
min(values) {
    return values.reduce((min, val) => (val < min ? val : min), values[0]);
  }
*/ 

describe('Prueba de array', ()=>{
  
  test('numero minimo', ()=>{
        const minimo = prueba.min([1,2,3,4,5]); 
        expect(minimo).toBe(1);  
        
    });
    test('varios 0', ()=>{
      const negativo = prueba.min([-1,0,1]) 
      expect(negativo).toBe(-1);
    });
 
});