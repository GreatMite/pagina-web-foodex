console.log("Script conectado");

let carrito = [];

function agregarCarrito(nombre, precio, imagen){

    const existe = carrito.find(item => item.nombre === nombre);

    if(existe){
        existe.cantidad++;
    }else{
        carrito.push({
            nombre,
            precio,
            imagen,
            cantidad: 1
        });
    }

    actualizarCarrito();
}

function actualizarCarrito(){

    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    const contador = document.getElementById("contador-carrito");

    lista.innerHTML = "";

    let suma = 0;
    let cantidadTotal = 0;

    carrito.forEach((producto,index)=>{

        const li = document.createElement("li");

        li.innerHTML = `
        <div class="producto-carrito">

            <img src="${producto.imagen}" class="img-carrito">

            <div class="info-producto">

                <strong>${producto.nombre}</strong>

                <p>S/ ${producto.precio.toFixed(2)}</p>

                <div class="cantidad">

                    <button onclick="disminuirCantidad(${index})">−</button>

                    <span>${producto.cantidad}</span>

                    <button onclick="aumentarCantidad(${index})">+</button>

                </div>

            </div>

            <button class="eliminar"
            onclick="eliminarProducto(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>
        `;

        lista.appendChild(li);

        suma += producto.precio * producto.cantidad;

        cantidadTotal += producto.cantidad;
    });

    total.textContent = suma.toFixed(2);

    contador.textContent = cantidadTotal;
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

function aumentarCantidad(index){
    carrito[index].cantidad++;
    actualizarCarrito();
}

function disminuirCantidad(index){

    if(carrito[index].cantidad > 1){
        carrito[index].cantidad--;
    }else{
        carrito.splice(index,1);
    }

    actualizarCarrito();
}

function eliminarProducto(index){
    carrito.splice(index,1);
    actualizarCarrito();
}

function abrirPago(){

    document.getElementById("total-pago").textContent =
    document.getElementById("total").textContent;

    document.getElementById("modal-pago")
    .classList.add("activo");
}

function cerrarPago(){

    document.getElementById("modal-pago")
    .classList.remove("activo");
}

function confirmarPago(){

    Swal.fire({
    icon: 'success',
    title: '¡Compra realizada!',
    text: 'Tu pedido ha sido registrado correctamente.',
    confirmButtonText: 'Ver pedido',
    confirmButtonColor: '#F4B400',
    background: '#FFF8E1'
    });
    carrito = [];

    actualizarCarrito();

    cerrarPago();
}

const carritoPanel = document.getElementById("carrito-panel");
const cerrarCarrito = document.getElementById("cerrar-carrito");

cerrarCarrito.addEventListener("click", () => {
    carritoPanel.classList.remove("activo");
});
