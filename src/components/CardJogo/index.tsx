"use client"

import type { ReactNode } from "react"
import Botao from "../Button"
import { Heart } from "lucide-react"
import type { Jogo } from "../../models/Jogo"
import estilos from "./CartaoJogo.module.css"

interface PropriedadesCartaoJogo {
  jogo: Jogo
  ehFavorito: boolean
  aoClicarDetalhes: () => void
  aoAlternarFavorito: () => void
  iconeFavorito?: ReactNode
}

export default function CartaoJogo({
  jogo,
  ehFavorito,
  aoClicarDetalhes,
  aoAlternarFavorito,
  iconeFavorito,
}: PropriedadesCartaoJogo) {
  return (
    <div className={estilos.cartao}>
      <div className={estilos.conteudo}>
        <div className={estilos.containerImagem}>
          <img
            src={
              jogo.background_image ||
              `https://via.placeholder.com/200x300/7c3aed/ffffff?text=${encodeURIComponent(jogo.name) || "/placeholder.svg"}`
            }
            alt={jogo.name}
            className={estilos.imagem}
          />
          <div className={estilos.overlay} />
          <div className={estilos.informacoes}>
            <h3 className={estilos.titulo}>{jogo.name}</h3>
            <div className={estilos.acoes}>
              <Botao tamanho="pequeno" onClick={aoClicarDetalhes}>
                Ver Detalhes
              </Botao>
              <button
                onClick={aoAlternarFavorito}
                className={`${estilos.botaoFavorito} ${ehFavorito ? estilos.favorito : ""}`}
              >
                {iconeFavorito || (
                  <Heart className={`${estilos.iconeFavorito} ${ehFavorito ? estilos.preenchido : ""}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
