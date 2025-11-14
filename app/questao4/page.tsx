import styles from "./Q4.module.css";

export default function Q4() {
  return (
    <main className={styles.grid}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Locadora de Séries</h1>
        <p className={styles.lead}>Explore o catálogo, confira destaques e promoções semanais.</p>
      </header>

      <nav className={styles.global} aria-label="Menu global">
        <ul className={styles.globalList}>
          <li><a>Início</a></li>
          <li><a>Catálogo</a></li>
          <li><a>Meus Aluguéis</a></li>
          <li><a>Blog</a></li>
          <li><a>Contato</a></li>
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
          Confira títulos em alta na semana. Cada card pode levar para a página do seriado com
          detalhes de temporadas, idiomas e valor da diária.
        </p>

        <div className={styles.cardGrid}>
          <article className={styles.card}>
            <h3 className={styles.h3}>Planos e Diárias</h3>
            <p className={styles.textSm}>
              Alugue por diária ou monte pacotes semanais com desconto. Qualidade HD e 4K quando disponível.
            </p>
          </article>

          <article className={styles.card}>
            <h3 className={styles.h3}>Gêneros Populares</h3>
            <ul className={styles.bullets}>
              <li>Fantasia & Aventura</li>
              <li>Ficção Científica & Thriller</li>
              <li>Drama & Comédia</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h3 className={styles.h3}>Como Funciona</h3>
            <p className={styles.textSm}>
              Selecione a série, escolha a temporada desejada e confirme o aluguel. Assista quando quiser durante o período ativo.
            </p>
          </article>
        </div>
      </section>

      <aside className={styles.ads} aria-label="Área de anúncio">
        <h2 className={styles.h2}>Promoções</h2>

        <div className={styles.adBox}>
          <span className={styles.adSize}>Combo Fantasia: leve 3, pague 2</span>
        </div>

        <div className={styles.adBoxTall}>
          <span className={styles.adSize}>Plano semanal com 20% OFF</span>
        </div>

        <p className={styles.textMuted}>
          Ofertas válidas para títulos selecionados. Consulte disponibilidade por região.
        </p>
      </aside>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Locadora de Séries</span>
      </footer>
    </main>
  );
}
