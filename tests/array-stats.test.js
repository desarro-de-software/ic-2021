const ArrayStats = require("../array-stats.js");

const prueba = new ArrayStats();

describe("array tests", () => {
  test("average", () => {
    expect(prueba.average([1, 2, 3, 5, 8, 11])).toBe(5);
  });
  test("average", () => {
    expect(prueba.average([1, 2, 3, 5, 8, "hola"])).toBe(NaN);
  });
  test("average", () => {
    expect(prueba.average([])).toBe(NaN);
  });
});
