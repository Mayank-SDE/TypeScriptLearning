const person = {
  id: 'd1',
  firstName: 'Mayank',
  lastName: 'Choudhary',
};

console.log(person?.lastName);

// // Code goes here!

// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: 'mayank',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };

// type Combinable = string | number;

// type Numerical = boolean | number;

// type Univwersal = Combinable & Numerical;

// console.log(typeof e1);

// interface ErrorContainer {
//   [props: string]: string;
// }

// const object1: ErrorContainer = {
//   email: 'Not a valid email',
//   username: 'Must start with the capital character',
// };

// function add(a: number, b: number): number;
// function add(a: string, b: string): string {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// console.log(add(2, 5));
// console.log(add('mayank', ' Choudhary'));
