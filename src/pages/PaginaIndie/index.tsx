import { useState } from "react"
import { JogoIndie } from "../../models/JogoIndie"
import { GerenciadorDeJogosIndie } from "../../gerenciadores/GerenciadorDeJogosIndie"
import estilos from "./PaginaIndie.module.css"
import { Genero } from "../../models/Genero";
import { Plataforma } from "../../models/Plataforma";

const gerenciador = new GerenciadorDeJogosIndie()


export default function PaginaIndie() {
    const [nome, setNome] = useState("")
    const [nota, setNota] = useState(0)
    const [plataforma, setPlataforma] = useState("")
    const [genero, setGenero] = useState("")
    const [lista, setLista] = useState<JogoIndie[]>(gerenciador.jogos)
    const [desenvolvedor, setDesenvolvedor] = useState("")

    const adicionar = () => {
        const novo = new JogoIndie(
            gerenciador.obterProximoId(),
            nome,
            nota,
            new Date().toISOString().split("T")[0],
            [new Genero({ id: 0, name: genero })],
            [new Plataforma({ id: 1, name: plataforma })],
            desenvolvedor,
            ""
        )
        gerenciador.adicionar(novo)
        setLista(gerenciador.jogos)
        setNome("")
        setNota(0)
        setGenero("")
        setPlataforma("")
    }

    const remover = (id: number) => {
        gerenciador.remover(id)
        setLista(gerenciador.jogos)
    }

    return (
        <div className={estilos.pagina}>
            <div className={estilos.container} >
                <h1 className={estilos.titulo}>Jogos Indie </h1>
                < div className={estilos.formulario} >
                    <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
                    <input value={genero} onChange={e => setGenero(e.target.value)} placeholder="Gênero" />
                    <input value={plataforma} onChange={e => setPlataforma(e.target.value)} placeholder="Plataforma" />
                    <input value={desenvolvedor} onChange={e => setDesenvolvedor(e.target.value)} placeholder="Desenvolvedor" />
                    <input type="number" value={nota} onChange={e => setNota(parseFloat(e.target.value))
                    } placeholder="Nota" />
                    <button onClick={adicionar}> Adicionar </button>
                </div>

                < ul className={estilos.lista} >
                    {
                        lista.map(j => (
                            <li key={j.id} className={estilos.item} >
                                <strong>{j.name} </strong> - {j.genres[0]?.name} - {j.platforms[0]?.name} - ⭐ {j.rating}
                                < button onClick={() => remover(j.id)} > Remover </button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
