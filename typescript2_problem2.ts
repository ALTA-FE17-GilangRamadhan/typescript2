function cetakTablePerkalian(number: number): string {
  // your solution code here
  let result: string = "";
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (i * j < 10) {
        result += i * j + "  ";
      } else {
        result += i * j + " ";
      }
    }
    result += "\n";
  }

  return result;
}

console.log(cetakTablePerkalian(9));
