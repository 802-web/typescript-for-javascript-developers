export {};

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

let taro = new Person('TARO', 33);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['tt', 44];

const tt = new Person(...profile);

console.log(tt);

type MyConstructorParameters<T extends abstract new (...args: any) => any> =
	T extends abstract new (...args: infer P) => any ? P : never;
