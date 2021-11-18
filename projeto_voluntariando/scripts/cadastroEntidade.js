function validar() {
  var razao = formUser.razao.value;
  var Cnpj = formUser.cnpj.value;
  var Email = formUser.logemail.value;
  var senha = formUser.senha.value;
  var tel = formUser.tel.value;
  var cep = formUser.cep.value;
  var cidade = formUser.cidade.value;
  var estado = document.uf.value;

  //---------------------------- CHAMADA DE FUNÇÕES PARA VALIDAÇÃO ----------------------------

  Cnpj = validarCNPJ(Cnpj);
  Email = validarEMAIL(Email);

  //------------------------------------- RESULTADO -------------------------------------------
  if (razao == "") {
    alert("Digite o nome da empresa.");
    formUser.razao.focus();
    return false;
  }

  if (Cnpj == 0) {
    alert("CNPJ inválido! Digite novamente.");
    document.getElementById("cnpj").value = "";
    return false;
  }

  if (Email == 0) {
    alert(
      "E-mail inválido! Preencha corretamente o campo do email (ex: usuario@email.com)"
    );
    document.getElementById("logemail").value = "";
    return false;
  }

  if (senha == "" || senha.length != 4) {
    alert("Preencha o campo senha com 4 dígitos");
    formUser.senha.focus();
    return false;
  }

  if (cidade == "") {
    alert("Preencha o nome de sua cidade");
    formUser.cidade.focus();
    return false;
  }

  if (estado == "") {
    alert("Preencha o campo com a sigla (UF) do seu estado. ");
    formUser.uf.focus();
    return false;
  }
}

//------------------------------------ FUNÇÕES DE VALIDAÇÃO ------------------------------------

//------------------------------------ DEIXAR RAZAO SOCIAL EM CAIXA ALTA ------------------------------------

function razaoblur() {
  var x = document.getElementById("razao");
  x.value = x.value.toUpperCase();
}
//------------------------------------ VERIFICAR O CNPJ/E-MAIL QUANDO INPUT SAIR DE FOCO ------------------------------------
function CNPJblur() {
  var x = formUser.cnpj.value;
  x = validarCNPJ(x);

  if (x == 0) {
    alert("CNPJ inválido! Digite novamente.");
    document.getElementById("cnpj").value = "";
    return false;
  }
}
function EMAILblur() {
  var x = formUser.logemail.value;
  x = validarEMAIL(x);

  if (x == 0) {
    alert("E-mail inválido! Digite novamente.");
    document.getElementById("logemail").value = "";
    return false;
  }
}
//--------------------------------------- FUNÇÃO VALIDAÇÃO CNPJ ---------------------------------------
function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj == "") return false;

  if (cnpj.length != 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  // Valida DVs
  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}

//------------------------------------------- FUNÇÃO VALIDAÇÃO EMAIL-------------------------------------------
function validarEMAIL(email) {
  usuario = formUser.email.value.substring(
    0,
    formUser.email.value.indexOf("@")
  );
  dominio = formUser.email.value.substring(
    formUser.email.value.indexOf("@") + 1,
    formUser.email.value.length
  );
  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    return true;
  } else return false;
}

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id("telefone").onkeyup = function () {
    mascara(this, mtel);
  };
};

//--------------------------------- FUNÇÃO MASCARA CAMPO TEL ----------------------------------------------------------
function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id("tel").onkeyup = function () {
    mascara(this, mtel);
  };
};

//--------------------------------- FUNÇÃO VALIDAÇÃO CEP ----------------------------------------------------------
function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("uf").value = conteudo.uf;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("uf").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}
