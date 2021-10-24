# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução, <a href="docs\06-Template padrão do Site.md"> Template padrão do Site</a>

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O endereço de <a herf="projeto_voluntariando\paginas\login.html"> Login </a> e outras orientações de acesso são apresentadas na sequência.

## Tela de Login (RF-05)

A tela de login do sistema apresenta, além da parte de navegação, uma área de login do qual se faz necessário inserir o e-mail e a senha cadastrada para acessar. Os dados são armazenados na pasta de <a href="projeto_voluntariando\assets\dados.json"> dados</a> com estruturas baseada em JSON. Visualização da tela abaixo.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/blob/main/docs/img/telaLogin.png"/>

## Tela de Login 
### **Requisitos atendidos**

 - RF-05

### **Artefatos da funcionalidade**

 - <a href="projeto_voluntariando\paginas\login.html"> login.html
 - <a href="projeto_voluntariando\estilos\login.css"> login.css
 - <a href="projeto_voluntariando\scripts\login.js"> login.js
 - <a href="projeto_voluntariando\assets\dados.json"> dados.json
 
### **Estrutura de dados**

````
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

    requisicao.onload = () =>{
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
        
        if(userLogado)
        alert("bem vindo " + user.nome);
        else
        alert("Usuário e senha incorretos");
        return user.nome;
    }
  }
````
### **Instruções de acesso**

 1. Abra um navegador de internet e informe a seguinte URL: XXX
 2. A tela de login será a funcionalidade exibida pela página.

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)