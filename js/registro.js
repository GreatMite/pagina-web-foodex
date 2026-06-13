// ============================
// ARREGLOS
// ============================
let clientes = [];
let emprendedores = [];

// ============================
// CAMBIO DE FORMULARIOS
// ============================
const clienteRadio = document.querySelector('input[value="cliente"]');
const emprendedorRadio = document.querySelector('input[value="emprendedor"]');

const clienteForm = document.getElementById("clienteForm");
const emprendedorForm = document.getElementById("emprendedorForm");

clienteRadio.addEventListener("change", () => {
    clienteForm.style.display = "block";
    emprendedorForm.style.display = "none";
});

emprendedorRadio.addEventListener("change", () => {
    clienteForm.style.display = "none";
    emprendedorForm.style.display = "block";
});

// ============================
// REGISTRO CLIENTE
// ============================
clienteForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("clienteNombre").value;
    const correo = document.getElementById("clienteCorreo").value;
    const password = document.getElementById("clientePassword").value;

    const cliente = {
        id: clientes.length + 1,
        nombre,
        correo,
        password
    };

    clientes.push(cliente);

    console.log("Clientes:", clientes);

    
    alert("✅ Cliente registrado correctamente");
    window.location.href = "../paginas/inicio-de-sesion.html";

    clienteForm.reset();
});

// ============================
// REGISTRO EMPRENDEDOR
// ============================
emprendedorForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("emprendedorNombre").value;
    const negocio = document.getElementById("nombreNegocio").value;
    const correo = document.getElementById("emprendedorCorreo").value;
    const password = document.getElementById("emprendedorPassword").value;

    const emprendedor = {
        id: emprendedores.length + 1,
        nombre,
        negocio,
        correo,
        password
    };

    emprendedores.push(emprendedor);

    console.log("Emprendedores:", emprendedores);

    alert("✅ Emprendedor registrado correctamente");
    window.location.href = "../paginas/inicio-de-sesion.html";
    emprendedorForm.reset();
});