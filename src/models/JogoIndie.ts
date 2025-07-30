import { Jogo } from "./Jogo";
import { Genero } from "./Genero";
import { Plataforma } from "./Plataforma";

export class JogoIndie extends Jogo {
  private _desenvolvedor: string;

  constructor(
    id: number,
    name: string,
    rating: number,
    released: string,
    genres: Genero[],
    platforms: Plataforma[],
    desenvolvedor: string,
    background_image?: string,
    description_raw?: string
  ) {
    super(id, name, rating, released, genres, platforms, background_image, description_raw);
    this._desenvolvedor = desenvolvedor;
  }

  get desenvolvedor(): string {
    return this._desenvolvedor;
  }

  toString(): string {
    const ano = this.released ? new Date(this.released).getFullYear() : "???";
    return `${this.name} by ${this._desenvolvedor} (${ano})`;
  }

  ehDesenvolvedorIndependente(): boolean {
    const estudiosGrandes = ["EA", "Ubisoft", "Activision", "Sony", "Microsoft", "Nintendo"];
    return !estudiosGrandes.some((estudio) =>
      this._desenvolvedor.toLowerCase().includes(estudio.toLowerCase())
    );
  }
}

