import { Jogo } from "../models/Jogo";
import { buscarJogoPorId } from "./rawg"

const CHAVE_LOCAL = "favoritos";

export function salvarFavorito(id: number) {
    const favoritos = buscarFavoritos();
    if (!favoritos.includes(id)) {
        localStorage.setItem(CHAVE_LOCAL, JSON.stringify([...favoritos, id]));
    }
}

export function removerFavorito(id: number) {
    const favoritos = buscarFavoritos().filter((fav) => fav !== id);
    localStorage.setItem(CHAVE_LOCAL, JSON.stringify(favoritos));
}

export function buscarFavoritos(): number[] {
    const data = localStorage.getItem(CHAVE_LOCAL);
    return data ? JSON.parse(data) : [];
}

export async function buscarJogosPorIds(ids: number[]): Promise<Jogo[]> {
    const promessas = ids.map((id) => buscarJogoPorId(id));
    return await Promise.all(promessas);
}
