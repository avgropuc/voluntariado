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
  let entValid = {
    emailLogEnt: "",
    senhaLogEnt: "",
  };
  /* dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro"));

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
  }*/

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

  dadosCadastroEmpresa = JSON.parse(localStorage.getItem("dadosCadEnt"));

  dadosCadastroEmpresa.forEach((item) => {
    if (
      emailUsuario.value == item.emailEnt &&
      senhaUsuario.value == item.senhaEnt
    ) {
      entValid = {
        emailLogEnt: item.emailEnt,
        senhaLogEnt: item.senhaEnt,
      };
    }
  });

  if (
    emailUsuario.value == entValid.emailLogEnt &&
    senhaUsuario.value == entValid.senhaLogEnt
  ) {
    window.location.href =
      "http://127.0.0.1:5500/projeto_voluntariando/paginas/telaPerfilEntidade.html";
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
