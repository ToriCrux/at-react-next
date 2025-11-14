"use client";
import React, { useState } from "react";
import styles from "../styles/ForumHeader.module.css";
import SlideMobile from "./SlideMenu";

interface HeaderProps { menu: string[]; }

// Cabeçalho do fórum (logo + menu) com variação mobile/desktop
const ForumHeader: React.FC<HeaderProps> = ({ menu }) => {
  // Controla abertura do menu deslizante no mobile
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>Comunidade da Locadora</div>

        {/* Menu horizontal visível apenas no desktop via CSS */}
        <nav className={styles.nav} aria-label="Menu principal">
          <ul className={styles.menu}>
            {menu.map((item) => (
              <li key={item} className={styles.menuItem}>
                <a href="#" className={styles.link}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão hambúrguer apenas para mobile, abre o SlideMobile */}
        <button
          className={styles.burger}
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Menu lateral deslizante reutiliza o mesmo array de itens */}
      <SlideMobile open={open} setOpen={setOpen} menu={menu} />
    </>
  );
};

export default ForumHeader;
