interface Named1 {
  name: string;
  outputString?: string;
}
class A1 implements Named1 {
  constructor(public name: string) {}
}

interface AddFnInterface {
  (a: number, b: number): number;
}

let addInterface: AddFnInterface;

addInterface = (a: number, b: number) => {
  return a + b;
};

console.log(addInterface(50, 100));

type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};

console.log(add(10, 20));

interface Named {
  name: string;
}
interface Greetable extends Named {
  greet(message: String): void;
}

class A implements Greetable {
  name: string;
  age = 25;
  constructor(n: string) {
    this.name = n;
  }
  greet(message: string) {
    console.log('hi there ' + message + '. My self ' + this.name);
  }
}
const user1: Greetable = new A('Mayank');

user1.greet('Rock On !');

interface Person {
  name: string;
  age: number;

  greet(message: string): void;
}

/*

let user1: Person;

user1 = {
  name: 'mayank',
  age: 25,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name + ', my age is ' + this.age);
  },
};

user1.greet('Hi there ');
*/
