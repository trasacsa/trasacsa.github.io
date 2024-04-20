let currentItem = 9;

//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-01');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEvenListeners();

function cargarEvenListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 heigth=150px >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}" >X</a>
        </td>

    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;

    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id')
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

/* wtsp */

const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const whatsapp = document.querySelector("#whatsapp");
const contacto = document.querySelector("#bt-contacto");
const salirads1 = document.querySelector(".bt-cerrar-ads-1");
const ads1 = document.querySelector(".ads-skin-1");
const salirads2 = document.querySelector(".bt-cerrar-ads-2");
const ads2 = document.querySelector(".ads-skin-2");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
    whatsapp.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
    whatsapp.classList.remove("visible");
})

contacto.addEventListener("click", () => {
    menu.classList.remove("visible");
    whatsapp.classList.remove("visible");
})

salirads1.addEventListener("click", () => {
    ads1.classList.add("hiden");
})

salirads2.addEventListener("click", () => {
    ads2.classList.add("hiden");
})