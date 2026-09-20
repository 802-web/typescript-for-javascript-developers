export {};

type Profile = {
	name: string;
	age: number;
};

const me: Profile = {
	name: 'uu',
	age: 55,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friends: PersonalDataType = {
	name: 'dd',
	age: 39,
};
// friends.age++;

type YomitoriSenyo<T> = {
	readonly [P in keyof T]: T[P];
};
