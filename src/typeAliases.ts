export {};

type Oji = string;
let ss: string = 'ee';
let ff: Oji = 'r';

const example = {
  name: 'ee',
  age: 2,
};

type Example = {
  name: string;
  age: number;
};

const example2: Example = {
  name: 'ee',
  age: 2,
};

type Example2 = typeof example;
