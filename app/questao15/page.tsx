"use client";
import React, { useMemo, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Button,
  Stack,
} from "@mui/material";

import styles from "./styles/PageWrap.module.css";

import TopBar from "./components/TopBar";
import LeftNav from "./components/LeftNav";
import Timeline from "./components/Timeline";
import FollowingList from "./components/FollowingList";
import DiscoverPeople from "./components/DiscoverPeople";
import NavPanel from "./components/NavPanel";
import SidePeek from "./components/SidePeek";
import { friends, suggestions } from "./data/socialData";

export default function Page() {
  const [navOpen, setNavOpen] = useState(false);
  const [peekOpen, setPeekOpen] = useState(false);
  const [peekTab, setPeekTab] = useState<"following" | "discover">("following");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          primary: { main: "#87C62E" },
          background: { default: "#f2f3f5", paper: "#ffffff" }, 
          text: { primary: "#2f3136", secondary: "#3a3d44" },   
          divider: "#e6e8ec",                                  
        },
        shape: { borderRadius: 14 },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
                backgroundImage: "none",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
                backgroundImage: "none",
              },
            },
          },
          MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: { root: { textTransform: "none", fontWeight: 700 } },
          },
        },
        typography: {
          fontFamily: '"Inter", system-ui, -apple-system, Segoe UI, Roboto',
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <TopBar onOpenMenu={() => setNavOpen(true)} />
      <NavPanel open={navOpen} onClose={() => setNavOpen(false)} />

      <div className={styles.container}>
        <div className={styles.peekBar}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%", display: { xs: "flex", md: "none" }, justifyContent: "center" }}
          >
            <Button
              size="large"
              variant="contained"
              onClick={() => { setPeekTab("following"); setPeekOpen(true); }}
            >
              Seguindo
            </Button>
            <Button
              size="large"
              variant="outlined"
              onClick={() => { setPeekTab("discover"); setPeekOpen(true); }}
            >
              Descobrir
            </Button>
          </Stack>
        </div>

        <main className={styles.main}>
          <section className={styles.leftCol} aria-label="Navegação secundária">
            <LeftNav />
          </section>

          <section className={styles.centerCol} aria-label="Timeline">
            <Timeline />
          </section>

          <aside className={styles.rightCol} aria-label="Seguindo e sugestões">
            <FollowingList friends={friends} />
            <DiscoverPeople suggestions={suggestions} />
          </aside>
        </main>
      </div>

      <SidePeek
        open={peekOpen}
        defaultTab={peekTab}
        onClose={() => setPeekOpen(false)}
        friends={friends}
        suggestions={suggestions}
      />
    </ThemeProvider>
  );
}
