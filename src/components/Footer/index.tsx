import estilos from "./Footer.module.css"

export default function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.container}>
        <div className={estilos.conteudo}>
          <p>&copy; 2025 GameDex. Desenvolvido para projeto acadêmico IFES.</p>
        </div>
      </div>
    </footer>
  )
}