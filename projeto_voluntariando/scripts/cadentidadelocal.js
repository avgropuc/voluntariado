function cadastraEntidade() {
  /*var Razao = document.getElementById("razao");
    var Cnpj = document.getElementById("cnpj");
    var Email = document.getElementById("logmail");
    var Sen = document.getElementById("senha");
    var Tel = document.getElementById("tel");
    var Pag = document.getElementById("site");
    var Cep = document.getElementById("cep");
    var Rua = document.getElementById("rua");
    var Bairro = document.getElementById("bairro");
    var Num = document.getElementById("num");
    var Comp = document.getElementById("comp");
    var cid = document.getElementById("cidade");
    var Est = document.getElementById("uf");*/

  var dados = JSON.parse(localStorage.getItem("dadosCadEnt"));

  if (dados == null) {
    localStorage.setItem("dadosCadEnt", "[]");
    dados = [];
  }

  var auxRegistro = {
    Razao: razao.value,
    Cnpj: cnpj.value,
    emailEnt: logemail.value,
    senhaEnt: senha.value,
    Tel: tel.value,
    Pag: site.value,
    Cep: cep.value,
    Rua: rua.value,
    Log: logemail.value,
    Bairro: bairro.value,
    Num: num.value,
    Comp: comp.value,
    Cid: cidade.value,
    Est: uf.value,
  };

  dados.push(auxRegistro);

  localStorage.setItem("dadosCadEnt", JSON.stringify(dados));
  alert("Registro incluído com sucesso!");

  razao.value = "";
  cnpj.value = "";
  logemail.value = "";
  senha.value = "";
  tel.value = "";
  site.value = "";
  cep.value = "";
  rua.value = "";
  logemail.value = "";
  bairro.value = "";
  num.value = "";
  comp.value = "";
  cidade.value = "";
  uf.value = "";

  window.location.href =
    "http://127.0.0.1:5500/projeto_voluntariando/paginas/login.html";
}
