export {};

const reducer = (acum: number, currentVal: number): number => {
  console.log({ acum, currentVal });
  return acum + currentVal;
};
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
