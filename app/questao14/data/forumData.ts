export interface Topic {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  author: string;
  date: string;
  likes: number;
  responses: number;
}

export interface Response {
  id: number;
  author: string;
  date: string;
  message: string;
  likes: number;
}

export const mainTopic: Topic = {
  id: 1,
  title: "Qual a melhor ordem para maratonar Game of Thrones + House of the Dragon?",
  subtitle: "Sequência cronológica x ordem de lançamento — qual funciona melhor?",
  description:
    "Abrimos este fio para ajudar novos assinantes da LocaSeries a decidir como maratonar o universo de Westeros. Vale começar por House of the Dragon ou seguir a ordem de lançamento de Game of Thrones? Compartilhe prós e contras, experiências e links de guias (sem spoilers pesados).",
  author: "Curadoria LocaSeries",
  date: "28/10/2025",
  likes: 138,
  responses: 7,
};

export const topicResponses: Response[] = [
  { id: 1, author: "Marina R.", date: "28/10/2025", message: "Eu recomendo ordem de lançamento. A construção de mundo de GoT funciona melhor e você pega as referências de HOTD depois.", likes: 22 },
  { id: 2, author: "Diego A.",  date: "28/10/2025", message: "Cronológica é legal para quem curte política Targaryen desde o começo, mas sem contexto alguns momentos perdem impacto.", likes: 17 },
  { id: 3, author: "Letícia M.",date: "29/10/2025", message: "Para maratona rápida: GoT S1–S6, depois HOTD S1–S2, e aí volta para GoT S7–S8. Diminui a sensação de queda no fim.", likes: 34 },
  { id: 4, author: "Bruno K.",  date: "29/10/2025", message: "Se tiver pouco tempo, veja resumos de GoT S7–S8 e assista HOTD completo. A fotografia e ritmo de HOTD estão redondos.", likes: 11 },
  { id: 5, author: "Sofia T.",  date: "30/10/2025", message: "Para quem vem do livro Fogo & Sangue, cronológica é um deleite. Para iniciantes, sigam lançamento.", likes: 29 },
  { id: 6, author: "Rafa P.",   date: "30/10/2025", message: "Se estiver vendo com amigos que já conhecem, cronológica fica mais divertida (cheia de foreshadowing).", likes: 9 },
  { id: 7, author: "Gustavo L.",date: "31/10/2025", message: "Independentemente da ordem, ativem legendas com nomes de casas (acessibilidade) — ajuda MUITO nas primeiras semanas.", likes: 15 },
];

export const menuItems = [
  "Início",
  "Catálogo",
  "Minhas Séries",
  "Comunidade",
  "Ofertas",
  "Configurações",
];

export const sidebarData = {
  latest: [
    "Calendário de estreias — Novembro",
    "Melhores minisséries de 2025",
    "Dublagem x Legenda: preferências",
    "5 séries leves para maratonar no feriado",
    "Acessibilidade: áudio-descrição no app",
  ],
  mostReplied: [
    "Qual TV é melhor para assistir em 4K?",
    "Ordem de Star Wars (séries + animações)",
    "Top 10 episódios de sitcom (votos da comunidade)",
    "Qual serviço de streaming você usa junto da LocaSeries?",
    "Melhores aberturas de séries",
  ],
  mostLiked: [
    "Guia definitivo de Breaking Bad + Better Call Saul",
    "Checklist de episódios essenciais de The Office",
    "Tutorial: como baixar para ver offline no app",
    "Como criar perfis infantis",
    "Atalhos de teclado no player web",
  ],
};

export const currentUser = { name: "Usuário LocaSeries" };
