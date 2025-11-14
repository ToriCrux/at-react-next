"use client";

import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Friend } from "../data/socialData";

export default function FollowingList({ friends }: { friends: Friend[] }) {
  return (
    // Card com a lista de perfis que o usuário já segue
    <Paper sx={{ p: 2 }}>
      
      <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
        Seguindo
      </Typography>

      {/* Lista simples com avatar, nome e séries em comum */}
      <List dense>
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
    </Paper>
  );
}
