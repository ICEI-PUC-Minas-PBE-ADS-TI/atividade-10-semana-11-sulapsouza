const dados = [
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
      { id: 1, titulo: "Frente do vestido", imagem: "images/vestido.svg" },
      { id: 2, titulo: "Detalhe do cinto", imagem: "images/vestido.svg" },
      { id: 3, titulo: "Look completo", imagem: "images/vestido.svg" }
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
      { id: 1, titulo: "Vista frontal", imagem: "images/oculos.svg" },
      { id: 2, titulo: "Detalhe da armação", imagem: "images/oculos.svg" }
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
      { id: 1, titulo: "Vista frontal", imagem: "images/calca.svg" },
      { id: 2, titulo: "Detalhe bolsos cargo", imagem: "images/calca.svg" },
      { id: 3, titulo: "Vista lateral", imagem: "images/calca.svg" }
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
      { id: 1, titulo: "Frente da camisa", imagem: "images/brasil.svg" },
      { id: 2, titulo: "Costas e escudo", imagem: "images/brasil.svg" }
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
      { id: 1, titulo: "Vista frontal", imagem: "images/bolsa.svg" },
      { id: 2, titulo: "Interior da bolsa", imagem: "images/bolsa.svg" },
      { id: 3, titulo: "Detalhe do fecho", imagem: "images/bolsa.svg" },
      { id: 4, titulo: "Look de gala", imagem: "images/bolsa.svg" }
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
      { id: 1, titulo: "Vista frontal", imagem: "images/sapato.svg" },
      { id: 2, titulo: "Detalhe das tiras", imagem: "images/sapato.svg" }
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
      { id: 1, titulo: "Vista frontal", imagem: "images/saia.svg" },
      { id: 2, titulo: "Detalhe desfiado", imagem: "images/saia.svg" }
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
      { id: 1, titulo: "Capinha fechada", imagem: "images/capa.svg" },
      { id: 2, titulo: "Capinha com celular", imagem: "images/capa.svg" }
    ]
  }
];

function formatarPreco(preco) {
  return "R$ " + preco.toFixed(2).replace(".", ",");
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function renderCarousel() {
  const track = document.getElementById("carouselTrack");
  const dotsContainer = document.getElementById("carouselDots");
  if (!track || !dotsContainer) return;

  const destaques = dados.filter(function(p) { return p.destaque; });
  let indiceAtual = 0;

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  destaques.forEach(function(produto, index) {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");
    if (index === 0) slide.classList.add("active");

    slide.innerHTML =
      '<div class="carousel-slide-inner">' +
        '<div class="carousel-img-wrap">' +
          '<img src="' + produto.imagem + '" alt="' + produto.nome + '" class="carousel-img" />' +
        '</div>' +
        '<div class="carousel-info">' +
          '<span class="badge-categoria">' + produto.categoria + '</span>' +
          '<h2 class="carousel-nome">' + produto.nome + '</h2>' +
          '<p class="carousel-desc">' + produto.descricao + '</p>' +
          '<div class="carousel-footer">' +
            '<span class="carousel-preco">' + formatarPreco(produto.preco) + '</span>' +
            '<a href="detalhes.html?id=' + produto.id + '" class="btn-pink">Ver detalhes ✦</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("aria-label", "Slide " + (index + 1));
    dot.addEventListener("click", function() { irParaSlide(index); });
    dotsContainer.appendChild(dot);
  });

  function irParaSlide(novoIndice) {
    const slides = track.querySelectorAll(".carousel-slide");
    const dots = dotsContainer.querySelectorAll(".carousel-dot");
    slides[indiceAtual].classList.remove("active");
    dots[indiceAtual].classList.remove("active");
    indiceAtual = (novoIndice + destaques.length) % destaques.length;
    slides[indiceAtual].classList.add("active");
    dots[indiceAtual].classList.add("active");
  }

  document.getElementById("carouselPrev").addEventListener("click", function() {
    irParaSlide(indiceAtual - 1);
  });

  document.getElementById("carouselNext").addEventListener("click", function() {
    irParaSlide(indiceAtual + 1);
  });

  setInterval(function() { irParaSlide(indiceAtual + 1); }, 4000);
}


function renderCards(produtos) {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  productList.innerHTML = "";

  if (produtos.length === 0) {
    productList.innerHTML = '<p class="sem-resultados">Nenhum produto encontrado :(</p>';
    return;
  }

  produtos.forEach(function(produto) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const badgeClass = produto.emEstoque ? "badge-estoque" : "badge-esgotado";
    const badgeTexto = produto.emEstoque ? "Em estoque" : "Esgotado";

    card.innerHTML =
      '<span class="badge-status ' + badgeClass + '">' + badgeTexto + '</span>' +
      '<a href="detalhes.html?id=' + produto.id + '" class="card-img-link">' +
        '<img src="' + produto.imagem + '" alt="' + produto.nome + '" class="card-img" loading="lazy" />' +
      '</a>' +
      '<div class="card-body">' +
        '<p class="card-categoria">' + produto.categoria + '</p>' +
        '<h3 class="card-nome">' +
          '<a href="detalhes.html?id=' + produto.id + '">' + produto.nome + '</a>' +
        '</h3>' +
        '<p class="card-preco">' + formatarPreco(produto.preco) + '</p>' +
      '</div>' +
      '<div class="card-actions">' +
        '<a href="detalhes.html?id=' + produto.id + '" class="btn-outline-pink">Ver detalhes</a>' +
      '</div>';

    productList.appendChild(card);
  });
}

function renderCategorias() {
  const categorySelect = document.getElementById("category");
  if (!categorySelect) return;

  const categorias = ["Todas"].concat(
    dados
      .map(function(p) { return p.categoria; })
      .filter(function(cat, index, arr) { return arr.indexOf(cat) === index; })
  );

  categorySelect.innerHTML = "";

  categorias.forEach(function(cat) {
    const opt = document.createElement("option");
    opt.value = cat === "Todas" ? "todas" : cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
}


function filtrarProdutos() {
  const searchInput = document.getElementById("search");
  const categorySelect = document.getElementById("category");
  if (!searchInput || !categorySelect) return dados;

  const termo = normalizarTexto(searchInput.value);
  const catValue = categorySelect.value;

  return dados.filter(function(p) {
    const nomeMatch = normalizarTexto(p.nome).includes(termo);
    const catMatch = catValue === "todas" || p.categoria === catValue;
    return nomeMatch && catMatch;
  });
}

function renderDetalhe() {
  const detailSection = document.getElementById("detalhe-produto");
  const fotosSection = document.getElementById("detalhe-fotos");
  if (!detailSection || !fotosSection) return;

  const id = parseInt(getQueryParam("id"));
  const produto = dados.find(function(p) { return p.id === id; });

  if (!produto) {
    detailSection.innerHTML =
      '<div class="alerta-aviso">Produto não encontrado. <a href="index.html">Voltar ao início</a></div>';
    return;
  }

  const disponibilidade = produto.emEstoque
    ? '<span class="texto-estoque">Em Estoque</span>'
    : '<span class="texto-esgotado">Esgotado</span>';

  detailSection.innerHTML =
    '<div class="detalhe-grid">' +
      '<div class="detalhe-img-wrap">' +
        '<img src="' + produto.imagem + '" alt="' + produto.nome + '" class="detalhe-img" />' +
      '</div>' +
      '<div class="detalhe-info">' +
        '<span class="badge-categoria">' + produto.categoria + '</span>' +
        '<h1 class="detalhe-nome">' + produto.nome + '</h1>' +
        '<p class="detalhe-preco">' + formatarPreco(produto.preco) + '</p>' +
        '<hr class="detalhe-divider" />' +
        '<ul class="detalhe-atributos">' +
          '<li><strong>Cor:</strong> ' + produto.cor + '</li>' +
          '<li><strong>Tamanho:</strong> ' + produto.tamanho + '</li>' +
          '<li><strong>Material:</strong> ' + produto.material + '</li>' +
          '<li><strong>Disponibilidade:</strong> ' + disponibilidade + '</li>' +
        '</ul>' +
        '<h4 class="detalhe-desc-titulo">Descrição do produto:</h4>' +
        '<p class="detalhe-desc">' + produto.descricao + '</p>' +
      '</div>' +
    '</div>';

  fotosSection.innerHTML = "";

  if (produto.fotos && produto.fotos.length > 0) {
    produto.fotos.forEach(function(foto) {
      const col = document.createElement("div");
      col.classList.add("foto-card");
      col.innerHTML =
        '<img src="' + foto.imagem + '" alt="' + foto.titulo + '" class="foto-img" />' +
        '<p class="foto-titulo">' + foto.titulo + '</p>';
      fotosSection.appendChild(col);
    });
  } else {
    fotosSection.innerHTML = '<p class="sem-resultados">Nenhuma foto adicional disponível.</p>';
  }
}


function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", function() {
    navLinks.classList.toggle("open");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  initNavToggle();

  if (document.getElementById("carouselTrack")) {
    renderCarousel();
    renderCategorias();
    renderCards(dados);

    function aplicarFiltros() {
      renderCards(filtrarProdutos());
    }

    document.getElementById("btnRender").addEventListener("click", aplicarFiltros);
    document.getElementById("search").addEventListener("input", aplicarFiltros);
    document.getElementById("category").addEventListener("change", aplicarFiltros);
  }

  if (document.getElementById("detalhe-produto")) {
    renderDetalhe();
  }
});