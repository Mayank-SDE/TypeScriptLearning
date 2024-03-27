// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: 'Mayank',
//   age: 25,
//   hobbies: ['m', 'a'],
// };

// console.log(person);

// const person1: {
//   role: [number, string];
// } = {
//   role: [2, 'author'],
// };

// person1.role.push('admin');

// console.log(person1);

enum Role {
  ADMIN = 7,
  READ_ONLY = 'Mayank',
  AUTHOR = 9,
}

// now by default the ADMIN = 0 , READ_ONLY =1 , AUTHOR = 2;

console.log(Role.ADMIN);
console.log(Role.READ_ONLY);
console.log(Role.AUTHOR);
