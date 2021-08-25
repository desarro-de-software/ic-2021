const MemberStatusService = require("../member-status-service");

const prueba = new MemberStatusService();

const members = [
  { balance: 100, lastPayment: new Date("2021-04-13") },
  { balance: 300, lastPayment: new Date("2020-09-03") },
  { balance: -40, lastPayment: new Date("2021-05-03") },
  { balance: 200, lastPayment: new Date("2020-03-03") },
  { balance: 0, lastPayment: new Date("2021-08-15") },
  {},
  { propiedadQueNoExiste: "algo" }
];

// Los miembros activos son aquellos que tienen un balance mayor o igual a cero y el último pago hecho hace menos de un mes

describe("active members", () => {
  test("active", () => {
    expect(prueba.getActive(members)).toStrictEqual([
      { balance: 0, lastPayment: new Date("2021-08-15") }
    ]);
  });
});
