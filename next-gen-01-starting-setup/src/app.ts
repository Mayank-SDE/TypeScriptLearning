// Code goes here!

const printOutput: (a: number, b: number) => number = (a, b) => a + b;

console.log(printOutput(10, 20));

let arr = ['a', 'b', 'c'];

let brr = ['d', 'e'];

brr.push(...arr);

console.log(arr);

const add = (...numbers: number[]) => {
  let result = numbers.reduce((prev, num) => prev + num, 0);

  return result;
};

console.log(add(1, 2, 3, 4, 5, 6, 7, 8));

const person = {
  a: 'Mayank',
  age: 25,
};

const { a: nam, age: umar } = person;

console.log(nam, umar);
