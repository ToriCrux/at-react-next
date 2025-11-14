"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import styles from "./Q2.module.css";

export default function Q2() {
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Questão 2 — Menu Vertical com Flex e Flex-grow</h1>

      <div className={styles.layout}>
        <button
          className={styles.menuBtn}
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <aside className={`${styles.menu} ${open ? styles.open : ""}`} aria-label="Menu lateral">
          <div className={styles.menuHeader}>
            <div className={styles.brand}>
              <Image src={logo} alt="Logo" width={32} height={32} className={styles.brandLogo}/>
              <strong>Locadora de Séries</strong>
            </div>

            <button
              className={styles.menuClose}
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <nav className={styles.links}>
            <a href="#">Início</a>
            <a href="#">Catálogo</a>
            <a href="#">Meus Aluguéis</a>
            <a href="#">Blog</a>
            <a href="#">Contato</a>
          </nav>

          <div className={styles.menuFooter}>© 2025</div>
        </aside>

        {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}

        <section className={styles.content}>
          <div className={styles.box}>
            <h2>Exemplo de Conteúdo</h2>
            <p>
              Este layout é mobile-first. No celular, o menu desliza pela esquerda.
              Em telas maiores (≥768px), o menu fica fixo e a área de conteúdo usa flex-grow.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
