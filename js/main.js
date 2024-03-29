const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const whatsapp = document.querySelector("#whatsapp");
const contacto = document.querySelector("#bt-contacto");

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