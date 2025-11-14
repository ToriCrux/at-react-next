import Image from "next/image";
import logo from "@/public/logo.svg";
import styles from "./Q1.module.css";

export default function Q1() {
  return (
    <main className={styles.wrapper}>
      <h1>Questão 1 — Menu Horizontal com Flex</h1>

      <header className={styles.header} aria-label="Menu principal">
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <Image src={logo} alt="Logo" width={28} height={28} className={styles.logo}/>
            <strong>Locadora de Séries</strong>
          </div>

          <ul className={styles.menu} aria-label="Opções do menu">
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>

          <button className={styles.user} aria-label="Conta">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 20.25a8.25 8.25 0 0 1 15 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </header>
    </main>
  );
}
