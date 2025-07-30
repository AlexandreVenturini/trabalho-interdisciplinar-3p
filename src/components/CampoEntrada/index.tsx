"use client"

import type React from "react"

import estilos from "./CampoEntrada.module.css"

interface PropriedadesCampoEntrada {
  placeholder?: string
  valor: string
  aoMudar: (e: React.ChangeEvent<HTMLInputElement>) => void
  aoTeclar?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  className?: string
}

export default function CampoEntrada({
  placeholder,
  valor,
  aoMudar,
  aoTeclar,
  className = "",
}: PropriedadesCampoEntrada) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={valor}
      onChange={aoMudar}
      onKeyPress={aoTeclar}
      className={`${estilos.campo} ${className}`}
    />
  )
}
