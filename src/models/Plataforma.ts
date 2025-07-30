export class Plataforma {
  private _id: number;
  private _name: string;

  constructor(dados: { id: number; name: string }) {
    this._id = dados.id;
    this._name = dados.name;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  toString(): string {
    return this._name;
  }
}
