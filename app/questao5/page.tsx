"use client";

import { useState } from "react";
import styles from "./Q5.module.css";

export default function Q5() {
  const [open, setOpen] = useState(false);

  const links = ["Início", "Catálogo", "Meus Aluguéis", "Blog", "Contato"];

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

      <header className={styles.header}>
        <h1 className={styles.h1}>Catálogo de Séries</h1>
        <p className={styles.lead}></p>
      </header>

      <aside
        id="drawer"
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.drawerHead}>
          <strong>Menu</strong>
          <button
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        <nav className={styles.drawerLinks} aria-label="Menu principal (mobile)">
          {links.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {open && (
        <button
          className={styles.overlay}
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        />
      )}

      <nav className={styles.global} aria-label="Menu global">
        <ul className={styles.globalList}>
          {links.map((item) => (
            <li key={item} className={styles.globalItem}>
              <a href="#" className={styles.globalLink}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <aside className={styles.context} aria-label="Filtros">
        <h2 className={styles.h2}>Filtros</h2>
        <ul className={styles.contextList}>
          <li>
            <a href="#">Fantasia &amp; Aventura</a>
          </li>
          <li>
            <a href="#">Ficção Científica</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
          <li>
            <a href="#">Comédia</a>
          </li>
          <li>
            <a href="#">Top da Semana</a>
          </li>
        </ul>

        <div className={styles.blockNote}>
          <strong>Dica:</strong> combine filtros para encontrar séries do seu
          gosto.
        </div>
      </aside>

      <section className={styles.main} aria-label="Destaques do Catálogo">
        <h2 className={styles.h2}>Destaques do Catálogo</h2>
        <p className={styles.text}>
          Confira títulos em alta. Cada card pode levar para a página do
          seriado com detalhes de temporadas, idiomas e valor da diária.
        </p>

        <div className={styles.cardGrid}>
          <article className={styles.card}>
            <h3 className={styles.h3}>Lançamentos</h3>
            <p className={styles.textSm}>
              Toda semana novos títulos entram no catálogo. Fique de olho nos
              lançamentos e maratone no fim de semana.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.h3}>Gêneros Populares</h3>
            <ul className={styles.bullets}>
              <li>Fantasia &amp; Aventura</li>
              <li>Ficção Científica &amp; Thriller</li>
              <li>Drama &amp; Comédia</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h3 className={styles.h3}>Como Funciona</h3>
            <p className={styles.textSm}>
              Selecione a série, escolha a temporada desejada e confirme o
              aluguel. Assista quando quiser durante o período ativo.
            </p>
          </article>
        </div>
      </section>

      <aside className={styles.ads} aria-label="Promoções">
        <h2 className={styles.h2}>Promoções</h2>
        <div className={styles.adBox}>
          <span className={styles.adSize}>Combo Fantasia: leve 3, pague 2</span>
        </div>
        <div className={styles.adBoxTall}>
          <span className={styles.adSize}>Plano semanal com 20% OFF</span>
        </div>
        <p className={styles.textMuted}>
          Ofertas válidas para títulos selecionados. Consulte disponibilidade
          por região.
        </p>
      </aside>

      <footer className={styles.footer}>© 2025 Locadora de Séries</footer>
    </main>
  );
}
