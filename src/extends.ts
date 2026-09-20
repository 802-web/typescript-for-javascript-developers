export {};

class Animal {
	constructor(public name: string) {}
	run() {
		return 'run';
	}
}

class Lion extends Animal {
	public speed: number;
	constructor(
		public name: string,
		speed: number,
	) {
		super(name);
		this.speed = speed;
	}

	run(): string {
		return `${super.run()} ${this.speed}`;
	}
}
let animal = new Animal('dog');
console.log(animal.run());
let lion = new Lion('simba', 80);
console.log(lion.run());
