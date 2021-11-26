function logar() {
  let emailUsuario = document.querySelector("#emailUsuario");
  let emailLabel = document.querySelector("#emailLabel");
  let senhaUsuario = document.querySelector("#senhaUsuario");
  let senhaLabel = document.querySelector("#senhaLabel");
  let msgErro = document.querySelector("#msgErro");
  let dadosCadastro = [];
  let userValid = {
    emailLog: "",
    senhaLog: "",
  };
  dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro"));

  dadosCadastro.forEach((item) => {
    if (emailUsuario.value == item.email && senhaUsuario.value == item.senha) {
      userValid = {
        emailLog: item.email,
        senhaLog: item.senha,
      };
    }
  });

  if (
    emailUsuario.value == userValid.emailLog &&
    senhaUsuario.value == userValid.senhaLog
  ) {
    window.location.href =
      "http://127.0.0.1:5500/projeto_voluntariando/paginas/telaPerfilVoluntario.html";
  } else {
    emailLabel.setAttribute("style", "color:red");
    emailUsuario.setAttribute("style", "boder-color:red");
    senhaLabel.setAttribute("style", "color:red");
    senhaUsuario.setAttribute("style", "border-color:red");
    msgErro.setAttribute("style", "display:block");
    msgErro.innerHTML = "Email ou senha incorretos!";
    emailUsuario.focus();
  }

  cadUsuarioPadrao = JSON.parse(localStorage.getItem("cadUsuarioPadrao"));

  cadUsuarioPadrao.forEach((item) => {
    if (emailUsuario.value == item.email && senhaUsuario.value == item.senha) {
      userValid = {
        emailLog: item.email,
        senhaLog: item.senha,
      };
    }
  });

  if (
    emailUsuario.value == userValid.emailLog &&
    senhaUsuario.value == userValid.senhaLog
  ) {
    window.location.href =
      "http://127.0.0.1:5500/projeto_voluntariando/paginas/telaPerfilVoluntario.html";
  } else {
    emailLabel.setAttribute("style", "color:red");
    emailUsuario.setAttribute("style", "boder-color:red");
    senhaLabel.setAttribute("style", "color:red");
    senhaUsuario.setAttribute("style", "border-color:red");
    msgErro.setAttribute("style", "display:block");
    msgErro.innerHTML = "Email ou senha incorretos!";
    emailUsuario.focus();
  }
}

/* let email = document.getElementById("email");
  let senha = document.getElementById("senha");

  let dadosCadastro = [];

  let userValid = {
    email: "",
    senha: "",
  };

  dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro"));

  dadosCadastro.forEach((item) => {
    if (email.value == item.email && senha.value == item.senha) {
      userValid = {
        email: item.email,
        senha: item.senha,
      };
    }
  });

  if (email.value == userValid.email && senha.value == userValid.senha) {
    alert("Login Efetuado com Sucesso!");

    window.location.href = "../paginas/telaPerfilVoluntario.html";
  } else {
    alert("Erro");
  }
}*/
