"use client";

import React, { useState } from "react";
import {
  Drawer,
  Tabs,
  Tab,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Friend, Suggestion } from "../data/socialData";

type Props = {
  open: boolean;
  defaultTab?: "following" | "discover";
  onClose: () => void;
  friends: Friend[];
  suggestions: Suggestion[];
};

export default function SidePeek({
  open,
  defaultTab = "following",
  onClose,
  friends,
  suggestions,
}: Props) {

  // Aba ativa de  "Seguindo" ou "Descobrir"
  const [tab, setTab] = useState<"following" | "discover">(defaultTab);

  return (
    // Drawer lateral que aparece na versão mobile quando o usuário toca em Seguindo/Descobrir
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: "88%", maxWidth: 420, bgcolor: "background.paper" } }}
    >
      {/* Cabeçalho com Tabs + botão de fechar */}
      <Box sx={{ p: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            sx={{ flex: 1 }}
            variant="fullWidth"
          >
            <Tab value="following" label="Seguindo" />
            <Tab value="discover" label="Descobrir" />
          </Tabs>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Conteúdo condicionado pela aba ativa */}
      <Box sx={{ p: 2 }}>
        {tab === "following" ? (
          <>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Você segue
            </Typography>
            <List>
              {friends.map((f) => (
                <ListItem key={f.id}>
                  <ListItemAvatar>
                    <Avatar src={f.photo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={f.name}
                    secondary={`${f.mutualFriends} séries em comum`}
                  />
                </ListItem>
              ))}
            </List>
          </>
        ) : (
          <>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Sugestões para você
            </Typography>
            <List>
              {suggestions.map((s) => (
                <ListItem key={s.id}>
                  <ListItemAvatar>
                    <Avatar src={s.photo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={s.name}
                    secondary={`Amigo em comum: ${s.mutualFriend}`}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Box>
    </Drawer>
  );
}
