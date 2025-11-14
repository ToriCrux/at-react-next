"use client";

import { useMemo, useState } from "react";
import styles from "./Q6.module.css";

type Item = {
  id: number;
  nome: string;      
  preco: number;     
  quantidade: number; 
};

export default function Q6() {
  const [itens] = useState<Item[]>([
    { id: 1, nome: "Outlander",           preco: 6.90, quantidade: 3 }, 
    { id: 2, nome: "Orphan Black",        preco: 5.50, quantidade: 2 },
    { id: 3, nome: "House of the Dragon", preco: 7.90, quantidade: 4 },
    { id: 4, nome: "Vikings",             preco: 5.90, quantidade: 2 },
    { id: 5, nome: "Stranger Things",     preco: 6.50, quantidade: 3 },
  ]);

  const totalGeral = useMemo(
    () => itens.reduce((acc, i) => acc + i.preco * i.quantidade, 0),
    [itens]
  );

  const totalDias = useMemo(
    () => itens.reduce((acc, i) => acc + i.quantidade, 0),
    [itens]
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🎬 Locadora — Séries Alugadas</h1>

      <section className={styles.card}>
        <header className={styles.headerRow} aria-label="Cabeçalho da lista de aluguel">
          <span>Série</span>
          <span>Diária</span>
          <span>Dias</span>
          <span>Total</span>
        </header>

        <div className={styles.rows} role="list">
          {itens.map((item) => (
            <div key={item.id} className={styles.row} role="listitem">
              <span className={styles.itemName}>{item.nome}</span>
              <span className={styles.money}>R$ {item.preco.toFixed(2)}</span>
              <span className={styles.qty}>{item.quantidade}</span>
              <span className={styles.moneyStrong}>
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <footer className={styles.footerRow} aria-live="polite">
          <div className={styles.summary}>
            <span>
              Total de dias alugados: <b>{totalDias}</b>
            </span>
          </div>
          <div className={styles.total}>
            <strong>Total do Aluguel</strong>
            <strong>R$ {totalGeral.toFixed(2)}</strong>
          </div>
        </footer>
      </section>
    </main>
  );
}
