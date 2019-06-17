let count,
  ladderC = 0,
  lastposition,
  posiCount = false;
let hol = false;
let jjak = false;
let countArr = new Array();
let userC = document.getElementsByName("choice2");

startAlert = function() {
  let i = 0;
  playAlert = setInterval(function() {
    document.write(i + 1 + " 번째 사다리<br>");
    if (posiCount == false) {
      if (countArr[i] == 1) {
        document.write("go Right<br>");
        posiCount = true;
      }
    } else {
      if (countArr[i] == 1) {
        document.write("go Left<br>");
        posiCount = false;
      }
    }

    if (countArr[i] == 0) {
      document.write("Go Straight<br>");
    }
    i++;
    if (i >= ladderC || ladderC == 0) {
      //사다리 미생성 시
      if (ladderC == 0) {
        alert("사다리 생성을 해주세요");
        location.reload();
        stopAlert();
      }
      stopAlert();
    }
  }, 1000);
};

stopAlert = function() {
  clearInterval(playAlert);
};

function laddergo() {
  ladderC = Math.floor(Math.random() * 10 + 1);

  for (let i = 0; i < ladderC; i++) {
    count = Math.floor(Math.random() * 2);
    countArr[i] = count;
  }

  for (let i = 0; i < ladderC; i++) {
    //사다리 방향 조정
    if (posiCount == false) {
      if (countArr[i] == 1) {
        lastposition = "right";
        posiCount = true;
      }
    } else {
      if (countArr[i] == 1) {
        lastposition = "left";
        posiCount = false;
      }
    }
  }

  alert(lastposition);

  console.log(countArr);
  hol = true;

  if (hol == true) return "홀";
  else return "짝";
}
