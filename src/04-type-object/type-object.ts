const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value a',
  keyB: 'Value b',
};

objectA.keyB = 'Another value';
objectA.keyC = 'New key';
