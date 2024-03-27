interface Greetable {
  name: string;
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
const user1 = new A('Mayank');

user1.greet('Rock On !');

/*
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
