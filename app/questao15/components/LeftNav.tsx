"use client";

import React from "react";
import {
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";

// Itens estáticos da navegação lateral
const items = [
  { id: "home", label: "Início", icon: <HomeIcon /> },
  { id: "trending", label: "Em alta", icon: <WhatshotIcon /> },
  { id: "favorites", label: "Minhas favoritas", icon: <FavoriteIcon /> },
  { id: "lists", label: "Minhas listas", icon: <BookmarkIcon /> },
  { id: "settings", label: "Configurações", icon: <SettingsIcon /> },
];

export default function LeftNav() {
  // Controle de qual item está ativo visualmente
  const [active, setActive] = React.useState("home");

  return (
    // Card da navegação lateral
    <Paper sx={{ p: 1.5 }}>
      <Typography variant="h6" fontWeight={800} sx={{ px: 1, mb: 0.5 }}>
        Navegação
      </Typography>

      {/* Lista de links de navegação */}
      <List>
        {items.map((it) => (
          <ListItemButton
            key={it.id}
            onClick={() => setActive(it.id)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              bgcolor: active === it.id ? "rgba(135,198,46,.12)" : "transparent", // Destaque visual
            }}
          >
            <ListItemIcon sx={{ color: active === it.id ? "primary.main" : "text.secondary" }}>
              {it.icon}
            </ListItemIcon>
            <ListItemText primary={it.label} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
