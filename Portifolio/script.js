const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;
let intervalo;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(${-contador * 500}px)`;
}

// Iniciar o carrossel chamando slider() uma vez para iniciar e, em seguida, configurando o intervalo
slider();
intervalo = setInterval(slider, 1800);

// Adicionar o redirecionamento para o link da imagem quando uma imagem for clicada
imagens.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    const link = imagem.parentElement.href;
    // Abrir o link em uma nova aba
    window.open(link, "_blank");
  });
});
