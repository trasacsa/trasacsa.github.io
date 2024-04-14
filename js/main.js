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