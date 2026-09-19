export {};

namespace Japanese {
	export namespace Tokyo {
		export class Person {
			constructor(public name: string) {}
		}
	}
	export namespace Osaka {
		export class Person {
			constructor(public name: string) {}
		}
	}
}

namespace Einglish {
	export class Person {
		constructor(
			public name: string,
			public lastName: string,
		) {}
	}
}

let me2 = new Japanese.Osaka.Person('oo');
console.log(me2.name);

let me = new Japanese.Tokyo.Person('rr');
console.log(me.name);

let john = new Einglish.Person('John', 'Deacon');
console.log(john);
