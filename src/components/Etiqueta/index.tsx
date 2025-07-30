import type { ReactNode } from "react"
import estilos from "./Etiqueta.module.css"

interface PropriedadesEtiqueta {
  children: ReactNode
  tipo?: "primario" | "secundario" | "contorno"
}

export default function Etiqueta({ children, tipo = "primario" }: PropriedadesEtiqueta) {
  return <span className={`${estilos.etiqueta} ${estilos[tipo]}`}>{children}</span>
}
