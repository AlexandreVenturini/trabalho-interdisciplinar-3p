import { Link } from "react-router-dom"
import Botao from "../../components/Button"
import Cartao from "../../components/Card"
import { Gamepad2, Heart, Library, User } from "lucide-react"
import estilos from "./PaginaInicial.module.css"

export default function PaginaInicial() {
  return (
    <div className={estilos.pagina}>
      <main className={estilos.principal}>
        <div className={estilos.container}>
          <div className={estilos.hero}>
            <h1 className={estilos.titulo}>
              Game<span className={estilos.destaque}>Dex</span>
            </h1>
            <p className={estilos.subtitulo}>
              Descubra, explore e organize sua biblioteca de jogos favoritos. Milhares de títulos esperando por você.
            </p>

            <div className={estilos.acoes}>
              <Link to="/biblioteca">
                <Botao tipo="primario" tamanho="grande">
                  <Library className={estilos.icone} />
                  Explorar Biblioteca
                </Botao>
              </Link>
              <Link to="/sobre">
                <Botao tipo="secundario" tamanho="grande">
                  <User className={estilos.icone} />
                  Sobre
                </Botao>
              </Link>
            </div>

            <div className={estilos.recursos}>
              <Cartao>
                <Library className={estilos.iconeRecurso} />
                <h3 className={estilos.tituloRecurso}>Biblioteca Completa</h3>
                <p className={estilos.descricaoRecurso}>Explore milhares de jogos com informações detalhadas</p>
              </Cartao>

              <Cartao>
                <Heart className={estilos.iconeRecurso} />
                <h3 className={estilos.tituloRecurso}>Sistema de Favoritos</h3>
                <p className={estilos.descricaoRecurso}>Marque e organize seus jogos preferidos</p>
              </Cartao>

              <Cartao>
                <Gamepad2 className={estilos.iconeRecurso} />
                <h3 className={estilos.tituloRecurso}>Busca Avançada</h3>
                <p className={estilos.descricaoRecurso}>Encontre jogos por nome, gênero ou plataforma</p>
              </Cartao>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
