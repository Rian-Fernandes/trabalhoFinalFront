const html = document.querySelector("html");
const themeButton = document.querySelector("#theme-checkbox");

themeButton.addEventListener("change", function () {
  html.classList.toggle("dark-mode", themeButton.checked);
});