const formulario = document.querySelector("#login-form");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const respuesta = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuario: usuario.value,
      password: password.value
    })
  });

  const data = await respuesta.json();

  if (!data.ok) {
    alert(data.mensaje);
    return;
  }

  if (data.rol === "usuario") {
    window.location.href = "../index.html";
  }

  if (data.rol === "restaurante") {
    window.location.href = "panel-restaurante.html";
  }

  if (data.rol === "administrador") {
    window.location.href = "panel-admin.html";
  }
});