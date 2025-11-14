"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Q11.module.css";

export default function Q11() {
  const [open, setOpen] = useState(false);
  const links = ["Início", "Catálogo", "Meus Aluguéis", "Blog", "Contato"];

  const destaques = [
    { id: 1, titulo: "Outlander", genero: "Drama/Fantasia", ano: "2014–", src: "/gallery/foto1.webp" },
    { id: 2, titulo: "Orphan Black", genero: "Ficção/Thriller", ano: "2013–2017", src: "/gallery/foto2.webp" },
    { id: 3, titulo: "Game of Thrones", genero: "Fantasia", ano: "2011–2019", src: "/gallery/foto5.webp" },
  ];

  const adsPosters = [
    { id: "ad1", src: "/gallery/foto4.webp", alt: "Banner promocional Vikings" },
    { id: "ad2", src: "/gallery/foto3.webp", alt: "Banner promocional série" },
  ];

  return (
    <main className={styles.grid}>
      <div className={styles.mobilebar}>
        <button
          className={styles.navToggle}
          aria-label="Abrir menu"
          aria-controls="drawer"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <header className={`${styles.header} ${styles.headerTile}`}>
        <h1 className={styles.h1}>Catálogo de Séries</h1>
      </header>

      <aside id="drawer" className={`${styles.drawer} ${open ? styles.open : ""}`} aria-hidden={!open}>
        <div className={styles.drawerHead}>
          <strong>Menu</strong>
          <button className={styles.close} onClick={() => setOpen(false)} aria-label="Fechar">✕</button>
        </div>

        <nav className={styles.drawerLinks} aria-label="Menu principal (mobile)">
          {links.map((item) => (
            <a key={item} href="#">{item}</a>
          ))}
        </nav>
      </aside>

      {open && (
        <button className={styles.overlay} aria-label="Fechar menu" onClick={() => setOpen(false)} />
      )}

      <nav className={styles.global} aria-label="Menu global">
        <ul className={styles.globalList}>
          {links.map((l) => (<li key={l}><a>{l}</a></li>))}
        </ul>
      </nav>

      <aside className={styles.context} aria-label="Menu contextual">
        <h2 className={styles.h2}>Minha Locadora</h2>
        <ul className={styles.contextList}>
          <li><a>Minha conta</a></li>
          <li><a>Favoritos</a></li>
          <li><a>Histórico de aluguéis</a></li>
          <li><a>Downloads & comprovantes</a></li>
          <li><a>Configurações</a></li>
        </ul>
        <div className={styles.blockNote}>
          <strong>Dica:</strong> faça login para ver recomendações com base nas séries que você já alugou.
        </div>
      </aside>

      <section className={styles.main} aria-label="Conteúdo principal">
        <h2 className={styles.h2}>Destaques do Catálogo</h2>
        <p className={styles.text}>
          Confira os títulos em alta. Cada card leva para a página do seriado com
          detalhes de temporadas, idiomas e valor da diária.
        </p>

        <div className={styles.posterGrid}>
          {destaques.map((d) => (
            <article key={d.id} className={styles.posterCard}>
              <div className={styles.posterWrap}>
                <Image
                  src={d.src}
                  alt={`Pôster de ${d.titulo}`}
                  fill
                  className={styles.poster}
                  sizes="(max-width: 768px) 45vw, 280px"
                  priority
                />
              </div>

              <div className={styles.posterMeta}>
                <h3 className={styles.posterTitle}>{d.titulo}</h3>
                <span className={styles.badge}>{d.genero}</span>
                <span className={styles.badgeSecondary}>{d.ano}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className={styles.ads} aria-label="Pôsteres">
        <h2 className={styles.h2}>Pôsteres</h2>
        <div className={styles.adsGallery}>
          {adsPosters.map((p) => (
            <div key={p.id} className={styles.adPosterWrap}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className={styles.poster}
                sizes="(max-width: 768px) 90vw, 320px"
                priority
              />
            </div>
          ))}
        </div>
        <p className={styles.textMuted}>Seleção de capas do catálogo. Disponibilidade pode variar por região.</p>
      </aside>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Locadora de Séries</span>
      </footer>
    </main>
  );
}
