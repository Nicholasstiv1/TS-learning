/* eslint-disable */

const name: string = 'Teste';
let age: number = 30;
let test: boolean = true;

// Arrays
let numberArray: Array<number> = [1, 2, 3];
let stringArray: string[] = ['test', 'test1', 'test2'];

// Objects

let person: { name: string; age: number; test?: boolean } = {
  name,
  age,
  test,
};

// Functions

function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;
