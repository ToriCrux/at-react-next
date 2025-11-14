"use client";

import { useState } from "react";
import { Menu, User } from "lucide-react";
import {
  Shell,
  NavBar,
  Brand,
  IconButton,
  Collapse,
  MenuList,
  MenuItem,
} from "./styles";

export default function Questao9() {
  const [aberto, setAberto] = useState(false);

  return (
    <Shell>
      <NavBar>
        <IconButton
          aria-label="Abrir menu"
          aria-expanded={aberto}
          aria-controls="menu-colapsavel"
          onClick={() => setAberto((v) => !v)}
        >
          <Menu />
        </IconButton>

        <Brand>Locadora de Séries</Brand>

        <IconButton aria-label="Perfil">
          <User />
        </IconButton>
      </NavBar>

      <Collapse
        id="menu-colapsavel"
        data-open={aberto}
        role="region"
        aria-label="Opções do menu"
      >
        <MenuList>
          <MenuItem>Início</MenuItem>
          <MenuItem>Catálogo</MenuItem>
          <MenuItem>Meus Aluguéis</MenuItem>
          <MenuItem>Promoções</MenuItem>
        </MenuList>
      </Collapse>
    </Shell>
  );
}
