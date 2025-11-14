"use client";

import React from "react";
import { Stack } from "@mui/material";
import { posts } from "../data/socialData";
import PostCard from "./PostCard";

export default function Timeline() {
  return (
    // Coluna central da página social, renderizando a lista de posts
    <Stack spacing={3}>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </Stack>
  );
}
