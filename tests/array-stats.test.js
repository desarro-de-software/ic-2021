const ArrayStats = require("../array-stats.js");

const prueba = new ArrayStats();

/*describe("array tests", () => {
  test("average", () => {
    expect(prueba.average([1, 2, 3, 5, 8, 11])).toBe(5);
  });
  test("average", () => {
    expect(prueba.average([1, 2, 3, 5, 8, "hola"])).toBe(NaN);
  });
  test("average", () => {
    expect(prueba.average([])).toBe(NaN);
});*/

describe("array tests", () => {
  test("max", () => {
    const resultado = prueba.max([2,1,2,12,21,,3,5,6,7,6])
    expect(resultado).toBe(21);
  });
});
