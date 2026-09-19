export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('rrr');
  console.log({ result });
} catch (error) {
  console.log({ error });
}
