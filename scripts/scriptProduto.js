(async function getProduto() {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  const url = "https://651378698e505cebc2e9e3dc.mockapi.io/produtos/" + id;
  const response = await fetch(url);
  const produto = await response.json();
  mostrarProduto(produto);
})();

async function mostrarProduto(prod) {
  const container = document.querySelector("meu-container");
  const img = document.getElementById("product-img");
  const title = document.getElementById("product-title");
  const description = document.getElementById("product-description");
  const price = document.getElementById("product-price");
  img.src = prod.image;
  title.innerText = prod.title;
  description.innerText = prod.description;
  price.innerText = prod.price;
}
