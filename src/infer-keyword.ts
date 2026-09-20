export {};

function add(a: number, b: number) {
	return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type myReturnType<T extends (...args: any) => any> = T extends (
	...args: any
) => infer R
	? R
	: any;

// １単語も言っている意味が分からなかった。
// 後から分かるようにしておいて
