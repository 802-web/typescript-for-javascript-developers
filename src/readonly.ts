export {};

class Visa {
	constructor(public readonly owner: string) {}
}
let myCard = new Visa('uu');
console.log(myCard.owner);
// myCard = "f";
