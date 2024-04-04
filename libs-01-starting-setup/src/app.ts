import { Product } from './product.model';

import 'reflect-metadata';

import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
const products = [
  { title: 'Book2', price: 29.99 },
  { title: 'Book3', price: 19.99 },
  ,
  { title: 'Book4', price: 39.99 },
  ,
  { title: 'Book5', price: 49.99 },
];

const loadedProducts = plainToClass(Product, products);

const newProduct = new Product('', -5);
validate(newProduct).then((error) => {
  if (error.length > 0) {
    console.log('VALIDATIONS ERRORS !');
    console.log(error);
  } else {
    console.log(newProduct.getInformation());
  }
});

for (const product of loadedProducts) {
  console.log(product.getInformation());
}
