async function getProduto() {
  const url = "https://651378698e505cebc2e9e3dc.mockapi.io/produtos";
  const response = await fetch(url);
  const produto = await response.json();
  console.log(produto);
  return produto[0];
}

async function mostrarProduto() {
  const prod = await getProduto();
  console.log(prod);
  // const container = document.querySelector("meu-container");
  // //const img = document.createElement("#product-img");
  // const img = document.createElement("img");
  // const title = document.getElementById("product-title");
  // const description = document.getElementById("product-description");
  // const price = document.getElementById("product-price");
  // img.src = prod.url;
  // container.appendChild(img);
}
