import { Jogo } from "./Jogo";
import { Genero } from "./Genero";
import { Plataforma } from "./Plataforma";

export class JogoTripleA extends Jogo {
    private _orcamento: number;
    private _publisher: string;

    constructor(
        id: number,
        name: string,
        rating: number,
        released: string,
        genres: Genero[],
        platforms: Plataforma[],
        orcamento: number,
        publisher: string,
        background_image?: string,
        description_raw?: string
    ) {
        super(id, name, rating, released, genres, platforms, background_image, description_raw);
        this._orcamento = orcamento;
        this._publisher = publisher;
    }

    get orcamento(): number {
        return this._orcamento;
    }

    get publisher(): string {
        return this._publisher;
    }

    toString(): string {
        const ano = this.released ? new Date(this.released).getFullYear() : "???";
        return `${this.name} - ${this._publisher} (${ano})`;
    }
}
