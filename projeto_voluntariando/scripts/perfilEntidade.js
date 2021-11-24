volunteers = [];
states = [];
filters = [];

async function filter(select){
    filters = new Array(5);

    filters[0] = selEst.value != "null" ? selEst[selEst.selectedIndex].text : null;

    filters[1] = selCid.value != "null" ? selCid[selCid.selectedIndex].text : null;

    filters[2] = selReg.value != "null" ? selReg.value: null;

    filters[3] = selFreq.value != "null"? selFreq.value: null;

    filters[4] = selHab.value != "null" ? selHab.value:null;

    var filteredList = volunteers.filter((value) => {
        if(filters[0] != null && value.endereco.estado != filters[0]) return false;
        
        if(filters[1] != null && value.endereco.cidade != filters[1]) return false;
        
        if(filters[2] != null && value.endereco.regiao != filters[2]) return false;
        
        if(filters[3] != null && value.disponibilidade != filters[3]) return false;
        
        if(filters[4] != null && value.habilidade != filters[4]) return false;

        return true;
    });
    
    selCid.disabled = false;
    selReg.disabled = false;

    if(select == "selEst"){
        selCid.disabled = true;
        selReg.disabled = true;
        selReg.selectedIndex = 0;

        selCid.innerHTML = "";
        
        if(selEst.value != "null"){
            await getCities(selEst.value);
            selCid.disabled = false;
        }
    }

    if(selEst.value == "null"){
        selCid.disabled = true;
        selReg.disabled = true;

        selCid.innerHTML = "";

        var optCidNull = document.createElement("option");
        optCidNull.setAttribute("value","null");
        optCidNull.text = "Select";

        selCid.appendChild(optCidNull);
        selReg.selectedIndex = 0;
    }else if(selCid.value == "null"){
        selReg.disabled = true;
        selReg.selectedIndex = 0;
    }

    await showCards(filteredList);
}

async function getVolunteers(){
    var requestURL = "http://127.0.0.1:5500/projeto_voluntariando/assets/voluntarios.json";

    var response = await (await fetch(requestURL)).json();
    volunteers = response["voluntarios"];
}

function initializeComponents(){
    var selEst = document.getElementById("selEst");
    var selCid = document.getElementById("selCid");
    var selReg = document.getElementById("selReg");
    var selFreq = document.getElementById("selFreq");
    var selHab = document.getElementById("selHab");
}

async function load(){
    initializeComponents();
    await getVolunteers();
    await getStates();
    await showCards(volunteers);
}

async function showCards(volunteersList = []){
    //Pega a lista no documento
    var cardListElement = document.getElementById("cards_resultados");
    //limpa a lista
    cardListElement.innerHTML = "";

    if(volunteersList.length == 0){
        var li = document.createElement("li");
        li.setAttribute("class","liVazio")
        li.appendChild(document.createTextNode("Os Filtros não trouxeram nenhum resultado"));
        cardListElement.appendChild(li);
    }else{
        volunteersList.forEach(volunteer => {
            
            var img = document.createElement("img");
            img.setAttribute("src",volunteer.caminhoImagem);
            
            var bHabilidade = document.createElement("b");
            bHabilidade.textContent = "Habilidade: ";

            var liHabilidade = document.createElement("li");
            liHabilidade.appendChild(bHabilidade);
            liHabilidade.appendChild(
                document.createTextNode(volunteer.habilidade));

            var liDisponibilidade = document.createElement("li");
            var bDisponibilidade = document.createElement("b");
            bDisponibilidade.textContent = "Disponibilidade: ";
            liDisponibilidade.appendChild(bDisponibilidade);
            liDisponibilidade.appendChild(
                document.createTextNode(volunteer.disponibilidade));

            var liRegiao = document.createElement("li");
            var bRegiao = document.createElement("b");
            bRegiao.textContent = "Região: ";
            liRegiao.appendChild(bRegiao);
            liRegiao.appendChild(
                document.createTextNode(volunteer.endereco.regiao));

            var ul = document.createElement("ul");
            ul.appendChild(liHabilidade);
            ul.appendChild(liDisponibilidade);
            ul.appendChild(liRegiao);
            
            var li = document.createElement("li");
            li.setAttribute("class","card_Volunteer");
            li.appendChild(img);
            li.appendChild(ul);

            cardListElement.appendChild(li);
        });
    }
}
