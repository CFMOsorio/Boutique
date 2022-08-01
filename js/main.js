// carrito
let carritoIcono = document.getElementById("bag-icon");
let carrito = document.querySelector(".carrito");
let carritoCerrar = document.getElementById("cerrar-carrito");

// barra lateral - abrir carrito
carritoIcono.addEventListener("click", () => {
  carrito.classList.add("activo");
});

carritoCerrar.addEventListener("click", () => {
  carrito.classList.remove("activo");
});

// Funcionamiento de seleccion de producto
const elementProductos = document.querySelectorAll(".caja-productos");
const padreCarrito = document.querySelector(".carrito-contenido");
elementProductos !==null&&

elementProductos.forEach((elementProducto, id) => {
  let lastElementProduct = elementProducto.lastElementChild;
  let elementSrcImageProduct = elementProducto.firstElementChild.src;
  let tituloProducto = elementProducto.children[1].textContent;
  let precioProducto = elementProducto.children[2].textContent;

  lastElementProduct.addEventListener("click", () => {
    console.log(elementProducto);
    console.log(elementSrcImageProduct);
    console.log(tituloProducto);
    console.log(precioProducto);
    let hijoParaCarrito = document.createElement("div");
    hijoParaCarrito.className = "caja-carrito";
    hijoParaCarrito.id = elementProducto.id;

    let imageParaHijo = document.createElement("img");
    imageParaHijo.className = "carrio-img";
    imageParaHijo.src = elementSrcImageProduct;

    let iconoBorrar = document.createElement("span");
    iconoBorrar.className = "material-symbols-outlined";
    iconoBorrar.id = "borrar-carrito";
    iconoBorrar.innerHTML = "delete";

    //-----------------este es el div detalle-caja"-----------------------
    let divDetalleCaja = document.createElement("div");
    divDetalleCaja.className = "detalle-caja";

    let tituloProductoCarrito = document.createElement("div");
    tituloProductoCarrito.className = "carrito-producto-titulo";
    tituloProductoCarrito.textContent = tituloProducto

    let precioProductoCarrito = document.createElement("div");
    precioProductoCarrito.className = "carrito-precio";
    precioProductoCarrito.textContent = precioProducto;

    let inputCantidadCarritos = document.createElement('input');
    inputCantidadCarritos.className = "cantidad-carrito";
    inputCantidadCarritos.value = "1";
    inputCantidadCarritos.type = "number";
    inputCantidadCarritos.min = "1"


    divDetalleCaja.appendChild(tituloProductoCarrito);
    divDetalleCaja.appendChild(precioProductoCarrito);
    divDetalleCaja.appendChild(inputCantidadCarritos);
    
    // ----------------------------------------------------------------------
    //------------ icono borrar producto de carrito --------------------------

    // ----------------------------------------------------------------------
    // aqui se agrega al papa(hijoParaCarrito) los elementos que van contenidos dentro de el
    hijoParaCarrito.appendChild(imageParaHijo);
    hijoParaCarrito.appendChild(divDetalleCaja);
    hijoParaCarrito.appendChild(iconoBorrar);

    // aqui se agrega al papa de los pollitos
    padreCarrito.appendChild(hijoParaCarrito);
  });
});
