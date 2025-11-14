"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/SideRailDrawer.module.css";

type Props = {
  latest: string[];
  mostReplied: string[];
  mostLiked: string[];
};
type TabKey = "latest" | "replied" | "liked";

// Painel lateral deslizante exclusivo para mobile
export default function SideRailDrawer({
  latest,
  mostReplied,
  mostLiked,
}: Props) {
  const [open, setOpen] = useState(false); // Controla se a gaveta está aberta ou fechada
  const [tab, setTab] = useState<TabKey>("latest");
  const [isDesktop, setIsDesktop] = useState(false); // Flag para saber se está em viewport desktop

  // Efeito para observar mudanças na largura da tela
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const update = () => setIsDesktop(mq.matches);
    update();

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches); // Handler chamado sempre que o breakpoint é cruzado

    mq.addEventListener?.("change", handler);
    mq.addListener?.(handler);

    return () => {
      mq.removeEventListener?.("change", handler);
      mq.removeListener?.(handler);
    };
  }, []);

  // Mapeamento entre chave da aba e conteúdo correspondente
  const sections: Record<TabKey, { title: string; items: string[] }> = {
    latest: { title: "Tópicos recentes", items: latest },
    replied: { title: "Mais respondidos", items: mostReplied },
    liked: { title: "Mais curtidos", items: mostLiked },
  };

  // Não renderiza o comportamento em telas desktop
  if (isDesktop) return null;

  return (
    <>
      {/* Barra compacta fixa com os três botões de acesso ao painel */}
      <div className={styles.compactBar}>
        <button
          className={styles.compactBtn}
          onClick={() => {
            setTab("latest");
            setOpen(true);
          }}
        >
          Recentes
        </button>
        <button
          className={styles.compactBtn}
          onClick={() => {
            setTab("replied");
            setOpen(true);
          }}
        >
          Respondidos
        </button>
        <button
          className={styles.compactBtn}
          onClick={() => {
            setTab("liked");
            setOpen(true);
          }}
        >
          Curtidos
        </button>
      </div>

      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={open ? "false" : "true"}
      />

      {/* Gaveta lateral com as abas de conteúdo */}
      <aside
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        aria-hidden={open ? "false" : "true"} 
      >
        <div className={styles.drawerHeader}>
          {/* Tabs internas para alternar entre as três listas */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                tab === "latest" ? styles.active : ""
              }`}
              onClick={() => setTab("latest")}
            >
              Recentes
            </button>
            <button
              className={`${styles.tab} ${
                tab === "replied" ? styles.active : ""
              }`}
              onClick={() => setTab("replied")}
            >
              Respondidos
            </button>
            <button
              className={`${styles.tab} ${
                tab === "liked" ? styles.active : ""
              }`}
              onClick={() => setTab("liked")}
            >
              Curtidos
            </button>
          </div>

          {/* Botão para fechar a gaveta */}
          <button
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="Fechar painel"
          >
            ✕
          </button>
        </div>

        {/* Lista correspondente à aba selecionada */}
        <div className={styles.content}>
          <h4 className={styles.title}>{sections[tab].title}</h4>
          <ol className={styles.list}>
            {sections[tab].items.map((t, i) => (
              <li key={i} className={styles.item}>
                {t}
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </>
  );
}
