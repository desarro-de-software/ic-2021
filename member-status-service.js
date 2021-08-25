const dayjs = require("dayjs");

class MemberStatusService {
  getDebtors(members) {
    const threeMonthsAgo = dayjs(new Date()).subtract(2, "months");
    return members.filter(
      (member) => member.balance < 0 && member.lastPayment > threeMonthsAgo
    );
  }

  getInactive(members) {
    const oneYearAgo = dayjs(new Date()).subtract(1, "years");
    return members.filter((member) => member.lastPayment > oneYearAgo);
  }

  getActive(members) {
    const oneMonthAgo = dayjs(new Date()).subtract(1, "months");
    return members.filter(
      (member) => member.balance >= 0 && member.lastPayment > oneMonthAgo
    );
  }
}

module.exports = MemberStatusService;
