import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import type { Suggestion } from "../data/socialData";

type Props = { suggestions: Suggestion[] };

export default function DiscoverPeople({ suggestions }: Props) {
  return (
    // Card que agrupa o bloco "Descobrir pessoas"
    <Paper sx={{ p: 2 }}>

      {/* Título do bloco */}
      <Typography variant="h6"  fontWeight={800} sx={{ mb: 1 }}>
        Descobrir pessoas
      </Typography>

      {/* Lista de sugestões de perfis */}
      <List disablePadding>
        {suggestions.map((s) => (
          <ListItem
            key={s.id}
            disableGutters
            sx={{
              mb: 1.5,
              px: 1.5,
              py: 1,
              borderRadius: 2,
              bgcolor: "background.default",
            }}
          >
            {/* Container flex para alinhar conteúdo e botão de seguir */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {/* Avatar + nome + amigo em comum */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flex: 1, minWidth: 220 }}>
                <ListItemAvatar sx={{ minWidth: 48 }}>
                  <Avatar src={s.photo} />
                </ListItemAvatar>
                <ListItemText
                  primary={s.name}
                  secondary={`Amigo em comum: ${s.mutualFriend}`}
                  slotProps={{
                    primary: { sx: { fontWeight: 600 } },
                    secondary: { sx: { color: "text.secondary" } },
                  }}
                />
              </Box>

              {/* Ação principal: botão de seguir */}
              <Button
                variant="outlined"
                color="success"
                sx={{
                  ml: "auto",
                  minWidth: 96,
                  mt: { xs: 1, sm: 0 },
                }}
              >
                Seguir
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
