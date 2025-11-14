import React from "react";
import StarMeter from "./StarMeter";
import { Qna } from "../data/seriesStore";

export default function QnaSection({ list }: { list: Qna[] }) {
  return (
    // Bloco de perguntas e respostas da página do produto
    <section className="ls16-block">
      <h3>Perguntas e respostas</h3>

      {/* Cada item da lista vira um card com pergunta, resposta e avaliação */}
      {list.map((q) => (
        <article key={q.id} className="ls16-card ls16-qna">
          <header className="ls16-card-head">
            <strong>{q.user}</strong>
            <span className="ls16-date">
              {new Date(q.date).toLocaleDateString("pt-BR")}
            </span>
          </header>

          {/* Grid com duas bolhas: pergunta (entrada) e resposta (saída) */}
          <div className="ls16-qaGrid">
            <div className="ls16-bubble ls16-bubble--q">
              <span className="ls16-bubbleIcon">📥</span>
              <p className="ls16-bubbleText">{q.question}</p>
            </div>

            <div className="ls16-bubble ls16-bubble--a">
              <span className="ls16-bubbleIcon">💬</span>
              <p className="ls16-bubbleText">
                <strong>{q.answer}</strong>
              </p>
            </div>
          </div>

          {/* Faixa final mostra a avaliação de atendimento usando o StarMeter */}
          <div className="ls16-bubble eval">
            Atendimento avaliado em: <StarMeter value={q.rating} />
          </div>
        </article>
      ))}
    </section>
  );
}
