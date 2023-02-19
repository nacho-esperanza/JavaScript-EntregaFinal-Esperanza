const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
        `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML =  `
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <p>Cantidad: ${product.cantidad}</p>
        `;

    modalContainer.append(carritoContent);

    let eliminar = document.createElement("span");
    eliminar.innerText = "X";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto)
    
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const compratotal = document.createElement("div");
    compratotal.className = "total-content";
    compratotal.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(compratotal);

};
    
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId  !== foundId;
    });

    
    saveLocal();
    pintarCarrito();
}
