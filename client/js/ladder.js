function laddergo() {
  let count, ladderC;
  let hol = false;
  let jjak = false;
  let countArr = new Array();
  let userC;

  ladderC = Math.floor(Math.random() * 10 + 1);

  for (let i = 0; i < ladderC; i++) {
    count = Math.floor(Math.random() * 2);
    countArr[i] = count;
  }

  //choice right
  if (userC == "right") {
  }

  //choice left
  if (userC == "left") {
  }

  console.log(countArr);

  if (hol == true) return "홀";
  else return "짝";
}
