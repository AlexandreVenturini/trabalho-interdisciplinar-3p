import { Jogo } from "./Jogo";

export class JogoIndie extends Jogo {
  constructor(
    id: number,
    name: string,
    rating: number,
    released: string,
    genres: { name: string }[],
    platforms: { platform: { id: number; name: string } }[],
    public desenvolvedor: string,
    background_image?: string,
    description_raw?: string
  ) {
    super(id, name, rating, released, genres, platforms, background_image, description_raw);
  }

  toString(): string {
    const ano = this.released ? new Date(this.released).getFullYear() : "???";
    return `${this.name} by ${this.desenvolvedor} (${ano})`;
  }

  ehDesenvolvedorIndependente(): boolean {
    const estudiosGrandes = ["EA", "Ubisoft", "Activision", "Sony", "Microsoft", "Nintendo"];
    return !estudiosGrandes.some((estudio) =>
      this.desenvolvedor.toLowerCase().includes(estudio.toLowerCase())
    );
  }
}
