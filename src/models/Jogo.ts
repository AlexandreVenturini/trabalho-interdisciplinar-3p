import type { IPesquisavel } from "../interfaces/IPesquisavel";

export class Jogo implements IPesquisavel {
  constructor(
    public id: number,
    public name: string,
    public rating: number,
    public released: string,
    public genres: { name: string }[],
    public platforms: { platform: { id: number; name: string } }[],
    public background_image?: string,
    public description_raw?: string
  ) { }

  pesquisarPorCriterio(criterio: string): boolean {
    return this.name.toLowerCase().includes(criterio.toLowerCase());
  }

  toString(): string {
    const ano = this.released ? new Date(this.released).getFullYear() : "???";
    return `${this.name} (${ano})`;
  }

  temGenero(nomeGenero: string): boolean {
    return this.genres.some((g) => g.name.toLowerCase().includes(nomeGenero.toLowerCase()));
  }

  temPlataforma(nomePlataforma: string): boolean {
    return this.platforms.some((p) => p.platform.name.toLowerCase().includes(nomePlataforma.toLowerCase()));
  }
}
