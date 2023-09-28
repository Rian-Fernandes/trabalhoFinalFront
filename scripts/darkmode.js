const html = document.querySelector("html");
const themeButton = document.querySelector("#theme-checkbox");

themeButton.addEventListener("change", function () {
  const isDarkMode = themeButton.checked;
  
  html.classList.toggle("dark-mode", isDarkMode);
  
  const imgHeader = document.getElementById("logo");
  imgHeader.src = isDarkMode ? "./images/logoDark.gif" : "./images/logo.gif";
  
  const imgFooter = document.getElementById("logoF");
  imgFooter.src = isDarkMode ? "./images/logoDark.gif" : "./images/logo.gif";
});

document.addEventListener("DOMContentLoaded", function () {
  const isDarkMode = localStorage.getItem("dark-mode") === "true";
  html.classList.toggle("dark-mode", isDarkMode);
  themeButton.checked = isDarkMode;
  
  const imgHeader = document.getElementById("logo");
  imgHeader.src = isDarkMode ? "./images/logoDark.gif" : "./images/logo.gif";
  
  const imgFooter = document.getElementById("logoF");
  imgFooter.src = isDarkMode ? "./images/logoDark.gif" : "./images/logo.gif";
});
