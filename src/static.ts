export {};

class Me {
	static isProgrammer: boolean = true;
	static firstName: string = 'uuu';
	static lastName: string = 'rrr';

	static work() {
		return `hello ${this.firstName} `;
	}
}

console.log(Me.isProgrammer);
console.log(Me.work());
// let me = new Me();
// console.log(me.isProgrammer);
