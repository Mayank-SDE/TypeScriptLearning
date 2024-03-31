// const names: Array<string> = ['Mayank', 'Tushar'];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done.');
//   }, 1000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

// Creating an generic function

// function mergeObject<N extends object, U extends object>(a: N, b: U) {
//   return Object.assign({}, a, b);
// }

// const resultObject = mergeObject<
//   { name: string; age: number },
//   { hobbies: string }
// >({ name: 'Mayank', age: 25 }, { hobbies: 'Playing Chess' });

// console.log(resultObject);

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItems(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItems('Mayank');

textStorage.addItems('Choudhary');

textStorage.addItems('Tushar');

textStorage.addItems('Choudhary');

textStorage.removeItem('Choudhary');

console.log(textStorage.getItems());
