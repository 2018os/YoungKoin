function button2_click() {
  // let arr = [
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0]
  // ];
  let arr = new Array(
    new Array(5).fill(0),
    new Array(5).fill(0),
    new Array(5).fill(0),
    new Array(5).fill(0),
    new Array(5).fill(0)
  );
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let ReturnValue = 0;
      const rand = Math.random() * 100;

      const arrPercent = [45.0, 55.0];
      arr[i][j] = Math.random() * 1;
    }
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      console.log(arr[i][j]);
    }
  }
}
