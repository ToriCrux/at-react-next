export type Review = {
  id: number;
  user: string;
  date: string;      
  message: string;
  rating: number;   
};

export type Qna = {
  id: number;
  user: string;
  date: string;
  question: string;
  answer: string;
  rating: number;    
};

export type Related = {
  id: number;
  name: string;
  price: number;     
  image: string;     
};

export type Vendor = {
  name: string;
  email: string;
  phone: string;
  rating: number;
  note: number;      
};

export type SeriesProduct = {
  id: number;
  name: string;
  description: string;
  price: number;     
  rating: number;    
  image: string;
  note: number;      
};

export const storeData: {
  product: SeriesProduct;
  vendor: Vendor;
  reviews: Review[];
  qna: Qna[];
  related: Related[];
} = {
  product: {
    id: 1,
    name: "Outlander — 1ª Temporada",
    description:
  "Drama histórico com viagem no tempo que acompanha a enfermeira inglesa Claire Randall, em 1945, que é misteriosamente transportada para 1743 na Escócia. Lá ela enfrenta rivalidades entre clãs, segredos de guerra e se vê dividida entre dois mundos — e dois homens.",
    price: 12.90,          
    rating: 4.8,
    note: 5,
    image: "/gallery/foto1.webp",
  },

  vendor: {
    name: "LocaSeries Oficial",
    email: "contato@locaseries.com",
    phone: "(47) 9 9999-9999",
    rating: 4.9,
    note: 5,
  },

  reviews: [
    {
      id: 1,
      user: "Paula Fernandes",
      date: "2025-11-01",
      message: "Série incrível, fotografia e trilha sonora absurdas. Final impactante!",
      rating: 5,
    },
    {
      id: 2,
      user: "Rafael N.",
      date: "2025-11-03",
      message: "Ritmo lento em alguns episódios, mas a payoff compensa.",
      rating: 4,
    },
  ],

  qna: [
    {
      id: 1,
      user: "Ana Paula",
      date: "2025-11-05",
      question: "A locação vem com áudio original e legendas PT-BR?",
      answer: "Sim, áudio original (EN) e legendas PT-BR e EN.",
      rating: 5,
    },
    {
      id: 2,
      user: "Lucas Prado",
      date: "2025-11-06",
      question: "Qual a janela de tempo para assistir após alugar?",
      answer: "Você tem 48h após a primeira reprodução.",
      rating: 4,
    },
  ],

  related: [
    { id: 101, name: "Mr. Robot — 1ª Temporada", price: 8.90, image: "/gallery/foto11.webp" },
    { id: 102, name: "Stranger Things — 5ª Temporada", price: 10.90, image: "/gallery/foto8.webp" },
    { id: 103, name: "The Big Bang Theory - 3ª Temporada", price: 9.90, image: "/gallery/foto7.webp" },
  ],
};
