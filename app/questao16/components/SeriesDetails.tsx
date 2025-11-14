"use client";
import React from "react";
import Image from "next/image";
import StarMeter from "./StarMeter";
import { SeriesProduct } from "../data/seriesStore";

export default function SeriesDetails({ item }: { item: SeriesProduct }) {
  return (
    // Seção principal da série: poster + informações
    <section className="ls16-details">
      {/* Coluna do poster da série */}
      <div className="ls16-poster">
        <Image
          src={item.image}
          alt={item.name}
          width={360}
          height={540}
          className="ls16-poster-img"
          priority
          sizes="(min-width:1024px) 320px, 70vw" // sizes otimiza o carregamento conforme largura da tela 
        />
      </div>

      {/* Coluna de texto com título, descrição, preço e nota */}
      <div className="ls16-details-text">
        <h2 className="ls16-title">{item.name}</h2>
        <p className="ls16-desc">{item.description}</p>

        {/* Linha com preço e estrelas da avaliação do produto */}
        <div className="ls16-priceRow">
          <span className="ls16-price">R$ {item.price.toFixed(2)}</span>
          <StarMeter value={item.rating} />
        </div>

        {/* Nota editorial da locadora, separada da nota dos usuários */}
        <p className="ls16-note">Nota editorial: {item.note}/5</p>

        {/* Botão de ação principal da página */}
        <button className="ls16-cta">Alugar agora</button>
      </div>
    </section>
  );
}
