import { Link } from "react-router-dom"
import estilos from "./Error404.module.css"

export default function Error404() {
    return (
        <div className={estilos.paginaErro}>
            <div className={estilos.emoji}>😵</div>
            <p className={estilos.textoErro}>
                Página não encontrada. O conteúdo que você está tentando acessar não existe.
            </p>
            <Link to="/" className={estilos.botaoVoltar}>
                Voltar para a página inicial
            </Link>
        </div>
    )
}