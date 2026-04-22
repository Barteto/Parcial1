let categoriaActual = "todas";

const botones = document.querySelectorAll(".btn-categoria");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

    categoriaActual = boton.dataset.categoria;

    console.log("Categoría seleccionada:", categoriaActual);

    filtrar(); 
    });
});