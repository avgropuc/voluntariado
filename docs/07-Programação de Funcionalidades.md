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

 - <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/blob/2c24e920ecefd55004ae3fd1192795310b1ff867/projeto_voluntariando/paginas/login.html"> login.html</a>
 - <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/blob/2c24e920ecefd55004ae3fd1192795310b1ff867/projeto_voluntariando/estilos/login.css"> login.css</a>
 - <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/blob/2c24e920ecefd55004ae3fd1192795310b1ff867/projeto_voluntariando/scripts/login.js"> login.js</a>
 - <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/blob/2c24e920ecefd55004ae3fd1192795310b1ff867/projeto_voluntariando/assets/dados.json"> dados.json</a>
 
### **Estrutura de dados**

````
     {
    "usuarios": [
      {
        "nome": "erik",
        "email": "erik@email.com",
        "senha": "123456"
      },
      {
        "nome": "meriane",
        "email": "meriane@email.com",
        "senha": "123456"
      }
    ]
}
````
### **Instruções de acesso**

 1. Faça download do arquivo do projeto (ZIP) ou <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-voluntariando/tree/2c24e920ecefd55004ae3fd1192795310b1ff867">clone</a> do projeto no GITHub;
 2. Descompacte o arquivo em uma pasta específica;
 3. Abra o Visual Studio Code e execute o Live Server;
 4. Abra um navegador de Internet e informe a seguinte URL <a href="http://localhost:5500/index.html"></a>

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)