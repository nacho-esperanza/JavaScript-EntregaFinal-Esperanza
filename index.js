/* ESTRUCTURA ANTERIOR CON OBJETOS

class Producto {
    constructor(id, nombre, precio, dispo) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.dispo = parseFloat(dispo);
        this.img = URL;
    }
}

const stockProductos = [];
stockProductos.push(new Producto(1, "Remera", "5000", "15"));
stockProductos.push(new Producto(2, "Pantalon", "8000", "10"));
stockProductos.push(new Producto(3, "Camisa", "6500", "13"));
stockProductos.push(new Producto(4, "Medias", "2500", "30"));

*/




const articulos = document.getElementById("articulos");
const verCarrito = document.getElementById("carrito");
const modalContainer = document.getElementById("modal-container");



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "espacio-prod";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="precio">${product.precio} $</p>
    <p>Quedan ${product.dispo} disponibles. </p>
    `

    articulos.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
        saveLocal();
    });


});

verCarrito.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.className = "modal-header"
    modal.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
        `;
    modalContainer.append(modal);

    const modalbutton = document.createElement("h1");


    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML =  `
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        `;

    modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const compratotal = document.createElement("div");
    compratotal.className = "total-content";
    compratotal.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(compratotal);

    

    
});


const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


