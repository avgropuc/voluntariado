//Recebe o Id do estado
async function getCities(id) {
  var requestURL =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
    id +
    "/municipios";

  var opt = document.createElement("option");
  opt.setAttribute("value", "null");
  opt.text = "Select";
  selCid.appendChild(opt);

  fetch(requestURL, {
    method: "GET",
  }).then((response) => {
    response.json().then(function (result) {
      result
        .sort((a, b) => {
          a = a.nome;
          b = b.nome;
          return a > b ? 1 : -1;
        })
        .forEach((state) => {
          var opt = document.createElement("option");
          opt.setAttribute("value", state.id);
          opt.text = state.nome;
          selCid.appendChild(opt);
        });
    });
  });
}

async function getStates() {
  var requestURL =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

  fetch(requestURL, {
    method: "GET",
  }).then((response) => {
    response.json().then(function (result) {
      states = result;
      states
        .sort((a, b) => {
          a = a.sigla;
          b = b.sigla;
          return a > b ? 1 : -1;
        })
        .forEach((state) => {
          var opt = document.createElement("option");
          opt.setAttribute("value", state.id);
          opt.text = state.sigla;
          selEst.appendChild(opt);
        });
    });
  });
}
