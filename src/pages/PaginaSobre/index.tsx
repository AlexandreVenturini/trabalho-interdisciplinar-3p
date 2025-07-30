import Cartao from "../../components/Card"
import Botao from "../../components/Button"
import { Github, Linkedin, User, Code, GraduationCap } from "lucide-react"
import estilos from "./PaginaSobre.module.css"

export default function PaginaSobre() {
  return (
    <div className={estilos.pagina}>

      <main className={estilos.principal}>
        <div className={estilos.container}>
          <div className={estilos.perfil}>
            <div className={estilos.avatar}>
              <User className={estilos.iconeAvatar} />
            </div>
            <h1 className={estilos.titulo}>Sobre o Desenvolvedor</h1>
            <p className={estilos.descricao}>
              Estudante de Tecnologia em Sistemas para Internet no IFES Campus Santa Teresa, apaixonado por
              desenvolvimento web e tecnologias modernas.
            </p>
          </div>

          <div className={estilos.informacoes}>
            <Cartao>
              <div className={estilos.secaoInfo}>
                <div className={estilos.cabecalhoSecao}>
                  <GraduationCap className={estilos.iconeSecao} />
                  <h2 className={estilos.tituloSecao}>Formação</h2>
                </div>
                <p className={estilos.textoSecao}>
                  Cursando Tecnologia em Sistemas para Internet no Instituto Federal do Espírito Santo (IFES), Campus
                  Santa Teresa. Este projeto foi desenvolvido como trabalho final interdisciplinar das disciplinas de
                  Arquitetura de Software, Desenvolvimento Front-end II e Programação Orientada a Objetos II.
                </p>
              </div>
            </Cartao>

            <Cartao>
              <div className={estilos.secaoInfo}>
                <div className={estilos.cabecalhoSecao}>
                  <Code className={estilos.iconeSecao} />
                  <h2 className={estilos.tituloSecao}>Tecnologias</h2>
                </div>
                <div className={estilos.listaTecnologias}>
                  <p>
                    <strong className={estilos.destaque}>Frontend:</strong> React, TypeScript, CSS Modules
                  </p>
                  <p>
                    <strong className={estilos.destaque}>Arquitetura:</strong> Orientação a Objetos , SOLID, GRASP
                  </p>
                  <p>
                    <strong className={estilos.destaque}>API:</strong> IGDB Games Database
                  </p>
                  <p>
                    <strong className={estilos.destaque}>Roteamento:</strong> React Router
                  </p>
                </div>
              </div>
            </Cartao>
          </div>

          <Cartao>
            <div className={estilos.projeto}>
              <h2 className={estilos.tituloProjeto}>Sobre o Projeto</h2>
              <p className={estilos.descricaoProjeto}>
                O GameDex é uma biblioteca de jogos desenvolvida como projeto acadêmico que demonstra a aplicação de
                conceitos fundamentais de engenharia de software:
              </p>
              <ul className={estilos.listaCaracteristicas}>
                <li>Programação Orientada a Objetos com TypeScript</li>
                <li>Implementação dos princípios SOLID e padrões GRASP</li>
                <li>Uso de interfaces e polimorfismo</li>
                <li>Consumo de APIs externas com programação assíncrona</li>
                <li>Sistema CRUD para gerenciamento de favoritos</li>
                <li>Interface responsiva e moderna com React</li>
              </ul>
            </div>
          </Cartao>

          <div className={estilos.contato}>
            <h2 className={estilos.tituloContato}>Conecte-se Comigo</h2>
            <div className={estilos.linksContato}>
              <a href="https://github.com/AlexandreVenturini" target="_blank" rel="noopener noreferrer" className={estilos.linkGithub}>
                <Botao tipo="fantasma">
                  <Github className={estilos.iconeLink} />
                  <span className={estilos.conexoes}>GitHub</span>
                </Botao>
              </a>

              <a href="https://www.linkedin.com/in/alexandre-luiz-demuner-venturini/" target="_blank" rel="noopener noreferrer" className={estilos.linkLinkedin}>
                <Botao tipo="fantasma">
                  <Linkedin className={estilos.iconeLink} />
                  <span className={estilos.conexoes}>LinkedIn</span>
                </Botao>
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
