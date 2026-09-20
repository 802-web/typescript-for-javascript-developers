export {};

const debugProfile = (name: string, age: number) => {
	console.log({ name, age });
};

console.log(debugProfile('a', 4));

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['rr', 22];

debugProfile(...profile);

type Parameters<T extends (...args: any) => any> = T extends (
	...args: infer P
) => any
	? P
	: never;
