"use client";
import React from "react";
import styles from "../styles/ForumAside.module.css";

interface Props {
  latest: string[];
  mostReplied: string[];
  mostLiked: string[];
}

// Componente responsável pela coluna lateral fixa na versão desktop
export default function ForumAside({ latest, mostReplied, mostLiked }: Props) {
  return (
    <div className={styles.railCards}>
      {/* Bloco de tópicos mais curtidos */}
      <section className={styles.card}>
        <h3 className={styles.title}>❤️ Mais curtidos</h3>
        {/* Renderiza a lista recebida via props */}
        <ol className={styles.list}>
          {mostLiked.map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      </section>
      
      {/* Bloco de tópicos recentes */}
      <section className={styles.card}>
        <h3 className={styles.title}>📌 Tópicos recentes</h3>
        <ol className={styles.list}>
          {latest.map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      </section>

      {/* Bloco de tópicos mais respondidos */}
      <section className={styles.card}>
        <h3 className={styles.title}>💬 Mais respondidos</h3>
        <ol className={styles.list}>
          {mostReplied.map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      </section>
    </div>
  );
}
