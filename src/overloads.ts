export {};
function double(val: number): number;
function double(val: string): string;

function double(val: any): any {
  if (typeof val === 'number') {
    return val * 2;
  } else {
    return val + val;
  }
}

// function double(val: string): string {
//   return val + val;
// }

console.log(double(2));
console.log(double('go'));
