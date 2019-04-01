function button1_click() {
  let value = document.getElementsByName("Hol");
  console.log(value[0].checked);
  let inputC = prompt("홀? 짝?"); //유저 홀짝선택

  let bool = confirm("Are you Sure?"); //의사 확인

  if (bool == false) {
    // 선택 취소
  } else {
    //홀짝 확률 계산
    if (inputC == "홀") {
      //홀 선택시(배수 2배, 1.5배 1.2배)
      let ReturnValue = 0;
      const rand = Math.random() * 100;

      const arrPercent = [0.7, 14.3, 25.0, 60.0]; //확률 조정(홀)
      let cumulative = 0;

      for (var i = 0; i < 4; i++) {
        cumulative += arrPercent[i];
        if (rand <= cumulative) {
          ReturnValue = 3 - i;
          break;
        }
      }
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
    } else if (inputC == "짝") {
      //짝 선택시(배수 1.6배 1.3배 1.1배)
      let ReturnValue = 0;
      const rand = Math.random() * 100;

      const arrPercent = [1.5, 13.5, 35.0, 50.0]; //확률 조정(짝)
      let cumulative = 0;

      for (var i = 0; i < 4; i++) {
        cumulative += arrPercent[i];
        if (rand <= cumulative) {
          ReturnValue = 3 - i;
          break;
        }
      }
      if (ReturnValue >= 1) {
        switch (ReturnValue) {
          case 3: // 1.6
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
    } else {
      alert("Insert 홀 or 짝 please");
    }
  }
}
