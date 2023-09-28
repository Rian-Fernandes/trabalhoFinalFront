const html = document.querySelector("html");
const themeButton = document.querySelector("#theme-checkbox");

themeButton.addEventListener("change", function () {
  html.classList.toggle("dark-mode", themeButton.checked);
  const img = document.getElementById("logo");
  img.src = "./images/logoDark.gif";
  const img2 = document.getElementById("logoF");
  img2.src = "./images/logoDark.gif";
});
