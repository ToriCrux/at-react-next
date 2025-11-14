"use client";
import Image from "next/image";
import type { Related } from "../data/seriesStore";

type Props = { items: Related[] };

export default function SimilarTitlesSection({ items }: Props) {
  return (
    // Seção de recomendações de outras séries relacionadas
    <section className="ls16-block">
      <h3>Para maratonar</h3>

      {/* Grid responsivo de cards */}
      <div className="ls16-related-grid">
        {items.map((it) => (
          <figure key={it.id} className="ls16-related-card">
            {/* Imagem de capa da série relacionada */}
            <div className="ls16-related-thumb">
              <Image
                src={it.image}
                alt={it.name}
                fill
                className="ls16-related-img"
                sizes="(max-width:480px) 45vw, 200px"
                priority={false}
              />
            </div>

            {/* Informações */}
            <figcaption className="ls16-related-info">
              <span className="ls16-related-name">{it.name}</span>
              <span className="ls16-related-price">
                R$ {it.price.toFixed(2)}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
