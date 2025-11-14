export interface Question {
  id: number;
  enunciado: string;
  opcoes: string[];
  correta: number;
  justificativa: string;
}

export const questions: Question[] = [
  {
    id: 1,
    enunciado:
      "No fluxo Mobile-First, qual é a melhor prática para escrever media queries?",
    opcoes: [
      "Usar apenas max-width para todos os casos.",
      "Começar com estilos base e adicionar media queries com min-width para telas maiores.",
      "Começar com desktop e depois substituir tudo com max-width.",
      "Evitar media queries sempre que possível."
    ],
    correta: 1,
    justificativa:
      "Em Mobile-First definimos o estilo padrão para telas pequenas e **progressivamente melhoramos** com `@media (min-width: ...)` à medida que o espaço aumenta."
  },
  {
    id: 2,
    enunciado:
      "Qual estratégia reduz layout shift ao carregar imagens em páginas responsivas?",
    opcoes: [
      "Remover atributos de largura e altura das imagens.",
      "Definir largura/altura (ou aspect-ratio) e usar imagens responsivas (srcset/sizes).",
      "Carregar todas as imagens em 4K.",
      "Aplicar `position: absolute` em todas as imagens."
    ],
    correta: 1,
    justificativa:
      "Informar **dimensões/`aspect-ratio`** evita jumps de layout; `srcset/sizes` entrega um arquivo adequado ao viewport."
  },
  {
    id: 3,
    enunciado:
      "Em navegação por toque, qual é uma recomendação comum para área clicável?",
    opcoes: [
      "Mínimo de 24x24 px.",
      "Mínimo de 36x36 px.",
      "Mínimo de 44x44 px.",
      "Mínimo de 60x60 px."
    ],
    correta: 2,
    justificativa:
      "Diretrizes como as da Apple e do Material Design recomendam **~44x44 px** como alvo mínimo confortável ao toque."
  },
  {
    id: 4,
    enunciado:
      "Qual padrão de layout ajuda a reorganizar facilmente colunas em linhas no mobile?",
    opcoes: [
      "CSS Floats com clearfix.",
      "CSS Flexbox com `flex-wrap` e `order`.",
      "Tabelas HTML.",
      "Z-index elevado."
    ],
    correta: 1,
    justificativa:
      "O **Flexbox** permite quebrar linhas (`flex-wrap`) e alterar a ordem visual (`order`) sem mudar o HTML."
  },
  {
    id: 5,
    enunciado:
      "Para acessibilidade, qual relação de contraste é geralmente recomendada para textos normais (WCAG AA)?",
    opcoes: ["2.5:1", "3:1", "4.5:1", "7:1"],
    correta: 2,
    justificativa:
      "A WCAG nível **AA** recomenda **4.5:1** para textos normais (3:1 para texto grande)."
  },
  {
    id: 6,
    enunciado:
      "Qual abordagem de tipografia ajuda a escalar fontes suavemente entre tamanhos de tela?",
    opcoes: [
      "Usar apenas px fixos.",
      "Usar `clamp()` combinando valores mínimos, preferenciais e máximos.",
      "Usar porcentagens para tudo.",
      "Evitar responsividade em fontes."
    ],
    correta: 1,
    justificativa:
      "`clamp(min, preferido, max)` permite **tipografia fluida**, limitando um intervalo seguro entre viewports."
  },
  {
    id: 7,
    enunciado:
      "Qual é um benefício do CSS Grid em páginas responsivas complexas?",
    opcoes: [
      "Dispensa media queries em qualquer cenário.",
      "Evita reflow do navegador.",
      "Substitui a necessidade de Flexbox.",
      "Permite mapear áreas (grid-template-areas) e reordenar layouts por breakpoint de forma previsível."
    ],
    correta: 3,
    justificativa:
      "O **Grid** facilita definir **áreas nomeadas** e alterar composições por breakpoint sem alterar o HTML."
  },
  {
    id: 8,
    enunciado:
      "Ao otimizar performance no mobile, qual prática é mais adequada?",
    opcoes: [
      "Usar code-splitting e lazy loading para rotas/trechos pouco usados.",
      "Carregar todas as dependências no bundle inicial.",
      "Evitar cache HTTP.",
      "Duplicar CSS para cada breakpoint."
    ],
    correta: 0,
    justificativa:
      "**Code-splitting/lazy** reduz o custo inicial, carregando somente o necessário para a primeira tela."
  },
  {
    id: 9,
    enunciado:
      "Sobre inputs em dispositivos móveis, qual cuidado melhora a usabilidade?",
    opcoes: [
      "Forçar teclado numérico com `inputmode`/`type` apropriados.",
      "Desabilitar auto-complete.",
      "Centralizar todos os inputs.",
      "Usar labels apenas como placeholder."
    ],
    correta: 0,
    justificativa:
      "Definir `type`/`inputmode` adequados (ex.: numérico, email) **aciona o teclado correto** e reduz erro de digitação."
  },
  {
    id: 10,
    enunciado:
      "Qual técnica evita zoom inesperado em iOS quando o usuário toca em um campo de texto?",
    opcoes: [
      "Definir `font-size` dos inputs ≥ 16px.",
      "Definir `zoom: 0;` no body.",
      "Trocar o meta viewport por `user-scalable=no`.",
      "Usar `transform: scale(.9)` na página."
    ],
    correta: 0,
    justificativa:
      "No iOS, inputs com **font-size < 16px** podem forçar zoom; usar **≥ 16px** evita o comportamento."
  },
  {
    id: 11,
    enunciado:
      "Qual metatag é essencial para layouts responsivos em dispositivos móveis?",
    opcoes: [
      "<meta charset='utf-8'>",
      "<meta name='viewport' content='width=device-width, initial-scale=1'>",
      "<meta http-equiv='X-UA-Compatible' content='IE=edge'>",
      "<meta name='theme-color' content='#000000'>"
    ],
    correta: 1,
    justificativa:
      "A metatag **viewport** define escala e largura base, permitindo que o CSS responda corretamente ao viewport do dispositivo."
  },
  {
    id: 12,
    enunciado:
      "Quando usar `display: contents` pode ajudar na responsividade?",
    opcoes: [
      "Para remover elementos do DOM.",
      "Para melhorar contraste de texto.",
      "Para ignorar a caixa do elemento e deixar apenas seus filhos participarem do layout.",
      "Para fixar o elemento no topo."
    ],
    correta: 2,
    justificativa:
      "`display: contents` remove a caixa do elemento sem remover seus filhos, útil quando a **estrutura semântica** não deve impactar o **layout responsivo**."
  }
];
