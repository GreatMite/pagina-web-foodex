// Variables de los planes
let planSeleccionado = "Premium";
let precioSeleccionado = "S/ 14.90";

// Plan Básico
document.getElementById("btnBasico").addEventListener("click", function () {

    planSeleccionado = "Básico";
    precioSeleccionado = "S/ 9.90";

    document.getElementById("precioPlan").textContent = precioSeleccionado;
    document.getElementById("totalPlan").textContent = precioSeleccionado;

    alert("Has seleccionado el Plan Básico");
});

// Plan Premium
document.getElementById("btnPremium").addEventListener("click", function () {

    planSeleccionado = "Premium";
    precioSeleccionado = "S/ 14.90";

    document.getElementById("precioPlan").textContent = precioSeleccionado;
    document.getElementById("totalPlan").textContent = precioSeleccionado;

    alert("Has seleccionado el Plan Premium");
});

// Plan Empresarial
document.getElementById("btnEmpresarial").addEventListener("click", function () {

    planSeleccionado = "Empresarial";
    precioSeleccionado = "S/ 29.90";

    document.getElementById("precioPlan").textContent = precioSeleccionado;
    document.getElementById("totalPlan").textContent = precioSeleccionado;

    alert("Has seleccionado el Plan Empresarial");
});

// Botón Suscribirse
document.getElementById("btnSuscribir").addEventListener("click", function () {

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let tarjeta = document.getElementById("tarjeta").value.trim();
    let fecha = document.getElementById("fecha").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    let camposVacios = [];

    if (nombre === "") camposVacios.push("Nombre completo");
    if (correo === "") camposVacios.push("Correo electrónico");
    if (tarjeta === "") camposVacios.push("Número de tarjeta");
    if (fecha === "") camposVacios.push("Fecha de vencimiento");
    if (cvv === "") camposVacios.push("CVV");

    if (camposVacios.length > 0) {
        alert(
            "⚠ Debes completar los siguientes campos:\n\n" +
            camposVacios.join("\n")
        );
        return;
    }

    alert(
        "✅ Registro exitoso\n\n" +
        "Plan seleccionado: " + planSeleccionado +
        "\nMonto: " + precioSeleccionado
        
    );window.location.href = "../index.html";
});