/* ===================================
   MOSTRAR FECHA
=================================== */

function mostrarFecha() {

    let fecha = new Date();

    let opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("fecha-actual").textContent =
        fecha.toLocaleDateString("es-ES", opciones);
}


/* ===================================
   ESTADÍSTICAS
=================================== */

function cargarEstadisticas() {

    document.getElementById("ventas-total").textContent =
        "S/ 24,500";

    document.getElementById("total-pedidos").textContent =
        "1,250";

    document.getElementById("total-clientes").textContent =
        "5,630";

    document.getElementById("total-restaurantes").textContent =
        "420";
}


/* ===================================
   PEDIDOS RECIENTES
=================================== */

function cargarPedidos() {

    let tabla = document.getElementById("tabla-pedidos");

    tabla.innerHTML = `
        <tr>
            <td>#001</td>
            <td>Juan Pérez</td>
            <td>S/ 42</td>
            <td><span class="estado entregado">Entregado</span></td>
        </tr>

        <tr>
            <td>#002</td>
            <td>Ana Torres</td>
            <td>S/ 58</td>
            <td><span class="estado preparando">Preparando</span></td>
        </tr>

        <tr>
            <td>#003</td>
            <td>Luis Ramos</td>
            <td>S/ 74</td>
            <td><span class="estado camino">En camino</span></td>
        </tr>

        <tr>
            <td>#004</td>
            <td>María López</td>
            <td>S/ 67</td>
            <td><span class="estado entregado">Entregado</span></td>
        </tr>
    `;
}


/* ===================================
   RESTAURANTES POPULARES
=================================== */

function cargarRestaurantes() {

    let lista = document.getElementById("lista-restaurantes");

    lista.innerHTML = `

        <div class="restaurante-card">

            <div class="restaurante-img">
                🍔
            </div>

            <div class="restaurante-info">

                <h3>Burger House</h3>

                <p>Hamburguesas</p>

                <div class="restaurante-rating">
                    ⭐ 4.9
                </div>

            </div>

        </div>

        <div class="restaurante-card">

            <div class="restaurante-img">
                🍕
            </div>

            <div class="restaurante-info">

                <h3>Pizza Express</h3>

                <p>Pizzas</p>

                <div class="restaurante-rating">
                    ⭐ 4.8
                </div>

            </div>

        </div>

        <div class="restaurante-card">

            <div class="restaurante-img">
                🍣
            </div>

            <div class="restaurante-info">

                <h3>Sushi Master</h3>

                <p>Comida Japonesa</p>

                <div class="restaurante-rating">
                    ⭐ 4.7
                </div>

            </div>

        </div>

    `;
}


/* ===================================
   GRÁFICO DE VENTAS
=================================== */

function crearGrafico() {

    const ctx =
        document.getElementById("ventasChart");

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio"
            ],

            datasets: [{

                label: "Ventas",

                data: [
                    1200,
                    1800,
                    1500,
                    2500,
                    2200,
                    3000
                ],

                backgroundColor: "#f5b321",

                borderRadius: 8

            }]
        },

        options: {

            responsive: true,

            plugins: {
                legend: {
                    display: false
                }
            },

            scales: {
                y: {
                    beginAtZero: true
                }
            }

        }

    });

}


/* ===================================
   INICIAR DASHBOARD
=================================== */

function iniciarDashboard() {

    mostrarFecha();

    cargarEstadisticas();

    cargarPedidos();

    cargarRestaurantes();

    crearGrafico();
}


/* ===================================
   EJECUTAR
=================================== */

iniciarDashboard();