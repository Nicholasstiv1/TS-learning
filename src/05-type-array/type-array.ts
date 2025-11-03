function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

function concatenateStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value, '');
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const resultString = concatenateStrings('teste', '1', '2');
const resultUpper = toUpperCase('teste', 'a', 'b');

console.log(result);
console.log(resultString);
console.log(resultUpper);
