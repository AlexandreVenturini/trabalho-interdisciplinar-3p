import type { ReactNode } from "react"
import estilos from "./Botao.module.css"

interface PropriedadesBotao {
  children: ReactNode
  tipo?: "primario" | "secundario" | "fantasma"
  tamanho?: "pequeno" | "medio" | "grande"
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export default function Botao({
  children,
  tipo = "primario",
  tamanho = "medio",
  onClick,
  disabled = false,
  className = "",
}: PropriedadesBotao) {
  const classeBotao = `${estilos.botao} ${estilos[tipo]} ${estilos[tamanho]} ${className}`

  return (
    <button className={classeBotao} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
