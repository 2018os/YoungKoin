function Odd_or_Even(money) {
  if (money.HaveMoney >= money.batting) {
    // Check money
    money.HaveMoney -= money.batting;
    if (money.userC[0].checked == true) {
      // odd percentage
      money.odd = true;
      money.DiceC = Math.floor(Math.random() * 6 + 1);
      if (money.DiceC % 2 == 0) {
        if (money.DiceC == 6) money.DiceC--;
        else money.DiceC++;
      }
      let ReturnValue = 0;

      const rand = Math.random() * 100;

      const arrPercent = [0.7, 4.3, 25.0, 70.0]; // control percentage (odd)
      let cumulative = 0;

      for (var i = 0; i < 4; i++) {
        cumulative += arrPercent[i];
        if (rand <= cumulative) {
          ReturnValue = 3 - i;
          break;
        }
      }
      switch (ReturnValue) {
        case 3:
          money.batting *= 2;
          break;
        case 2:
          money.batting *= 1.6;
          break;
        case 1:
          money.batting *= 1.4;
          break;
        default:
          money.batting = 0;
          money.DiceC++;
      }
      money.HaveMoney += money.batting;
      money.HaveMoney = money.HaveMoney.toFixed(0);
    } else {
      // even percentage

      let ReturnValue = 0;

      const rand = Math.random() * 100;

      const arrPercent = [1.5, 13.5, 25.0, 60.0]; // control percentage (even)
      let cumulative = 0;

      for (var i = 0; i < 4; i++) {
        cumulative += arrPercent[i];
        if (rand <= cumulative) {
          ReturnValue = 3 - i;
          break;
        }
      }

      switch (ReturnValue) {
        case 3: // x1.8
          money.batting *= 1.8;
          break;
        case 2: // x1.4
          money.batting *= 1.4;
          break;
        case 1: // x1.3
          money.batting *= 1.3;
          break;
        default:
          money.batting = 0;
          if (money.DiceC == 6) money.DiceC--;
          else money.DiceC++;
      }
      money.HaveMoney += money.batting;
      money.HaveMoney = money.HaveMoney.toFixed(0);
    }
    money.batting = 0;

    // if bankrupt
    if (money.HaveMoney <= 0) {
      alert("You're Bankrupt!");
    }
  } else {
    // if lack of money
    alert("You have not enough Money!");
    alert("Your Money : " + money.HaveMoney);
  }
}
