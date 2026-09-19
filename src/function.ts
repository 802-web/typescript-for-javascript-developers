export {};

function bmi(weight: number, height: number): number {
  return weight / (height * height);
}

console.log(bmi(88, 1.78));
