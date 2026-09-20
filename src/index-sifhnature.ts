export {};

interface Profile {
	name: string;
	underTwenty: boolean;
	[index: string]: string | number | boolean;
}

let profile: Profile = { name: 'uu', underTwenty: false };
// how to wrtie index dignatures
// {[ index: typeForIndex]: typeForValue}
profile.name = 'gg';
// profile.age = 33;
