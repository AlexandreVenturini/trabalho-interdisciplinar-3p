import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/Button";
import CartaoJogo from "../../components/CardJogo";
import ModalJogo from "../../components/ModalJogo";
import Etiqueta from "../../components/Etiqueta";
import { Heart, Trash2 } from "lucide-react";
import { Jogo } from "../../models/Jogo";
import estilos from "./PaginaFavoritos.module.css";

import { buscarFavoritos, removerFavorito, buscarJogosPorIds } from "../../services/favoritos";

export default function PaginaFavoritos() {
  const [favoritos, setFavoritos] = useState<Jogo[]>([]);
  const [jogoSelecionado, setJogoSelecionado] = useState<Jogo | null>(null);

  useEffect(() => {
    const ids = buscarFavoritos();
    if (ids.length > 0) {
      buscarJogosPorIds(ids).then(setFavoritos);
    }
  }, []);

  const aoRemoverFavorito = (jogoId: number) => {
    removerFavorito(jogoId);
    const idsAtualizados = buscarFavoritos();
    if (idsAtualizados.length > 0) {
      buscarJogosPorIds(idsAtualizados).then(setFavoritos);
    } else {
      setFavoritos([]);
    }

    if (jogoSelecionado?.id === jogoId) {
      setJogoSelecionado(null);
    }
  };

  return (
    <div className={estilos.pagina}>
      <main className={estilos.principal}>
        <div className={estilos.container}>
          <div className={estilos.cabecalho}>
            <Heart className={estilos.iconeTitulo} />
            <h1 className={estilos.titulo}>Meus Favoritos</h1>
            <Etiqueta tipo="secundario">{favoritos.length} jogos</Etiqueta>
          </div>

          {favoritos.length === 0 ? (
            <div className={estilos.secaoVazia}>
              <Heart className={estilos.iconeVazio} />
              <h2 className={estilos.tituloVazio}>Nenhum favorito ainda</h2>
              <p className={estilos.descricaoVazia}>
                Explore a biblioteca e adicione seus jogos favoritos!
              </p>
              <Link to="/biblioteca">
                <Botao tipo="primario">Explorar Biblioteca</Botao>
              </Link>
            </div>
          ) : (
            <div className={estilos.gradeJogos}>
              {favoritos.map((jogo) => (
                <CartaoJogo
                  key={jogo.id}
                  jogo={jogo}
                  ehFavorito={true}
                  aoClicarDetalhes={() => setJogoSelecionado(jogo)}
                  aoAlternarFavorito={() => aoRemoverFavorito(jogo.id)}
                  iconeFavorito={<Trash2 className={estilos.iconeRemover} />}
                />
              ))}
            </div>
          )}

          {jogoSelecionado && (
            <ModalJogo
              jogo={jogoSelecionado}
              ehFavorito={true}
              aoFechar={() => setJogoSelecionado(null)}
              aoAlternarFavorito={() => aoRemoverFavorito(jogoSelecionado.id)}
              iconeFavorito={<Trash2 className={estilos.iconeModal} />}
            />
          )}
        </div>
      </main>
    </div>
  );
}
