export {};

class Wizard {}

class Soryo {}

class Taro extends Wizard {}
interface Kenja {
	ionazu(): void;
}
interface Senshi {
	kougeki(): void;
}

class Jiro implements Kenja, Senshi {
	ionazu(): void {
		console.log('ionazu');
	}
	kougeki(): void {
		console.log('kougeki');
	}
}

const jiro = new Jiro();
console.log(jiro.ionazu());
jiro.kougeki();
