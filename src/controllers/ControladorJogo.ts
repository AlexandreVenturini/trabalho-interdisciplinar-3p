import type { IPesquisavel } from "../interfaces/IPesquisavel"
import type { Jogo } from "../models/Jogo"
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

  ordenarPorAvaliacao(jogos: Jogo[]): Jogo[] {
    return [...jogos].sort((a, b) => b.rating - a.rating);
  }


  ordenarPorDataLancamento(jogos: Jogo[]): Jogo[] {
    return [...jogos].sort((a, b) => {
      const dataA = new Date(a.released).getTime();
      const dataB = new Date(b.released).getTime();
      return dataB - dataA;
    });
  }


  obterEstatisticas(jogos: Jogo[]): {
    total: number
    avaliacaoMedia: number
    generosUnicos: string[]
    plataformasUnicas: string[]
  } {
    if (jogos.length === 0) {
      return {
        total: 0,
        avaliacaoMedia: 0,
        generosUnicos: [],
        plataformasUnicas: [],
      }
    }

    const avaliacaoMedia = jogos.reduce((soma, jogo) => soma + jogo.rating, 0) / jogos.length;


    const conjuntoGeneros = new Set<string>()
    const conjuntoPlataformas = new Set<string>()

    jogos.forEach((jogo) => {
      jogo.genres.forEach((genero) => conjuntoGeneros.add(genero.name));
      jogo.platforms.forEach((plataforma) => conjuntoPlataformas.add(plataforma.platform.name));
    });


    return {
      total: jogos.length,
      avaliacaoMedia: Math.round(avaliacaoMedia * 100) / 100,
      generosUnicos: Array.from(conjuntoGeneros),
      plataformasUnicas: Array.from(conjuntoPlataformas),
    }
  }
}
