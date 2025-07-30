export class Plataforma {
  constructor(
    public platform: {
      id: number;
      name: string;
    }
  ) { }

  toString(): string {
    return this.platform.name;
  }
}
