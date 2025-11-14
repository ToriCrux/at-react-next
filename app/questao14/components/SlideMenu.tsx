"use client";
import React from "react";
import styles from "../styles/SlideMenu.module.css";

interface Props { open: boolean; setOpen: (v: boolean) => void; menu: string[]; }

// Menu lateral deslizante usado no cabeçalho mobile
const SlideMobile: React.FC<Props> = ({ open, setOpen, menu }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Gaveta lateral com os links do menu principal */}
      <aside
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        aria-hidden={!open}
      >
        <button
          className={styles.close}
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
        >
          ✕
        </button>

        <nav aria-label="Menu mobile">
          <ul className={styles.menu}>
            {menu.map((item) => (
              <li key={item}>
                <a className={styles.item} href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
export default SlideMobile;
