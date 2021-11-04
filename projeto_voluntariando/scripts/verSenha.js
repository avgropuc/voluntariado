let eyeButton = document.querySelector("#verSenha");

eyeButton.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha-usuario");
  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else inputSenha.setAttribute("type", "password");
});
