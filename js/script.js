// estado
let categoriaActual = "todas";
let textoBusqueda = "";

// elementos
const botones = document.querySelectorAll(".btn-categoria");
const buscador = document.getElementById("buscador");

// botones
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        categoriaActual = boton.dataset.categoria;
        filtrar();
    });
});

// buscador
buscador.addEventListener("input", () => {
    textoBusqueda = buscador.value.toLowerCase();
    filtrar();
});

// función principal
function filtrar(){
    const cards = document.querySelectorAll(".auto-card");
    let visibles = 0;

    cards.forEach(card => {
        const categoria = card.dataset.categoria;
        const texto = card.textContent.toLowerCase();

        if(
            (categoriaActual === "todas" || categoria === categoriaActual) &&
            texto.includes(textoBusqueda)
        ){
            card.style.display = "block";
            visibles++;
        } else {
            card.style.display = "none";
        }
    });

    const contador = document.getElementById("contador");
    contador.textContent = `Mostrando ${visibles} resultados`;
}

// ejecutar al cargar
filtrar();