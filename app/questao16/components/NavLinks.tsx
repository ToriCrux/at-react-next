import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";

// Estrutura dos itens de Menu Lateral (desktop)
type Item = { id: string; label: string; icon?: React.ReactNode };

// Lista fixa de itens que alimenta tanto o menu horizontal quanto o vertical
const items: Item[] = [
  { id: "home",      label: "Início",           icon: <HomeIcon /> },
  { id: "trending",  label: "Em alta",          icon: <WhatshotIcon /> },
  { id: "favorites", label: "Minhas favoritas", icon: <FavoriteIcon /> },
  { id: "lists",     label: "Minhas listas",    icon: <BookmarkIcon /> },
  { id: "settings",  label: "Configurações",    icon: <SettingsIcon /> },
];

// variant escolhe entre menu horizontal (topo) e vertical (sidebar/drawer)
type Props = {
  variant?: "horizontal" | "vertical";
  activeId?: string;      
  onNavigate?: () => void; 
};

export default function NavLinks({
  variant = "horizontal",
  activeId = "home",
  onNavigate,
}: Props) {

  // Versão vertical usada na navegação lateral (sidebar ou drawer)
  if (variant === "vertical") {
    return (
      <nav className="ls16-nav--vertical" aria-label="Navegação lateral">
        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <a
                href="#"
                onClick={onNavigate}
                className={it.id === activeId ? "is-active" : ""} // destaca a seção atual
              >
                <span className="ico" aria-hidden>
                  {it.icon}
                </span>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Versão horizontal usada logo abaixo do header em telas maiores
  return (
    <nav className="ls16-nav" aria-label="Navegação principal">
      <ul>
        {/* No horizontal, exibimos apenas os quatro primeiros itens */}
        {items.slice(0, 4).map((it) => (
          <li key={it.id}>
            <a href="#" onClick={onNavigate}>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
