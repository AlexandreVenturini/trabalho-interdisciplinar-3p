export class Genero {
  constructor(
    public id: number,
    public name: string,
  ) { }

  toString(): string {
    return this.name;
  }
}
