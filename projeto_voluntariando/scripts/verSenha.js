let eyeButton = document.querySelector("#verSenha");

eyeButton.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senhaUsuario");
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else inputSenha.setAttribute("type", "password");
});
