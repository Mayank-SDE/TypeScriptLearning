function add(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

console.log(add(50, 40, 'as-number'));

console.log(add('50', 'a', 'as-text'));
