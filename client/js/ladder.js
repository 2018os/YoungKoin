let laddervari = {
  ladderC: 0,
  ladderResult,
  hol: false,
  jjak: false,
  ladderSwitch: new Array(),
  userC: document.getElementsByName("choice2"),
  userCh: document.getElementsByName("choice3"),
  userCtoStr,
  HaveMoney: 1000, // 자본
  batting
};
function ladderCheck() {
  document.write(ladderC);
}

function laddergo() {
  batting = prompt("배팅할 금액 입력 (reamin money :" + HaveMoney + ")"); // 배팅 금액
  let checkagain = confirm("Are you sure?");

  if (checkagain == false) {
    alert("canceled");
  } else {
    ladderC = Math.floor(Math.random() * 10 + 1);

    // 사다리 방향 조정
    if (userC[0].checked == true) {
      // 홀 선택
      userCtoStr = "홀";
      if (ladderC % 2 == 0) {
        Percentage(laddervari);
        alert("remain Money : " + HaveMoney);
        ladderResult = "홀";
      } else {
        Percentage(laddervari);
        ladderResult = "짝";
      }
    } else {
      // 짝 선택
      userCtoStr = "짝";
      if (ladderC % 2 == 0) {
        ladderResult = "짝";
      } else {
        ladderResult = "홀";
      }
    }

    console.log(ladderC);
    alert("your choice is " + userCtoStr);
    if (ladderResult == userCtoStr) alert("Correct");
    else alert("Failed");
  }
}
