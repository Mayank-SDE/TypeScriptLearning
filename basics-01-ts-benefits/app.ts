// function add(input1: number, input2: number): number {
//   return input1 + input2;
// }

// function printResult(num: number): void {
//   console.log('Result is ' + num);
// }

// printResult(add(10, 20));

function addTwoNumber(
  num1: number,
  num2: number,
  callbackFunction: (num: number) => number
) {
  const result = callbackFunction(num1 + num2);

  console.log(result);
}

addTwoNumber(10, 20, (num: number) => num);
