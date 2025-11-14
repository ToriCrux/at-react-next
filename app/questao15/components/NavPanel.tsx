"use client";
import React from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";

type Props = { open: boolean; onClose: () => void };

// Itens da navegação do painel lateral versão mobile
const items = [
  { id: "home", text: "Início", icon: <HomeIcon /> },
  { id: "trending", text: "Em alta", icon: <WhatshotIcon /> },
  { id: "favorites", text: "Minhas favoritas", icon: <FavoriteIcon /> },
  { id: "lists", text: "Minhas listas", icon: <BookmarkIcon /> },
  { id: "settings", text: "Configurações", icon: <SettingsIcon /> },
];

// Lista interna usada dentro do Drawer
function MenuList() {
  const [active, setActive] = React.useState("home");

  return (
    <Box sx={{ width: 300, p: 2 }}>
      <Typography variant="subtitle1" color="text.secondary" sx={{ px: 1, pb: 1 }}>
        Navegação
      </Typography>
      <Divider sx={{ mb: 1 }} />

      <List>
        {items.map((it) => (
          <ListItemButton
            key={it.id}
            onClick={() => setActive(it.id)}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              color: active === it.id ? "primary.main" : "text.primary",
              bgcolor: active === it.id ? "action.selected" : "transparent",
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 36 }}>
              {it.icon}
            </ListItemIcon>
            <ListItemText primary={it.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default function NavPanel({ open, onClose }: Props) {
  return (
    // Drawer que aparece quando o usuário toca no menu 
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={{ sx: { bgcolor: "background.paper", width: 300 } }}
      sx={{ zIndex: (t) => t.zIndex.modal }}
    >
      <MenuList />
    </Drawer>
  );
}
