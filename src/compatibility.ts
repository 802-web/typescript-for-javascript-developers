export {};

let foo: any;
let bar: string = 'typescript';

bar = foo;
console.log(typeof foo);
foo = bar;
console.log(typeof foo);

let fooo: string;
let num: number;
// fooo = num;

let fooliteral: 'lite' = 'lite';
let fooString: string;
fooString = fooliteral;

interface Animal {
	age: number;
	name: string;
}
class Person {
	constructor(
		public age: number,
		public name: string,
	) {}
}

let me: Animal;
me = new Person(34, 'tato');
