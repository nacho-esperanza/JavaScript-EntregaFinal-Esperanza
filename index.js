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
const cantidadCarrito = document.getElementById("cantidadCarrito");



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

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        console.log(repeat);

        if((repeat)){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
            console.log(carrito);
        }

        saveLocal();
    });


});




const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


