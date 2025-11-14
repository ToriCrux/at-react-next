import React from "react";
import StarMeter from "./StarMeter";
import { Review } from "../data/seriesStore";

export default function ReviewsSection({ list }: { list: Review[] }) {
  return (
    // Bloco com os comentários dos usuários sobre a série
    <section className="ls16-block">
      <h3>Comentários de usuários</h3>

      {/* Cada review gera um card com nome, data, nota e comentário */}
      {list.map((r) => (
        <article key={r.id} className="ls16-card ls16-revCard">
          <header className="ls16-card-head">
            <strong>{r.user}</strong>
            <span className="ls16-date">
              {new Date(r.date).toLocaleDateString("pt-BR")}
            </span>
          </header>

          {/* Nota em estrelas para a experiência geral do usuário */}
          <StarMeter value={r.rating} />

          {/* Comentário em formato de “balão” */}
          <div className="ls16-reviewBubble">{r.message}</div>
        </article>
      ))}
    </section>
  );
}
