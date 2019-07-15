function Percentage(laddervari) {
  //돈 여부 확인
  if (laddervari.HaveMoney >= laddervari.batting) {
    laddervari.HaveMoney -= laddervari.batting; // call by ref need fix
    if (laddervari.userC[0].checked == true) {
      //홀 선택확률
      let ReturnValue = 0;
      const rand = Math.random() * 100;

      const arrPercent = [0.7, 4.3, 25.0, 70.0]; //확률 조정(홀)
      let cumulative = 0;

      for (var i = 0; i < 4; i++) {
        cumulative += arrPercent[i];
        if (rand <= cumulative) {
          ReturnValue = 3 - i;
          break;
        }
      }

      Money = Money.toFixed(0);
    } else {
      //짝 선택확률
      let ReturnValue = 0;
      const rand = Math.random() * 100;

      const arrPercent = [1.5, 13.5, 25.0, 60.0]; //확률 조정(홀)
      let cumulative = 0;

      for (var i = 0; i < 4; i++) {
        cumulative += arrPercent[i];
        if (rand <= cumulative) {
          ReturnValue = 3 - i;
          break;
        }
      }
      Money = Money.toFixed(0);
    }

    alert("reamin money : " + Money);

    //파산 시)
    if (Money <= 0) {
      alert("You're Bankrupt!");
    }
  } else {
    // 돈이 충분하지 않을 경우
    console.log(Money);
    alert("You have not enough Money!");
    alert("Your Money : " + Money);
  }
}
