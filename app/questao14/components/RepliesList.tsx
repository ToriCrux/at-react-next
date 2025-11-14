"use client";
import React from "react";
import styles from "../styles/RepliesList.module.css";
import { Response } from "../data/forumData";

interface Props { responses: Response[]; }

// Lista de respostas do tópico principal
const ResponseList: React.FC<Props> = ({ responses }) => {
  return (
    <section className={styles.wrapper}>
      {/* Exibe o total de respostas usando o length do array */}
      <h4 className={styles.title}>Respostas({responses.length})</h4>
      
      <div className={styles.grid}>
        {responses.map((r) => (
          <article key={r.id} className={styles.card}>
            
            {/* Texto da resposta */}
            <p className={styles.msg}>{r.message}</p>

            {/* Metadados da resposta: likes e data */}
            <div className={styles.meta}>
              <span>❤️ {r.likes}</span>
              <span>📅 {r.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ResponseList;
