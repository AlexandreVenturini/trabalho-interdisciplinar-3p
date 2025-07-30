import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import estilos from "./Header.module.css"
import Logo from "../../assets/img/logo.png"

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)
  const location = useLocation()

  const itensMenu = [
    { caminho: "/", rotulo: "Início" },
    { caminho: "/biblioteca", rotulo: "Biblioteca" },
    { caminho: "/favoritos", rotulo: "Favoritos" },
    { caminho: "/indie", rotulo: "Jogos Indie" },
    { caminho: "/sobre", rotulo: "Sobre" },
  ]

  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.container}>
        <nav className={estilos.navegacao}>
          <div className={estilos.logo}>
            <img src={Logo} alt="Logo GameDex" className={estilos.logoImagem} />
            <span className={estilos.textoLogo}>GameDex</span>
          </div>

          <div className={estilos.menuDesktop}>
            {itensMenu.map((item) => (
              <Link
                key={item.caminho}
                to={item.caminho}
                className={`${estilos.linkMenu} ${location.pathname === item.caminho ? estilos.linkAtivo : ""
                  }`}
              >
                {item.rotulo}
              </Link>
            ))}
          </div>

          <button
            className={estilos.botaoMenu}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? (
              <X className={estilos.iconeMenu} />
            ) : (
              <Menu className={estilos.iconeMenu} />
            )}
          </button>
        </nav>

        {menuAberto && (
          <div className={estilos.menuMobile}>
            {itensMenu.map((item) => (
              <Link
                key={item.caminho}
                to={item.caminho}
                className={`${estilos.linkMobile} ${location.pathname === item.caminho ? estilos.linkAtivo : ""
                  }`}
                onClick={() => setMenuAberto(false)}
              >
                {item.rotulo}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
