export {};

const nextYearSalary = (curSal: number, rate: number = 1.1): number => {
  return curSal * rate;
};

console.log(nextYearSalary(1000));
