export {};
const kansu = (): number => 43;

let kansuAny: any = kansu();
let kansuUn: unknown = kansu();

let sum = kansuAny + 10;
console.log(typeof kansuUn);
if (typeof kansuUn === 'number') {
  // typeGuardというらしい　こういうものを
  let sumUn = kansuUn + 10;
  console.log(sumUn);
}
