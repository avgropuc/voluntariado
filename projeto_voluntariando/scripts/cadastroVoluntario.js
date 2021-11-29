

function validar () {
    var nome = formUser.nome.value;
    var cpf = formUser.cpf.value;
    var email = formUser.logemail.value;
    var senha = formUser.senha.value;
    var Cep = formUser.cep.value;
    var cidade = formUser.cidade.value;
    var estado = formUser.uf.value;
    
    //------------------------------------- alerta ao enviar -------------------------------------------
    
    if(nome == ""){
        alert ('Digite o seu nome completo.');
        formUser.cpf.focus();  
        return false;
    }


    else if(cpf == 0){
       alert("É nessário digitar o seu cpf!");
       document.getElementById('cpf').value = ""; //limpa o campo cpf
       return false;
    }

    else if(email == 0){
        alert("E-mail inválido! Preencha corretamente o campo do email (ex: usuario@email.com)");
        document.getElementById('logemail').value = ""; //limpa o campo e-mail
        return false;
    }
    
    else if(senha == "" || senha.length != 4){
        alert ('Preencha o campo senha com 4 dígitos');
        formUser.senha.focus();
        document.getElementById('senha').value = ""; //limpa o campo senha
        return false;
    }
    
    else if(Cep == ""){
        alert ('É necessário inserir o CEP.');
        formUser.cep.focus();
        return false;
    }

    else if(cidade == "" ){
        alert ('Preencha o nome de sua cidade');
        formUser.cidade.focus();
        return false;
        }
    
    else if(estado == "" ){
        alert ('Preencha o campo com a sigla (UF) do seu estado. ');
        formUser.uf.focus();
        return false;
        }

    else if (habilidade.value == "") {
            alert("Selecione uma opção de habilidade para continuar");
            return false;
          }

    else{
        cadastraVoluntario();
        return false;
    }
}


    //------------------------------------ FUNÇÕES DE VALIDAÇÃO ------------------------------------

    //------------------------------------ DEIXAR RAZAO SOCIAL EM CAIXA ALTA ------------------------------------

    function nomeblur() {
        var x = document.getElementById("nome");
        x.value = x.value.toUpperCase();
      }
     //------------------------------------ VERIFICAR O CNPJ/E-MAIL QUANDO INPUT SAIR DE FOCO ------------------------------------
    function cpfblur(){
        var x = formUser.cpf.value;
        x = TestaCPF(x);

        if(x == 0){
            alert("CPF inválido! Digite novamente.");
            document.getElementById('cpf').value = "";
            return false;
         }
    }
    function EMAILblur(){
        var x = formUser.logemail.value;
        x = validarEMAIL(x);

        if(x == 0){
            alert("E-mail inválido! Digite novamente.");
            document.getElementById('logemail').value = "";
            return false;
         }
    }
    //--------------------------------------- FUNÇÃO VALIDAÇÃO CPF ---------------------------------------
    function TestaCPF(cpf) {
        var Soma;
        var Resto;
        Soma = 0;
      if (cpf == "00000000000") return false;
    
      for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
        return true;
    }
    


//------------------------------------------- FUNÇÃO VALIDAÇÃO EMAIL-------------------------------------------
    function validarEMAIL(email) {
        usuario = formUser.email.value.substring(0, formUser.email.value.indexOf("@"));
        dominio = formUser.email.value.substring(formUser.email.value.indexOf("@")+ 1, formUser.email.value.length);
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true;
        }
        else
        return false;
        
        }


//--------------------------------- FUNÇÃO MASCARA CAMPO TEL ----------------------------------------------------------
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('tel').onkeyup = function(){
		mascara( this, mtel );
	}
}

//--------------------------------- FUNÇÃO VALIDAÇÃO CEP ----------------------------------------------------------
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
 
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

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
};
//----------------------------- armazenamento localstorage ----------------------------------

