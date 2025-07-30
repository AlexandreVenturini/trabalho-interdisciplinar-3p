import type { ReactNode } from "react"
import Botao from "../Button"
import Etiqueta from "../Etiqueta"
import { X, Calendar, Star, Heart } from "lucide-react"
import type { Jogo } from "../../models/Jogo"
import estilos from "./ModalJogo.module.css"

interface PropriedadesModalJogo {
  jogo: Jogo
  ehFavorito: boolean
  aoFechar: () => void
  aoAlternarFavorito: () => void
  iconeFavorito?: ReactNode
}

export default function ModalJogo({
  jogo,
  ehFavorito,
  aoFechar,
  aoAlternarFavorito,
  iconeFavorito,
}: PropriedadesModalJogo) {
  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString("pt-BR")
  }

  return (
    <div className={estilos.fundo} onClick={aoFechar}>
      <div className={estilos.modal} onClick={(e) => e.stopPropagation()}>
        <div className={estilos.cabecalho}>
          <img
            src={
              jogo.background_image ||
              `https://via.placeholder.com/600x400/7c3aed/ffffff?text=${encodeURIComponent(jogo.name) || "/placeholder.svg"}`
            }
            alt={jogo.name}
            className={estilos.imagem}
          />
          <Botao tipo="fantasma" tamanho="pequeno" onClick={aoFechar} className={estilos.botaoFechar}>
            <X className={estilos.iconeFechar} />
          </Botao>
        </div>

        <div className={estilos.corpo}>
          <div className={estilos.titulo}>
            <h2 className={estilos.nomeJogo}>{jogo.name}</h2>
            <button
              onClick={aoAlternarFavorito}
              className={`${estilos.botaoFavorito} ${ehFavorito ? estilos.favorito : ""}`}
            >
              {iconeFavorito || (
                <Heart className={`${estilos.iconeFavorito} ${ehFavorito ? estilos.preenchido : ""}`} />
              )}
            </button>
          </div>

          <div className={estilos.informacoes}>
            <div className={estilos.infoItem}>
              <p className={estilos.labelInfo}>Data de Lançamento</p>
              <p className={estilos.valorInfo}>
                <Calendar className={estilos.iconeInfo} />
                {formatarData(jogo.released)}
              </p>
            </div>

            <div className={estilos.infoItem}>
              <p className={estilos.labelInfo}>Avaliação</p>
              <p className={estilos.valorInfo}>
                <Star className={estilos.iconeEstrela} />
                {jogo.rating}/5
              </p>
            </div>
          </div>

          <div className={estilos.secao}>
            <p className={estilos.labelSecao}>Gêneros</p>
            <div className={estilos.etiquetas}>
              {jogo.genres.map((genero) => (
                <Etiqueta key={genero.name} tipo="secundario">
                  {genero.name}
                </Etiqueta>
              ))}
            </div>
          </div>

          <div className={estilos.secao}>
            <p className={estilos.labelSecao}>Plataformas</p>
            <div className={estilos.etiquetas}>
              {jogo.platforms.map((plataforma) => (
                <Etiqueta key={plataforma.platform.id} tipo="contorno">
                  {plataforma.platform.name}
                </Etiqueta>
              ))}
            </div>
          </div>

          {jogo.description_raw && (
            <div className={estilos.secao}>
              <p className={estilos.labelSecao}>Descrição</p>
              <p className={estilos.descricao}>{jogo.description_raw}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}