import { IPesquisavel } from "../interfaces/IPesquisavel"
import { Jogo } from "../models/Jogo"
import { buscarJogosPorNome } from "../services/rawg"

export class ControladorJogo {

  async buscarJogos(nome: string): Promise<Jogo[]> {
    if (!nome.trim()) {
      throw new Error("Nome de busca não pode estar vazio")
    }

    try {
      return await buscarJogosPorNome(nome)
    } catch (error) {
      console.error("Erro ao buscar jogos:", error)
      throw new Error("Falha ao buscar jogos. Tente novamente.")
    }
  }

  pesquisarEmColecao<T extends IPesquisavel>(colecao: T[], criterio: string): T[] {
    return colecao.filter((item) => item.pesquisarPorCriterio(criterio))
  }

  filtrarPorGenero(jogos: Jogo[], genero: string): Jogo[] {
    return jogos.filter((jogo) => jogo.temGenero(genero))
  }

  filtrarPorPlataforma(jogos: Jogo[], plataforma: string): Jogo[] {
    return jogos.filter((jogo) => jogo.temPlataforma(plataforma))
  }
}
