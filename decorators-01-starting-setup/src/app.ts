function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);

    console.log(constructor);
  };
}

/*
Normal decorator function
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}
*/
// @Logger We will use this way when we are assigning the decorator
// @Logger('Logging - Person') // we will add parenthesis when we want to add the decorator factories.
/*
function WithTemplate(templateString: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    orignalConstructor: T
  ) {
    return class extends orignalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
          hookElement.innerHTML = templateString;
          hookElement.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('Logging...')
@WithTemplate('<h1>Mayank</h1>', 'app')
class Person {
  name: string = 'Mayank';
  constructor() {
    console.log('Creating person object.' + this.name);
  }
}

const person = new Person();

console.log(person);

*/

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorators');
  console.log(name);
  console.log(descriptor);
  console.log(target);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method Descorator...');

  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator !');
  console.log(target);
  console.log(name);
  console.log(position);
}
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function AutoBind(
  _1: any,
  _2: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  const orignalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFunction = orignalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @AutoBind
  printMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector('button')!;

button.addEventListener('click', printer.printMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function RequiredTitle(target: any, propertyName: string) {}

function PositiveNumber() {}

function validate(object: object) {}

class Course {
  @RequiredTitle
  title: string;
  @PositiveNumber
  price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector('form');

courseForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleElement = document.getElementById('title') as HTMLInputElement;
  const priceElement = document.getElementById('price') as HTMLInputElement;

  const title = titleElement.value;
  const price = +priceElement.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert('Invalid Input');
    return;
  } else {
    console.log(createdCourse);
  }
});
