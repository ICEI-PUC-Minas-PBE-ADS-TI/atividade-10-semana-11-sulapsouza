# Trabalho Prático - Semana 11

Nesta atividade, vamos dar continuidade ao projeto desenvolvido ao longo deste semestre, acrescentando a página de detalhes da aplicação.

Imagine que a página principal (home-page) mostre uma visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado para a página de detalhes. A página de detalhes vai mostrar todas as informações sobre o item do seu projeto, seja esse item uma notícia, filme, receita, lugar turístico ou evento.

## Informações Gerais

- Nome: Sulamita Pinheiro de Souza
- Matrícula: 927424
- Descreva brevemente seu projeto: O meu projeto consiste em um Bazar online de alguns itens usados pela personagem Barbie durante a sua trajetória profissional. 

## Prints do trabalho

<<  COLOQUE A IMAGEM - HOME-PAGE - AQUI >>
![HOME](./public/images/homepage.png)
<<  COLOQUE A IMAGEM - TELA DE DETALHES - AQUI >>
![HOME](./public/images/detalhes.png)
## Dados em JSON
Inclua abaixo a estrutura de dados definida para o seu projeto, apresentando pelo menos dois exemplos de registros em formato JSON.

```json
  {
    id: 1,
    nome: "Vestido Tomara que Caia",
    preco: 189.90,
    categoria: "Roupas",
    cor: "Rosa",
    tamanho: "P / M / G",
    material: "Viscose",
    imagem: "images/vestido.svg",
    descricao: "Vestido curto tomara que caia com botões frontais e cinto de amarrar. Perfeito para arrasar em qualquer ocasião especial.",
    emEstoque: true,
    destaque: true,
    fotos: [
      { id: 1, titulo: "Frente do vestido", imagem: "images/vestido_frente.jpg" },
      { id: 2, titulo: "Detalhe do cinto", imagem: "images/cinto_vestido.jpg" },
      { id: 3, titulo: "Look completo", imagem: "images/vestido_completo.jpg" }
    ]
  },
  {
    id: 2,
    nome: "Óculos Rosa Maximalista",
    preco: 129.00,
    categoria: "Acessórios",
    cor: "Rosa",
    tamanho: "Único",
    material: "Acetato",
    imagem: "images/oculos.svg",
    descricao: "Óculos maximalista rosa, usado no São Paulo Fashion Week (SFFW) 2026. Peça de edição limitada.",
    emEstoque: false,
    destaque: true,
    fotos: [
      { id: 1, titulo: "Vista frontal", imagem: "images/oculosf.jpg" },
      { id: 2, titulo: "Detalhe da armação", imagem: "images/oculosa.jpg" }
    ]
  },
  {
    id: 3,
    nome: "Calça Jeans Cargo Wide",
    preco: 319.90,
    categoria: "Roupas",
    cor: "Azul índigo",
    tamanho: "36 ao 44",
    material: "Jeans 100% Algodão",
    imagem: "images/calca.svg",
    descricao: "Calça Jeans Cargo modelo wide leg. Super estilosa e despojada, para ocasiões básicas com muito estilo.",
    emEstoque: true,
    destaque: false,
    fotos: [
      { id: 1, titulo: "Vista frontal", imagem: "images/visaof.jpg" },
      { id: 2, titulo: "Detalhe bolsos cargo", imagem: "images/bolsos.jpg" },
      { id: 3, titulo: "Vista lateral", imagem: "images/lateral.jpg" }
    ]
  },
  {
    id: 4,
    nome: "Camisa Brasil 2026",
    preco: 249.00,
    categoria: "Roupas",
    cor: "Verde e Amarelo",
    tamanho: "PP ao GG",
    material: "Poliéster Dri-Fit",
    imagem: "images/brasil.svg",
    descricao: "Camisa oficial do Brasil para a Copa do Mundo de 2026. Vista o verde e amarelo com muito estilo.",
    emEstoque: true,
    destaque: true,
    fotos: [
      { id: 1, titulo: "Frente da camisa", imagem: "images/frentec.jpg" },
      { id: 2, titulo: "Costas e escudo", imagem: "images/tras.jpg" }
    ]
  },
  {
    id: 5,
    nome: "Bolsa Rosa Chanel",
    preco: 998.90,
    categoria: "Acessórios",
    cor: "Rosa pastel",
    tamanho: "25cm x 16cm",
    material: "Couro sintético premium",
    imagem: "images/bolsa.svg",
    descricao: "Bolsa elegante rosa inspirada no estilo Chanel. Usada pela Barbie em eventos de gala e tapetes vermelhos.",
    emEstoque: true,
    destaque: true,
    fotos: [
      { id: 1, titulo: "Interior da bolsa", imagem: "images/interiorb.jpg" },
      { id: 2, titulo: "Detalhe do fecho", imagem: "images/fechod.jpg" },
      { id: 3, titulo: "Look de gala", imagem: "images/lookb.jpg" }
    ]
  },
  {
    id: 6,
    nome: "Sandália Gladiadora",
    preco: 99.90,
    categoria: "Sapatos",
    cor: "Branco",
    tamanho: "34 ao 40",
    material: "Couro ecológico",
    imagem: "images/sapato.svg",
    descricao: "Sandália gladiadora branca com tiras cruzadas. Perfeita para compor looks confortáveis do dia a dia.",
    emEstoque: true,
    destaque: false,
    fotos: [
      { id: 1, titulo: "Vista frontal", imagem: "images/fronts.jpg" },
      { id: 2, titulo: "Detalhe das tiras", imagem: "images/dtiras.jpg" }
    ]
  },
  {
    id: 7,
    nome: "Saia Jeans Curta",
    preco: 179.00,
    categoria: "Roupas",
    cor: "Azul claro",
    tamanho: "34 ao 42",
    material: "Jeans Strech",
    imagem: "images/saia.svg",
    descricao: "Saia jeans curta levemente desfiada na barra. Combine com cropped e tênis para um look descolado.",
    emEstoque: false,
    destaque: false,
    fotos: [
      { id: 1, titulo: "Vista lateral", imagem: "images/laterals.jpg" },
      { id: 2, titulo: "Detalhe desfiado", imagem: "images/desfiados.jpg" }
    ]
  },
  {
    id: 8,
    nome: "Capinha Celular Rosa",
    preco: 69.90,
    categoria: "Acessórios",
    cor: "Rosa neon",
    tamanho: "iPhone / Samsung",
    material: "Silicone premium",
    imagem: "images/capa.svg",
    descricao: "Capinha de celular rosa neon. Acessório fofo e indispensável para proteger seu aparelho com muito estilo.",
    emEstoque: true,
    destaque: false,
    fotos: [
      { id: 1, titulo: "Capinha sem celular", imagem: "images/capinhas.jpg" },
      { id: 2, titulo: "Capinha com celular", imagem: "images/capinhac.jpg" }
    ]
  }
```


