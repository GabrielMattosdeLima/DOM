// Botão 1 - altera o texto do título e a cor
function alterarTitulo() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Título Alterado!";
  titulo.style.color = "darkred";
}

// Botão 2 - altera a imagem e o tamanho
function alterarImagem() {
  const imagem = document.getElementById("imagem");
  imagem.src = "https://picsum.photos/237/400";
  imagem.style.width = "300px";
  imagem.style.height = "200px";
}

// Botão 3 - altera texto1 e cor de fundo
function alterarTexto1() {
  const texto1 = document.getElementById("texto1");
  texto1.textContent = "Texto 1 foi modificado!";
  texto1.style.backgroundColor = "lightblue";
}

// Botões 4, 5, 6 - colocam o texto do botão no texto2
function atualizarTexto2(botao) {
  const texto2 = document.getElementById("texto2");
  texto2.textContent = botao.textContent;
}
