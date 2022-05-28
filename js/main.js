let carritoIcono = document.querySelector("#bag-icon");
let carrito = document.querySelector(".carrito");
let carritoCerrar = document.querySelector("#cerrar-carrito");

carritoIcono.onClick = () => {
    carrito.classList.add("activo");
};

carritoIcono.onClick = () => {
    carrito.classList.remove("activo");
};
29/35