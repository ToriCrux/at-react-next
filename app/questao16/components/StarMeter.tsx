import React from "react";

export default function StarMeter({ value }: { value: number }) {
  const max = 5;                  // quantidade máxima de estrelas
  const full = Math.round(value); // arredonda a nota para decidir quantas ficam preenchidas

  return (
    // Container com estrelas e nota numérica
    <div
      className="ls16-stars"
      aria-label={`Nota ${value.toFixed(1)} de 5`}
    >
      {/* Gera um array com 5 posições e preenche de acordo com a nota */}
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < full ? "on" : ""}>
          ★
        </span>
      ))}

      {/* Exibe o valor numérico ao lado das estrelas */}
      <span className="ls16-stars-value">{value.toFixed(1)}</span>
    </div>
  );
}
