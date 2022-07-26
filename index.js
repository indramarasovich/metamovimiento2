const listaProductos = [
    { id: 1, nombre: "Empanadas chinas", precio: 250, foto: "../images/t1.jpeg"},
    { id: 2, nombre: "Barrita de cereal c/ baño chocolate", precio: 100, foto: "../images/t2.jpeg"},
    { id: 4, nombre: "Barrita de cereal c/ baño chocolate blanco", precio: 100, foto: "../images/t3.jpeg"},
    { id: 5, nombre: "Hamburguesa de garbanzos", precio: 200, foto: "../images/t4.jpeg"},
];

let armarProductos = document.getElementById("contenedorProductos");

listaProductos.forEach((item) => armarCards(item))

function armarCards(producto) {      
        let cardProducto = `
        <div class="producto col">
            <img src="${producto.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
            </div>
            <button class="btn btn-primary botonCompra" id="${producto.id}">+</button>
        </div>`;

armarProductos.innerHTML += cardProducto
}