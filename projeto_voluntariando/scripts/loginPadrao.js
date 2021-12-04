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
  if (emailUsuario.value == "" || senhaUsuario.value == "") {
    sessionStorage.setItem("entidadeLogado", null);
    sessionStorage.setItem("usuarioLogado", null);
    emailLabel.setAttribute("style", "color:red");
    emailUsuario.setAttribute("style", "boder-color:red");
    senhaLabel.setAttribute("style", "color:red");
    senhaUsuario.setAttribute("style", "border-color:red");
    msgErro.setAttribute("style", "display:block");
    msgErro.innerHTML = "Email ou senha incorretos!";
    emailUsuario.focus();
    return;
  }
  cadUsuarioPadrao = JSON.parse(localStorage.getItem("cadUsuarioPadrao"));

  cadUsuarioPadrao.forEach((item) => {
    if (emailUsuario.value == item.email && senhaUsuario.value == item.senha) {
      userValid = {
        emailLog: item.email,
        senhaLog: item.senha,
      };
      sessionStorage.setItem("usuarioLogado", userValid);
    }
  });

  if (
    emailUsuario.value == userValid.emailLog &&
    senhaUsuario.value == userValid.senhaLog
  ) {
    window.location.href =
      "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/projeto_voluntariando/paginas/telaPerfilVoluntario.html";
  } else {
    emailLabel.setAttribute("style", "color:red");
    emailUsuario.setAttribute("style", "boder-color:red");
    senhaLabel.setAttribute("style", "color:red");
    senhaUsuario.setAttribute("style", "border-color:red");
    msgErro.setAttribute("style", "display:block");
    msgErro.innerHTML = "Email ou senha incorretos!";
    emailUsuario.focus();
  }

  dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro"));

  dadosCadastro.forEach((item) => {
    if (emailUsuario.value == item.email && senhaUsuario.value == item.senha) {
      userValid = {
        emailLog: item.email,
        senhaLog: item.senha,
      };
      sessionStorage.setItem("usuarioLogado", userValid);
    }
  });

  if (
    emailUsuario.value == userValid.emailLog &&
    senhaUsuario.value == userValid.senhaLog
  ) {
    window.location.href =
      "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/projeto_voluntariando/paginas/telaPerfilVoluntario.html";
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
      sessionStorage.setItem("entidadeLogado", entValid);
    }
  });

  if (
    emailUsuario.value == entValid.emailLogEnt &&
    senhaUsuario.value == entValid.senhaLogEnt
  ) {
    window.location.href =
      "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/projeto_voluntariando/paginas/telaPerfilEntidade.html";
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
