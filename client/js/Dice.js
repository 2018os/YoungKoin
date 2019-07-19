let money = {
  HaveMoney: 5000, // user money
  batting: 0, // user input batting money
  DiceC: 0, // dice number var
  odd: false,
  even: false,
  userC: document.getElementsByName("choice3") // user input odd or even
};

let diceResult = "NULL", // Result of Game
  userCtoStr = "NULL";

function Dicego() {
  money.batting = prompt(
    "Insert Batting Money (reamin money :" + money.HaveMoney + ")"
  ); // money of batting (user input)
  let checkagain = confirm("Are you sure?");

  if (checkagain == false) {
    alert("Canceled");
  } else {
    Odd_or_Even(money);
    batting = 0;
    DiceC = 0;
    console.log(money.DiceC);
  }
}
