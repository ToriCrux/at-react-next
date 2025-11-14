"use client";

import React, { useMemo, useState } from "react";
import {
  AppBar, Toolbar, IconButton, Typography, Container, Paper, Box,
  Stack, Button, Divider, useMediaQuery, createTheme, ThemeProvider,
  CssBaseline, Chip, LinearProgress,
} from "@mui/material";
import { Moon as DarkMode, Sun as LightMode } from "lucide-react";
import { questions } from "./data/questoes";

// Variáveis de cores que serão usadas ao longo da questão
const TOKENS = {
  bg:       "#f2f3f5",
  panel:    "#ffffff",
  panel2:   "#f7f8fa",
  text:     "#1b1d20",
  muted:    "#6b7280",
  line:     "#e6e8ec",
  ink:      "#2f3136",
  ink2:     "#3a3d44",
  shadow:   "0 2px 8px rgba(16,18,27,.06)",
  radius:   14,
  accent:   "#87C62E",
};

export default function QuizPage() {
  // Estado global de tema (light/dark)
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Criação do tema MUI baseada no estado `mode`
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: TOKENS.accent },
          background:
            mode === "light"
              ? { default: TOKENS.bg, paper: TOKENS.panel }
              : { default: "#0f1116", paper: "#1b1c1f" },
          text:
            mode === "light"
              ? { primary: TOKENS.text, secondary: TOKENS.muted }
              : { primary: "#f3f3f3", secondary: "#b9bcc6" },
          divider: mode === "light" ? TOKENS.line : "#2d2f34",
        },
        shape: { borderRadius: TOKENS.radius },
        typography: {
          fontFamily:
            '"Open Sans", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
          fontWeightBold: 800,
        },
        shadows: [
          "none",
          TOKENS.shadow,
          TOKENS.shadow,
          TOKENS.shadow,
          TOKENS.shadow,
          ...Array(20).fill(TOKENS.shadow),
        ] as any,
        // Componentes MUI para corresponder com o layout selecionado
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                border: `1px solid ${mode === "light" ? TOKENS.line : "#2d2f34"}`,
                boxShadow: TOKENS.shadow,
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                fontWeight: 700,
              },
              outlined: {
                borderColor: TOKENS.line,
                background: TOKENS.panel2,
              },
            },
          },
          MuiLinearProgress: {
            styleOverrides: {
              root: { backgroundColor: mode === "light" ? TOKENS.panel2 : "#232429" },
            },
          },
          MuiButton: {
            styleOverrides: {
              contained: { boxShadow: TOKENS.shadow },
              outlined: { borderColor: TOKENS.line },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: mode === "light" ? TOKENS.panel : "#1b1c1f",
                color: mode === "light" ? TOKENS.text : "#f3f3f3",
                borderBottom: `1px solid ${mode === "light" ? TOKENS.line : "#2d2f34"}`,
              },
            },
          },
        },
      }),
    [mode] // Quando o mode muda, o tema é recalculado
  );

  return (
    // ThemeProvider aplica o tema MUI no app inteiro
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* AppBar superior com botão de alternar tema */}
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          backdropFilter: "blur(6px)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1, fontWeight: 800 }}>
            Mobile-First UI com React — Quiz
          </Typography>

          {/* Botão que alterna entre light/dark */}
          <IconButton
            color="inherit"
            onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
            aria-label="Alternar tema"
          >
            {mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Container responsivo para telas desktop */}
      <Container
        maxWidth={false}
        sx={{
          py: 3,
          px: 2,
        
          "@media (min-width:768px)": {
            "--gutter": "12px",
            position: "relative",
            width: "calc(100vw - (var(--gutter) * 2))",
            left: "50%",
            marginLeft: "calc(-50vw + var(--gutter))",
            marginRight: "calc(-50vw + var(--gutter))",
            px: 0,
          },
          
          // Tratativa para telas grandes 
          "@media (min-width:1400px)": {
            
            position: "static",
            left: "auto",
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            px: 0,
          },
        }}
      >
        <Quiz />
      </Container>
    </ThemeProvider>
  );
}

// Lógica do Quiz
function Quiz() {
  const [current, setCurrent] = useState(0);              
  const [selected, setSelected] = useState<number | null>(null); 
  const [answered, setAnswered] = useState(false);        
  const [score, setScore] = useState(0);                  
  const [showResults, setShowResults] = useState(false);  

  const q = questions[current];

  // Detecta se o dispositivo está em orientação paisagem
  const isLandscape = useMediaQuery("(orientation: landscape)");

  // Barra de progresso baseada na questão atual
  const progress = ((current + 1) / questions.length) * 100;

  // Usuário confirma a resposta
  const handleAnswer = () => {
    if (selected === null) return;      // se não marcou nada, não faz nada, do contrário marca como respondida
    setAnswered(true);                  

    // Se acertou, soma 1 ponto
    if (selected === q.correta) setScore((s) => s + 1);
  };

  // Avança para a próxima 
  const goNext = () => {
    setAnswered(false);
    setSelected(null);

    if (current < questions.length - 1) {
      setCurrent((c) => c + 1); // se ainda há perguntas, vai para a próxima
    } else {
      setShowResults(true); // acabou o array de perguntas, mostra tela de resultados
    }
  };

  // Reset total do quiz
  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  // Tela final de resultados
  if (showResults) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="h5" fontWeight={800}>
            Resultado
          </Typography>
          <Typography variant="h6" color="primary" fontWeight={800}>
            {score}/{questions.length} acertos ({pct}%)
          </Typography>

          {/* Barra de progresso cheia com a porcentagem final */}
          <LinearProgress
            variant="determinate"
            value={pct}
            sx={{ width: "100%", height: 8, borderRadius: 999 }}
          />

          <Button variant="contained" onClick={reset}>
            Reiniciar Quiz 
          </Button>
        </Stack>
      </Paper>
    );
  }

  // Tela principal do quiz (enquanto ainda há perguntas)
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        display: "flex",
        flexDirection: isLandscape ? "row" : "column", // muda layout pelo orientation
        gap: 3,
      }}
    >
      {/* Coluna principal onde ficam enunciado + alternativas + feedback */}
      <Stack spacing={2} flex={1}>
        {/* Cabeçalho da questão com número da questão e barra de progresso */}
        <Stack direction="row" alignItems="center" gap={1}>
          <Chip
            label={`Questão ${current + 1} de ${questions.length}`}
            color="primary"
            variant="outlined"
          />
          <Box sx={{ flex: 1 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ height: 6, borderRadius: 999 }}
            />
          </Box>
        </Stack>

        {/* Enunciado */}
        <Typography variant="h6" fontWeight={800}>
          {q.enunciado}
        </Typography>

        {/* Lista de alternativas */}
        {q.opcoes.map((op, idx) => {
          const isSel = selected === idx;
          const isCorrect = q.correta === idx;

          // Lógica de cor de fundo das alternativas
          let bg = "background.paper";
          if (answered && isCorrect) bg = "success.light";              
          else if (answered && isSel && !isCorrect) bg = "error.light"; 
          else if (isSel) bg = "action.selected";                       

          return (
            <Box
              key={idx}
              // só permite trocar de opção enquanto ainda não confirmou
              onClick={() => !answered && setSelected(idx)}
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: bg,
                cursor: answered ? "default" : "pointer",
                transition: "0.25s",
                "&:hover": { bgcolor: answered ? bg : "action.hover" },
              }}
            >
              <Typography>{op}</Typography>
            </Box>
          );
        })}

        {/* Botão de confirmar e ir para a próxima */}
        {!answered ? (
          <Button variant="contained" onClick={handleAnswer} disabled={selected === null}>
            Confirmar resposta
          </Button>
        ) : (
          <>
            <Divider sx={{ my: 1 }} />

            {/* Mensagem de acerto/erro */}
            {selected === q.correta ? (
              <Typography color="success.main" fontWeight={800}>
                Correto! +1 ponto
              </Typography>
            ) : (
              <Typography color="error.main" fontWeight={800}>
                Errado!  Resposta correta: {q.opcoes[q.correta]}
              </Typography>
            )}

            {/* Justificativa da resposta */}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {q.justificativa}
            </Typography>

            <Button variant="outlined" onClick={goNext} sx={{ mt: 2 }}>
              Próxima
            </Button>
          </>
        )}
      </Stack>

      {/* Painel lateral só aparece em landscape, mostrando pontuação atual */}
      {isLandscape && (
        <Box
          sx={{
            minWidth: 200,
            pl: 2,
            borderLeft: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={800}>
            Pontos: {score}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mobile-First • Responsividade • Usabilidade
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
