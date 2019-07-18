let money = {
  HaveMoney: 1000, // user money
  batting: 0,
  ladderC: 0,
  userC: document.getElementsByName("choice3")
};

let ladderResult = "NULL", // result of ladder
  odd = false,
  even = false,
  ladderSwitch = new Array(), // not use variable need fix
  userCh = document.getElementsByName("choice2"),
  userCtoStr = "NULL";

function ladderCheck() {
  document.write(ladderC);
}

function laddergo() {
  money.batting = prompt(
    "Insert Batting Money (reamin money :" + money.HaveMoney + ")"
  ); // money of batting (user input)
  let checkagain = confirm("Are you sure?");

  if (checkagain == false) {
    alert("Canceled");
  } else {
    ladderC = Math.floor(Math.random() * 10 + 1);

    // control direction of ladder
    if (money.userC[0].checked == true) {
      // Choice odd
      userCtoStr = "odd";
      alert("Your choice is " + userCtoStr);
      Percentage(money); // apply percentage & decide odd or even
    } else {
      // Choice even
      userCtoStr = "even";
      alert("Your choice is " + userCtoStr);
      Percentage(money);
    }
    console.log(ladderC);

    // if (ladderResult == userCtoStr) alert("Correct");
    // else alert("Failed");
  }

  //if (ladderC % 2 == 0) {  algorithm odd or even check
}
