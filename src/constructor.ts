export {};

class Person {
  constructor(
    public name: string,
    private age: number,
  ) {}
}

const me = new Person('ee', 55);
console.log(me);
