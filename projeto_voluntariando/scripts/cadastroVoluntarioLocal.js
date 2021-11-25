function cadastraVoluntario() {
  //HEAD
  var nome = document.getElementById("nome");
  var cpf = document.getElementById("cpf");
  var email = document.getElementById("logmail");
  var senha = document.getElementById("senha");
  var tel = document.getElementById("tel");
  var cep = document.getElementById("cep");
  var bairro = document.getElementById("bairro");
  var cidade = document.getElementById("cidade");
  var uf = document.getElementById("uf");

  var dados = JSON.parse(localStorage.getItem("dadosCadastro"));

  if (dados == null) {
    localStorage.setItem("dadosCadastro", "[]");
    dados = [];
  }
  //=======
  var nome = document.getElementById("nome");
  var cpf = document.getElementById("cpf");
  // HEAD
  var logemail = document.getElementById("logemail");

  var email = document.getElementById("logmail");
  //Inserção de tela de perfil do voluntário
  var senha = document.getElementById("senha");
  var tel = document.getElementById("tel");
  var cep = document.getElementById("cep");
  var bairro = document.getElementById("bairro");
  var cidade = document.getElementById("cidade");
  var uf = document.getElementById("uf");

  var dados = JSON.parse(localStorage.getItem("dadosCadastro"));

  if (dados == null) {
    localStorage.setItem("dadosCadastro", "[]");
    dados = [];
  }

  var auxRegistro = {
    nome: nome.value,
    cpf: cpf.value,
    email: logemail.value,
    senha: senha.value,
    tel: tel.value,
    cep: cep.value,
    bairro: bairro.value,
    cidade: cidade.value,
    uf: uf.value,
  };

  dados.push(auxRegistro);

  localStorage.setItem("dadosCadastro", JSON.stringify(dados));
  alert("Registro incluído com sucesso!");

  //HEAD
  window.location.href = "../paginas/login.html";

  //Inserção de tela de perfil do voluntário

  nome.value = "";
  cpf.value = "";
  logemail.value = "";
  senha.value = "";
  tel.value = "";
  cep.value = "";
  bairro.value = "";
  cidade.value = "";
  uf.value = "";
}
/*>>>>>>> main

  var auxRegistro = {
    nome: nome.value,
    cpf: cpf.value,
    email: logemail.value,
    senha: senha.value,
    tel: tel.value,
    cep: cep.value,
    bairro: bairro.value,
    cidade: cidade.value,
    uf: uf.value,
  };

  dados.push(auxRegistro);

  localStorage.setItem("dadosCadastro", JSON.stringify(dados));
  alert("Registro incluído com sucesso!");

  nome.value = "";
  cpf.value = "";
  logemail.value = "";
  senha.value = "";
  tel.value = "";
  cep.value = "";
  bairro.value = "";
  cidade.value = "";
  uf.value = "";
}*/
