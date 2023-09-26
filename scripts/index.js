const products = [
  {
    image: "../ternoAzulMarinho2.jpeg",
    title: "Terno Slim",
    description: "Descrição do Produto 1",
    price: "R$ 50,00",
  },
];

const productImage = document.getElementById("#product-img");
const productTitle = document.getElementById("#product-title");
const productDescription = document.getElementById("#product-description");
const productPrice = document.getElementById("#product-price");
const botaoProduto = document.getElementById("#this-btn");

// Função para exibir informações do produto selecionado
function showProductDetails(index) {
  const product = products[index];
  productImage.src = product.image;
  productTitle.textContent = product.title;
  productDescription.textContent = product.description;
  productPrice.textContent = `Preço: ${product.price}`;
}

botaoProduto.addEventListener("click", function () {
  const infoProduto = showProductDetails(0);

  const produtoJSON = JSON.stringify(infoProduto);

  const novaPagina = window.open("./paginaDescricao.html");

  novaPagina.onload = () => {
    novaPagina.postMessage(produtoJSON, "*");
  };
});
