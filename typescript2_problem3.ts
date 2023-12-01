function makeDiamond(char: string) {
  // your code here
  // your code here
  let huruf: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let angka: number = 0;
  let s = "";
  for (let i: number = 0; i < huruf.length; i++) {
    if (huruf[i] == char) {
      angka += i + 1;
    }
  }
  // upper
  for (let i = 1; i < angka + 1; i++) {
    s += "\n";
    for (let j = 2; j <= angka - i + 1; j++) {
      s += ".";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j == 1 || j == 2 * i - 1) {
        s += `${huruf[i - 1]}`;
      } else {
        s += ".";
      }
    }
    for (let j = 2; j <= angka - i + 1; j++) {
      s += ".";
    }
  }
  // bellow
  for (let i = angka - 1; i > 0; i--) {
    s += "\n";
    for (let j = 2; j <= angka - i + 1; j++) {
      s += ".";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j == 1 || j == 2 * i - 1) {
        s += `${huruf[i - 1]}`;
      } else {
        s += ".";
      }
    }
    for (let j = 2; j <= angka - i + 1; j++) {
      s += ".";
    }
  }
  return s;
}

console.log(makeDiamond("J"));
