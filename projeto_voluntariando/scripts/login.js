function login() {
  //pegas os valores inseridos nos campos
  var email = document.getElementById("email-usuario").value;
  var senha = document.getElementById("senha-usuario").value;

  var requestURL = "../assets/dados.json";

  //faz uma requisicao ao servidor atrás do arquivo
  var requisicao = new XMLHttpRequest();
  requisicao.open("GET", requestURL);
  requisicao.responseType = "json";
  requisicao.send();

  requisicao.onload = () => {
    var resposta = requisicao.response;
    var usuarios = resposta["usuarios"];

    var userLogado = false;

    for (let i = 0; i < usuarios.length; i++) {
      var user = usuarios[i];

      if (user.email == email && user.senha == senha) {
        userLogado = true;
        break;
      }
    }

    if (userLogado) {
      location.href = "..." 
    }
      else alert("Usuário e senha incorretos");
  };
}
