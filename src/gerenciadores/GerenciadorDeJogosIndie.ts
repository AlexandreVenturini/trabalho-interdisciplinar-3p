import { JogoIndie } from "../models/JogoIndie";

export class GerenciadorDeJogosIndie {
    private _jogos: JogoIndie[] = [];

    get jogos(): JogoIndie[] {
        return this._jogos;
    }

    adicionar(jogo: JogoIndie): void {
        this._jogos.push(jogo);
    }

    atualizar(id: number, novosDados: Partial<JogoIndie>): void {
        const jogo = this._jogos.find((j) => j.id === id);
        if (jogo) Object.assign(jogo, novosDados);
    }

    remover(id: number): void {
        this._jogos = this._jogos.filter((j) => j.id !== id);
    }

    obterProximoId(): number {
        return this._jogos.length > 0
            ? Math.max(...this._jogos.map((j) => j.id)) + 1 : 1;
    }
}