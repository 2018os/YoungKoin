function button1_click() {
  let value = document.getElementsByName("Hol");

  let checkagain = confirm("Are you sure?");

  if (checkagain == false) {
    //선택 취소
  } else {
    if (value[0].checked == true) {
      //홀 선택
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
      console.log(rand);
      if (ReturnValue >= 1) {
        switch (ReturnValue) {
          case 3: // 2배
            alert("jackpot! x2");
            break;
          case 2: // 1.5배
            alert("correct! x1.5");
            break;
          case 1: // 1.2배
            alert("correct! x1.2");
            break;
          default:
            alert("System Error");
        }
      } else {
        alert("Fail");
      }
    } else {
      //짝 선택
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

      console.log(rand);
      if (ReturnValue >= 1) {
        switch (ReturnValue) {
          case 3: // 1.6배
            alert("jackpot! x1.6");
            break;
          case 2: // 1.3배
            alert("correct! x1.3");
            break;
          case 1: // 1.1배
            alert("correct! x1.1");
            break;
          default:
            alert("System Error");
        }
      } else {
        alert("Fail");
      }
    }
  }
}
