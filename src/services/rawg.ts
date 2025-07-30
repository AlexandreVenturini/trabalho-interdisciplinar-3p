import { Jogo } from "../models/Jogo";

const API_KEY = '2dce318a350b4aa2a9bafe689fd1ada9';
const BASE_URL = 'https://api.rawg.io/api';

export async function buscarJogosPorNome(nome: string) {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&search=${encodeURIComponent(nome)}`);
  if (!res.ok) throw new Error("Erro ao buscar jogos por nome");
  const data = await res.json();
  return data.results.map((j: any) => Jogo.criarDeApi(j));
}

export async function buscarJogosPopulares() {
  const res = await fetch(`${BASE_URL}/games/lists/popular?key=${API_KEY}&page_size=40`);
  if (!res.ok) throw new Error("Erro ao buscar jogos populares");
  const data = await res.json();
  return data.results.map((j: any) => Jogo.criarDeApi(j));
}

export async function buscarJogoPorId(id: number) {
  const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  if (!res.ok) throw new Error("Erro ao buscar jogo por ID");
  const dado = await res.json();
  return Jogo.criarDeApi(dado);
}