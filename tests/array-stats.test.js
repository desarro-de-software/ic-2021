const ArrayStats = require("../array-stats.js");

const prueba = new ArrayStats();

describe("array tests", () => {
  test("average", () => {
    expect(prueba.average([1, 2, 3, 5, 8, 11])).toBe(5);
  });
});



describe('array-stats median tests', ()=>{
  test('Happy path', ()=>{
    const res = prueba.median([1, 2, 3, 4, 5]);
    expect(res).toBe(3);
  });
  test('string array', ()=>{
    const res = prueba.median(['hola', 'asdas', 'msn']);
    expect(res).toThrow(Error);
  });
  test('mixed array', ()=>{
    const res = prueba.median([1, 'hola', 4, 'asdfg', 5]);
    expect(res).toThrow(Error);
  });
  test('empty array', ()=>{
    const res = prueba.median([]);
    expect(res).toThrow(Error);
  });
  test('even length', ()=>{
    const res = prueba.median([1, 2, 4, 5]);
    expect(res).toBe(3);
  });
  test('odd length', ()=>{
    const res = prueba.median([1, 2, 4, 5, 6]);
    expect(res).toBe(4);
  });
  test('disordered array', ()=>{
    const res = prueba.median([5, 2, 9, 0, -1, 8, -25]);
    expect(res).toBe(2);
  });
});
