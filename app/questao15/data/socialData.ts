export type Comment = { id: number; author: string; text: string };

export type Post = {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  image?: string;
  date: string;
  likes: number;
  shares: number;
  comments: Comment[];
};

export type Friend = { 
  id: number; 
  name: string; 
  photo: string; 
  mutualFriends: number 
};

export type Suggestion = { 
  id: number; 
  name: string; 
  photo: string; 
  mutualFriend: string 
};

export const posts: Post[] = [
{
    id: 1,
    author: "Mariana Duarte",
    avatar: "/avatars/a1.png",
    title: "Explorando o novo Material UI v6",
    content: "O que é Ruptura! Apenas sem palavras pra descrever essa série...",
    image: "/gallery/foto12.webp",  
    date: "29/10/2025",
    likes: 128,
    shares: 22,
    comments: [
      { id: 1, author: "João Pedro", text: "Foi um acerto enorme da Apple Tv!" },
      { id: 2, author: "Ana Carolina", text: "Aguardando confirmação da segunda temporada 💙" },
    ],
  },
  {
    id: 2,
    author: "Carlota Silva",
    avatar: "/icon1.png",
    title: "Queria ser um hacker como ele!",
    content: "Simplesmente sensacional o quão poderosa a internet pode ser e o quanto o conhecimento pode fazer você desbravar o mundo. No caso dele foi sem nem sair da cadeira!",
    image: "/gallery/foto11.webp", 
    date: "30/10/2025",
    likes: 89,
    shares: 14,
    comments: [
      { id: 1, author: "Juliana Antunes", text: "Concordo totalmente!" },
      { id: 2, author: "Robert Moraes", text: "Deep Web é o caminho!" },
    ],
  },
];

export const friends: Friend[] = [
  { id: 1, name: "Ana Mariana", photo: "/avatars/f1.png", mutualFriends: 9 },
  { id: 2, name: "Rafaela Novaes", photo: "/avatars/f2.png", mutualFriends: 5 },
  { id: 3, name: "Carmem Nogueira", photo: "/avatars/f3.png", mutualFriends: 7 },
  { id: 4, name: "Bruna Keller", photo: "/avatars/f4.png", mutualFriends: 4 },
];

export const suggestions: Suggestion[] = [
  { id: 1, name: "Julie Solto", photo: "/avatars/s1.png", mutualFriend: "Felix Soares" },
  { id: 2, name: "Felix Soares", photo: "/avatars/s2.png", mutualFriend: "Julie Solto" },
  { id: 3, name: "Beatriz Mendonça", photo: "/avatars/s3.png", mutualFriend: "Felix Soares" },
];
