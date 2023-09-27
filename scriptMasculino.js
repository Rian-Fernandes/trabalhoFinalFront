// Seleciona todos os elementos com a classe "control" dentro do elemento com id "carousel1"
const controls1 = document.querySelectorAll("#carousel1 .control");

// Inicializa a variável currentItem1 com o valor 0
let currentItem1 = 0;

// Seleciona todos os elementos com a classe "item" dentro do elemento com id "carousel1"
const items1 = document.querySelectorAll("#carousel1 .item");

// Armazena o número total de itens no carrossel
const maxItems1 = items1.length;

// Adiciona um evento de clique a cada controle do carrossel 1
controls1.forEach((control) => {
  control.addEventListener("click", (e) => {
    // Verifica se o controle clicado é o botão de seta para a esquerda
    isLeft = e.target.classList.contains("arrow-left");

    // Atualiza o índice do item atual com base na direção do clique
    if (isLeft) {
      currentItem1 -= 1;
    } else {
      currentItem1 += 1;
    }

    // Garante que o índice do item atual não seja maior que o número máximo de itens
    if (currentItem1 >= maxItems1) {
      currentItem1 = 0;
    }

    // Garante que o índice do item atual não seja menor que 0
    if (currentItem1 < 0) {
      currentItem1 = maxItems1 - 1;
    }

    // Remove a classe "current-item" de todos os itens
    items1.forEach((item) => item.classList.remove("current-item"));

    // Rola a visualização para o item atual de forma suave e centralizada
    items1[currentItem1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    // Adiciona a classe "current-item" ao item atual para destacá-lo
    items1[currentItem1].classList.add("current-item");
  });
});

// Repetição similar para o carrossel 2
const controls2 = document.querySelectorAll("#carousel2 .control");
let currentItem2 = 0;
const items2 = document.querySelectorAll("#carousel2 .item");
const maxItems2 = items2.length;
controls2.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 1;
    }

    if (currentItem2 >= maxItems2) {
      currentItem2 = 0;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item) => item.classList.remove("current-item"));

    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    items2[currentItem2].classList.add("current-item");
  });
});

// Repetição similar para o carrossel 3
const controls3 = document.querySelectorAll("#carousel3 .control");
let currentItem3 = 0;
const items3 = document.querySelectorAll("#carousel3 .item");
const maxItems3 = items3.length;
controls3.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem3 -= 1;
    } else {
      currentItem3 += 1;
    }

    if (currentItem3 >= maxItems3) {
      currentItem3 = 0;
    }

    if (currentItem3 < 0) {
      currentItem3 = maxItems3 - 1;
    }

    items3.forEach((item) => item.classList.remove("current-item"));

    items3[currentItem3].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    items3[currentItem3].classList.add("current-item");
  });
});
