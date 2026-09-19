export {};

class Person {
  name: string;
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `name:${this.name} age:${this.age} `;
  }
}

let taro = new Person('Trao', 70);
console.log(taro.profile());
