function cadastraVoluntario() {
  // Pega os dados da tela
  var nome = document.getElementById("nome");
  var cpf = document.getElementById("cpf");
  var logemail = document.getElementById("logemail");
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

  // Preenche o objeto com os dados
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

  //Salva na lista
  dados.push(auxRegistro);

  // Salva no localstorage
  localStorage.setItem("dadosCadastro", JSON.stringify(dados));
  alert("Registro realizado com sucesso!");

  //Limpa os campos
  nome.value = "";
  cpf.value = "";
  logemail.value = "";
  senha.value = "";
  tel.value = "";
  cep.value = "";
  bairro.value = "";
  cidade.value = "";
  uf.value = "";

  //Redireciona para login
  window.location.href = "../paginas/login.html";
}
