"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function HeaderBar() {
  // Controla se o menu lateral mobile (drawer) está aberto ou fechado
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Barra fixa no topo com logo, busca e ações do usuário */}
      <header className="ls16-header">
        {/* Botão hamburguer só usado no mobile para abrir o drawer */}
        <button
          className="ls16-hamburger"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        {/* Marca da LocaSeries (ponto verde + texto) */}
        <div className="ls16-brand" aria-label="LocaSeries">
          <span className="ls16-dot" />
          LocaSeries
        </div>

        {/* Campo de busca central que cresce para ocupar o espaço livre */}
        <input
          className="ls16-search"
          placeholder="Buscar séries, atores, gêneros..."
        />

        {/* Perfil e carrinho usando ícones do MUI */}
        <div className="ls16-actions" aria-label="Ações do usuário">
          <button className="ls16-iconBtn" aria-label="Perfil">
            <PersonIcon fontSize="inherit" />
          </button>
          <button className="ls16-iconBtn" aria-label="Carrinho">
            <ShoppingCartIcon fontSize="inherit" />
          </button>
        </div>
      </header>

      {/* Overlay escurecendo o fundo quando o menu lateral está aberto */}
      <div
        className={`ls16-drawer-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer lateral com o menu de navegação para mobile */}
      <aside
        className={`ls16-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label="Menu de navegação"
      >
        {/* Logo repetida e botão de fechar */}
        <div className="ls16-drawer-head">
          <div className="ls16-brand">
            <span className="ls16-dot" />
            LocaSeries
          </div>
          <button
            className="ls16-close"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        {/* Navegação vertical reaproveitando o componente NavLinks */}
        <div className="ls16-drawer-body">
          {/* onNavigate fecha o menu ao clicar em qualquer link */}
          <NavLinks onNavigate={() => setOpen(false)} />
        </div>
      </aside>
    </>
  );
}
