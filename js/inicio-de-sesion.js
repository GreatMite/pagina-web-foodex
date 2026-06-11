const usuarios = [
  { usuario: "cliente", password: "1234", rol: "usuario" },
  { usuario: "restaurante", password: "1234", rol: "restaurante" },
  { usuario: "admin", password: "1234", rol: "administrador" }
];

const formulario = document.querySelector("#login-form");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuarioIngresado = usuario.value.trim();
  const passwordIngresada = password.value.trim();

  const cuenta = usuarios.find(function (item) {
    return item.usuario === usuarioIngresado && item.password === passwordIngresada;
  });

  if (!cuenta) {
    alert("Usuario o contraseña incorrectos");
    return;
  }

  if (cuenta.rol === "usuario") {
    window.location.href = "../index.html";
  }

  if (cuenta.rol === "restaurante") {
    window.location.href = "panel-restaurante.html";
  }

  if (cuenta.rol === "administrador") {
    window.location.href = "panel-admin.html";
  }
});
