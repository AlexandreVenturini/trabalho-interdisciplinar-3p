import type React from "react"
import { buscarFavoritos, salvarFavorito, removerFavorito } from "../../services/favoritos"
import { buscarJogosPopulares, buscarJogosPorNome } from "../../services/rawg"
import { useState, useEffect } from "react"
import Botao from "../../components/Button"
import CartaoJogo from "../../components/CardJogo"
import ModalJogo from "../../components/ModalJogo"
import CampoEntrada from "../../components/CampoEntrada"
import { Search, X } from "lucide-react"
import type { Jogo } from "../../models/Jogo"
import estilos from "./PaginaBiblioteca.module.css"

export default function PaginaBiblioteca() {
  const [jogos, setJogos] = useState<Jogo[]>([])
  const [carregando, setCarregando] = useState(false)
  const [termoBusca, setTermoBusca] = useState("")
  const [jogoSelecionado, setJogoSelecionado] = useState<Jogo | null>(null)
  const [favoritos, setFavoritos] = useState<number[]>([])
  const [buscaFeita, setBuscaFeita] = useState(false)

  useEffect(() => {
    const carregarPopulares = async () => {
      setCarregando(true)
      try {
        const dados = await buscarJogosPopulares()
        setJogos(dados)
      } catch (erro) {
        console.error("Erro ao carregar jogos populares:", erro)
      } finally {
        setCarregando(false)
      }
    }

    carregarPopulares()
    setFavoritos(buscarFavoritos())
  }, [])

  const buscarJogos = async () => {
    if (!termoBusca.trim()) return

    setCarregando(true)
    setBuscaFeita(false)
    try {
      const resultados = await buscarJogosPorNome(termoBusca)
      setJogos(resultados)
      setBuscaFeita(true)
    } catch (error) {
      console.error("Erro ao buscar jogos:", error)
      setBuscaFeita(true)
    } finally {
      setCarregando(false)
    }
  }

  const aoTeclarEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      buscarJogos()
    }
  }

  const alternarFavorito = (jogoId: number) => {
    const jogo = jogos.find((j) => j.id === jogoId)
    if (!jogo) return

    if (favoritos.includes(jogoId)) {
      removerFavorito(jogoId)
    } else {
      salvarFavorito(jogoId)
    }
    setFavoritos(buscarFavoritos())
  }

  return (
    <div className={estilos.pagina}>
      <main className={estilos.principal}>
        <div className={estilos.container}>
          <h1 className={estilos.titulo}>Biblioteca de Jogos</h1>

          <div className={estilos.areaBusca}>
            <CampoEntrada
              placeholder="Buscar jogos..."
              valor={termoBusca}
              aoMudar={(e) => setTermoBusca(e.target.value)}
              aoTeclar={aoTeclarEnter}
              className={estilos.campoBusca}
            />
            <Botao onClick={buscarJogos} disabled={carregando} tipo="primario">
              <Search className={estilos.icone} />
              {carregando ? "Buscando..." : "Buscar"}
            </Botao>
          </div>

          <div className={estilos.gradeJogos}>
            {buscaFeita && jogos.length === 0 && !carregando ? (
              <div className={estilos.naoEncontrado}>
                <span className={estilos.naoEncontradoIcone}>
                  <X size={32} />
                </span>
                Jogo não encontrado
              </div>
            ) : (
              jogos.map((jogo) => (
                <CartaoJogo
                  key={jogo.id}
                  jogo={jogo}
                  ehFavorito={favoritos.includes(jogo.id)}
                  aoClicarDetalhes={() => setJogoSelecionado(jogo)}
                  aoAlternarFavorito={() => alternarFavorito(jogo.id)}
                />
              ))
            )}
          </div>

          {jogoSelecionado && (
            <ModalJogo
              jogo={jogoSelecionado}
              ehFavorito={favoritos.includes(jogoSelecionado.id)}
              aoFechar={() => setJogoSelecionado(null)}
              aoAlternarFavorito={() => alternarFavorito(jogoSelecionado.id)}
            />
          )}
        </div>
      </main>
    </div>
  )
}
