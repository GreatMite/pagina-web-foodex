console.log("Script conectado");

let carrito = [];

function agregarCarrito(nombre, precio){

    carrito.push({
        nombre,
        precio
    });

    actualizarCarrito();
}

function actualizarCarrito(){

    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach((producto, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
        <div class="producto-carrito">
        
        <img src="${producto.imagen}">
        
        <button class="eliminar"
        onclick="eliminarProducto(${index})">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="info-producto">
            <strong>${producto.nombre}</strong>
            <p>S/ ${producto.precio.toFixed(2)}</p>
        </div>
        </div>
        `;

        lista.appendChild(li);

        suma += producto.precio;
    });

    total.textContent = suma.toFixed(2);
}
function toggleCarrito(){

    document
        .getElementById("carrito-panel")
        .classList.toggle("activo");
}

function toggleMenu(){

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
}

function closeMenu(){

    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");
}
function eliminarProducto(index){
    carrito.splice(index,1);
    actualizarCarrito();
}
