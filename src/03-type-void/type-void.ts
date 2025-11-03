function voidReturn(...args: string[]): void {
  console.log(args.join(' '));
}

export const person = {
  name: 'Test',
  surname: 'Test test',

  showName(): void {
    console.log(this.name, this.surname);
  },
};

voidReturn('test', 'test1');
person.showName();
