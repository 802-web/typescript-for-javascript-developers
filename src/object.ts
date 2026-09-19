export {};

let profile1: object = { name: 2 };
profile1 = { 2: 3 };

let profile2: {
  name: string;
} = { name: 'name' };

profile2 = { name: 'uuu' };
console.log(profile2.name);
