import type { ReactNode } from "react"
import estilos from "./Cartao.module.css"

interface PropriedadesCartao {
  children: ReactNode
  className?: string
}

export default function Cartao({ children, className = "" }: PropriedadesCartao) {
  return <div className={`${estilos.cartao} ${className}`}>{children}</div>
}
