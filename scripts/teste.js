window.addEventListener("message", function (event) {
  const productInfo = JSON.parse(event.data);

  document.getElementById("product-img").src = productInfo.image;
  document.getElementById("product-title").textContent = productInfo.title;
  document.getElementById("product-description").textContent =
    productInfo.description;
  document.getElementById("product-price").textContent = productInfo.price;
});
