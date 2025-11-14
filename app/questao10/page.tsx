"use client";

import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";
import styles from "./Q10.module.css";

export default function Questao10() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => mql.matches && setAberto(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const opcoes = ["Catálogo", "Meus Aluguéis", "Promoções", "Contato"];

  return (
    <header className={styles.shell}>
      <nav className={styles.navbar} aria-label="Menu responsivo">
        <div className={styles.left}>
          <button
            className={styles.iconBtn + " " + styles.menuBtn}
            aria-label="Abrir/fechar menu"
            aria-expanded={aberto}
            aria-controls="menu-opcoes"
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? <X /> : <Menu />}
          </button>

          <span className={styles.brand}>Locadora de Séries</span>
        </div>

        <ul
          id="menu-opcoes"
          className={styles.menuList}
          data-open={aberto ? "true" : "false"}
          role="menu"
        >
          {opcoes.map((label) => (
            <li key={label} className={styles.menuItem} role="menuitem">
              {label}
            </li>
          ))}
        </ul>

        <button className={styles.iconBtn} aria-label="Perfil">
          <User />
        </button>
      </nav>
    </header>
  );
}
