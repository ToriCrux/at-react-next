"use client";

import * as React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Stack,
  Avatar,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type Aluguel = {
  id: number;
  serie: string;
  diaria: number;   
  dias: number;    
  poster?: string;  
};

const toBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Tarefa12() {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:768px)");

  const alugueis: Aluguel[] = [
    {
      id: 1,
      serie: "Outlander — Temporada 1",
      diaria: 7.9,
      dias: 3,
      poster: "/gallery/foto1.webp",
    },
    {
      id: 2,
      serie: "Orphan Black — Temporada 2",
      diaria: 9.9,
      dias: 2,
      poster: "/gallery/foto2.webp",
    },
    {
      id: 3,
      serie: "Game of Thrones — Temporada 4",
      diaria: 12.9,
      dias: 4,
      poster: "/gallery/foto5.webp",
    },
  ];

  const totalGeral = alugueis.reduce((acc, a) => acc + a.diaria * a.dias, 0);
  const totalDiarias = alugueis.reduce((acc, a) => acc + a.dias, 0);

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        minHeight: "100dvh",
        py: { xs: 2, md: 3 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        bgcolor: "#f2f3f5",
      }}
    >
      {/* TÍTULO */}
      <Typography
        variant="h5"
        align="center"
        fontWeight={800}
        sx={{ mt: 0.5, mb: 1 }}
      >
        🛒 Carrinho — Locadora de Séries 🎬
      </Typography>

      {/* MOBILE - CARDS COM CAPA */}
      {!isDesktop && (
        <Stack spacing={2} sx={{ width: "100%", maxWidth: 640 }}>
          {alugueis.map((a) => (
            <Paper
              key={a.id}
              elevation={2}
              sx={{
                p: 2,
                borderRadius: 2,
                border: "1px solid #e6e8ec",
                boxShadow: "0 2px 8px rgba(16,18,27,.06)",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar
                  variant="rounded"
                  src={a.poster}
                  alt={a.serie}
                  sx={{ width: 56, height: 80, bgcolor: "grey.900" }}
                />
                <Box flex={1} minWidth={0}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ mb: 0.5 }}
                    noWrap
                  >
                    {a.serie}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Diária: {toBRL(a.diaria)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Diárias: {a.dias}
                  </Typography>
                </Box>

                <Box textAlign="right">
                  <Typography variant="body2" color="text.secondary">
                    Total
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {toBRL(a.diaria * a.dias)}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}

          {/* Resumo geral no mobile */}
          <Paper
            elevation={1}
            sx={{
              mt: 1,
              p: 2,
              borderRadius: 2,
              border: "1px solid #e6e8ec",
              bgcolor: "#f7f8fa",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {alugueis.length} séries • {totalDiarias} diárias
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mt: 0.5, textAlign: "right" }}
            >
              Total da Compra: {toBRL(totalGeral)}
            </Typography>
          </Paper>
        </Stack>
      )}

      {/* DESKTOP - CARD ÚNICO ESTILO */}
      {isDesktop && (
        <Paper
          component="section"
          elevation={2}
          sx={{
            width: "100%",
            maxWidth: 960,
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #e6e8ec",
            boxShadow: "0 2px 8px rgba(16,18,27,.06)",
            bgcolor: "#ffffff",
          }}
        >
          {/* Cabeçalho*/}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 0.8fr 1fr",
              columnGap: 1.5,
              alignItems: "center",
              px: 2.25,
              py: 1.4,
              bgcolor: "#3a3d44",
              color: "#ffffff",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            <Typography variant="body2">Série</Typography>
            <Typography variant="body2">Diária</Typography>
            <Typography variant="body2">Diárias</Typography>
            <Typography variant="body2">Total</Typography>
          </Box>

          {/* Linhas */}
          <Box>
            {alugueis.map((a) => (
              <Box
                key={a.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 0.8fr 1fr",
                  columnGap: 1.5,
                  alignItems: "center",
                  px: 2.25,
                  py: 1.3,
                  borderTop: "1px solid #e6e8ec",
                  transition: "background .18s ease, transform .12s ease",
                  "&:hover": {
                    bgcolor: "#f2f4f7",
                    transform: "translateY(-1px)",
                    cursor: "pointer",
                  },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar
                    variant="rounded"
                    src={a.poster}
                    alt={a.serie}
                    sx={{ width: 36, height: 52, bgcolor: "grey.900" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, textAlign: "left" }}
                  >
                    {a.serie}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  sx={{
                    fontVariantNumeric: "tabular-nums",
                    color: "#6b7280",
                    textAlign: "left",
                  }}
                >
                  {toBRL(a.diaria)}
                </Typography>

                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  {a.dias}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                >
                  {toBRL(a.diaria * a.dias)}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              borderTop: "1px solid #e6e8ec",
              bgcolor: "#f7f8fa",
              px: 2.25,
              py: 1.5,
              display: "grid",
              gap: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Total de diárias: <b>{totalDiarias}</b>
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 1.25,
                py: 1.2,
                bgcolor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #e6e8ec",
              }}
            >
              <Typography variant="body1" fontWeight={700}>
                Total da Compra
              </Typography>
              <Typography variant="body1" fontWeight={700}>
                {toBRL(totalGeral)}
              </Typography>
            </Box>
          </Box>
        </Paper>
      )}
    </Container>
  );
}
