let ReturnValue = 0;

function Percentage(money) {
  if (money.HaveMoney >= money.batting) {
    // Check money
    money.HaveMoney -= money.batting; // call by ref need fix
    if (money.userC[0].checked == true) {
      // odd percentage
      alert(money.HaveMoney);

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
      money.HaveMoney += money.batting * 1.5;
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
      money.HaveMoney += money.batting * 1.5;
      money.HaveMoney = money.HaveMoney.toFixed(0);
    }

    alert("reamin money : " + money.HaveMoney);

    // if bankrupt
    if (money.HaveMoney <= 0) {
      alert("You're Bankrupt!");
    }
  } else {
    // if lack of money
    console.log(money.HaveMoney);
    alert("You have not enough Money!");
    alert("Your Money : " + money.HaveMoney);
  }
}
