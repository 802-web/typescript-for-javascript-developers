export {};

// const echo = (arg: number): number => {
// 	return arg;
// };

// const echo = (arg: string): string => {
// 	return arg;
// };

const echo = <T>(arg: T): T => {
	return arg;
};

// console.log(echo<number>(10));
// console.log(echo<string>('rr'));
// console.log(echo<boolean>(true));

class Mirror<T> {
	constructor(public val: T) {}
	echo(): T {
		return this.val;
	}
}
console.log(new Mirror<number>(34).echo());
console.log(new Mirror<string>('333222').echo());
console.log(new Mirror<boolean>(false).echo());
