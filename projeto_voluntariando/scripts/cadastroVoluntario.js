function validar (){
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var senha = formUser.senha.value;
    var cpf = formUser.cpf.value;
    var phone = formUser.phone.value;
    var estado = document.getElementById('estado');
    var cidade = formUser.cidade.value;
    var habilidade = document.getElementById('habilidade');
    var regiao = document.getElementById('regiao');

    if(nome == ""){
        alert ('Preencha o campo nome.');
        formUser.nome.focus();
        return false;
    }

    if(email == "" || email.indexOf('@') == -1){
        alert ('Preencha o campo email ex: usuario@email.com');
        formUser.email.focus();
        return false;
    }

    if(senha == "" || senha.length != 4){
        alert ('Preencha o campo senha com 4 dígitos');
        formUser.senha.focus();
        return false;
    }

    if(cpf == "" || cpf.length != 14){
        alert ('Preencha o campo com todos os dígitos ex: xxx.xxx.xxx-xx');
        formUser.cpf.focus();
        return false;
    }

    if(phone == "" || phone.length != 14){
        alert ('Preencha o campo com todos os dígitos ex: (xx)xxxxx-xxxx');
        formUser.phone.focus();
        return false;
    }

    if(estado.value == "" ){
        alert ('Selecione uma opção de Estado para continuar');
        return false;
    }

    if(cidade == "" ){
        alert ('Preencha o nome de sua cidade');
        formUser.cidade.focus();
        return false;
    }

    if(habilidade.value == "" ){
        alert ('Selecione uma opção de habilidade para continuar');
        return false;
    }

    if(regiao.value == "" ){
        alert ('Selecione uma região para continuar');
        return false;
    }

     
}