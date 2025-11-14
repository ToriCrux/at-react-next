"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Q3.module.css";

const IMGS = [
  "/gallery/foto1.webp",
  "/gallery/foto2.webp",
  "/gallery/foto3.webp",
  "/gallery/foto4.webp",
  "/gallery/foto5.webp",
  "/gallery/foto6.webp",
  "/gallery/foto7.webp",
  "/gallery/foto8.webp",
  "/gallery/foto9.webp",
  "/gallery/foto10.webp",
];

export default function Q3() {
  const [count, setCount] = useState(10);

  const add = () => setCount((c) => c + 1);
  const sub = () => setCount((c) => (c > 0 ? c - 1 : 0));

  const items = Array.from({ length: count }, (_, i) => i);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Questão 3 — Layout com Flex, Justify e Align</h1>

      <div className={styles.controls} role="group" aria-label="Controles de galeria">
        <button className={styles.btn} onClick={add} aria-label="Adicionar imagem">+</button>
        <span className={styles.counter} aria-live="polite">{count}</span>
        <button className={styles.btn} onClick={sub} aria-label="Remover imagem" disabled={count === 0}>
          &minus;
        </button>
      </div>

      <section className={styles.stage} aria-label="Área da galeria">
        <div className={styles.gallery}>
          {items.map((i) => {
            const src = IMGS[i % IMGS.length];
            return (
              <div key={i} className={styles.box}>
                <div className={styles.thumb}>
                  <Image
                    src={src}
                    alt={`Imagem ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
                    className={styles.image}
                    priority={i < 11} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
