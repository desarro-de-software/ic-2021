const MemberStatusService = require("../member-status-service");

const members = [
  { balance: 100, lastPayment: new Date("2021-04-13") },
  { balance: 300, lastPayment: new Date("2020-09-03") },
  { balance: -40, lastPayment: new Date("2021-05-03") },
  { balance: 200, lastPayment: new Date("2020-03-03") }
];

const prueba = new MemberStatusService();

//ToDo 
describe("array tests", () => {
  test("average", () => {
    expect(1).toBe(1);
  });
});
