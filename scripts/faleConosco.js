document
  .getElementById("formContato")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    var nome = document.querySelector("#nome");
    var email = document.querySelector("#email");
    var mensagem = document.querySelector("#mensagem");

    if (nome.value === "" || email.value === "" || mensagem.value === "") {
      alert("Por favor, preencha todos os campos");
      return;
    } else {
      const user = {
        nome: nome.value,
        email: email.value,
        mensagem: mensagem.value,
      };
      localStorage.setItem("user", JSON.stringify(user));
    }

    // Salvar os dados no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("mensagem", mensagem);

    alert(
      "Obrigado " + nome.value + "! Suas informações foram salvas com sucesso!"
    );
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  });
