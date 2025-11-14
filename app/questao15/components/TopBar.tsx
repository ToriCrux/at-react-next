"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";

type Props = { onOpenMenu?: () => void };

export default function TopBar({ onOpenMenu }: Props) {
  return (
    // Barra superior fixa, com logo, busca e ações
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        {/* Marca do produto */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LanguageIcon sx={{ color: "primary.main" }} />
          <Typography fontWeight={700}>LocaSeries Social</Typography>
        </Box>

        {/* Campo de busca que cresce no centro da topbar */}
        <TextField
          size="small"
          placeholder="Buscar séries, amigos, listas…"
          variant="outlined"
          sx={{
            ml: 2,
            flex: 1,
            minWidth: 140,
            bgcolor: "background.paper",
            borderRadius: 2,
            "& .MuiInputBase-input": { color: "text.primary" },
          }}
        />

        {/* Botão de menu só em telas pequenas */}
        <IconButton
          onClick={onOpenMenu}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          aria-label="abrir navegação"
        >
          <MenuIcon />
        </IconButton>

        {/* Avatar do usuário exibido apenas em desktop */}
        <Avatar
          sx={{ display: { xs: "none", md: "inline-flex" } }}
          src="/avatars/user.png"
          alt="Usuário"
        />
      </Toolbar>
    </AppBar>
  );
}
