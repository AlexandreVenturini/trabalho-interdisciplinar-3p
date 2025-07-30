import { Genero } from "./Genero";
import { Plataforma } from "./Plataforma";

export class Jogo {
  private _id: number;
  private _name: string;
  private _rating: number;
  private _released: string;
  private _genres: Genero[];
  private _platforms: Plataforma[];
  private _background_image?: string;
  private _description_raw?: string;

  constructor(
    id: number,
    name: string,
    rating: number,
    released: string,
    genres: Genero[],
    platforms: Plataforma[],
    background_image?: string,
    description_raw?: string
  ) {
    this._id = id;
    this._name = name;
    this._rating = rating;
    this._released = released;
    this._genres = genres;
    this._platforms = platforms;
    this._background_image = background_image;
    this._description_raw = description_raw;
  }

  get genres(): Genero[] {
    return this._genres;
  }

  get platforms(): Plataforma[] {
    return this._platforms;
  }

  get name(): string {
    return this._name;
  }

  get rating(): number {
    return this._rating;
  }

  get released(): string {
    return this._released;
  }

  get id(): number {
    return this._id;
  }

  get background_image(): string | undefined {
    return this._background_image;
  }

  get description_raw(): string | undefined {
    return this._description_raw;
  }

  toString(): string {
    const ano = this._released ? new Date(this._released).getFullYear() : "???";
    return `${this._name} (${ano})`;
  }

  temGenero(nomeGenero: string): boolean {
    return this._genres.some((g) => g.name.toLowerCase().includes(nomeGenero.toLowerCase()));
  }

  temPlataforma(nomePlataforma: string): boolean {
    return this._platforms.some((p) => p.name.toLowerCase().includes(nomePlataforma.toLowerCase()));
  }

  pesquisarPorCriterio(criterio: string): boolean {
    return this._name.toLowerCase().includes(criterio.toLowerCase());
  }

  static criarDeApi(dados: any): Jogo {
    return new Jogo(
      dados.id,
      dados.name,
      dados.rating || 0,
      dados.released || '',
      (dados.genres || []).map((g: any) => new Genero({ id: g.id ?? 0, name: g.name })),
      (dados.platforms || []).map((p: any) => new Plataforma({ id: p.platform.id, name: p.platform.name })),
      dados.background_image,
      dados.description_raw
    );
  }
}
