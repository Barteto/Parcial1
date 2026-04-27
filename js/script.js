// estado
let categoriaActual = "todas";
let textoBusqueda = "";

const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

/*funcion para abrir la imagen seleccionada*/
function openFullImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

/*funcion para cerrar img y volver a la galeria*/
function closeImg(){
    fulImgBox.style.display = "none";
}

// agarra las elementos para q funcione
const botones = document.querySelectorAll(".btn-categoria");
const buscador = document.getElementById("buscador");

// recorre cada boton y le agrega un evento de click
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        categoriaActual = boton.dataset.categoria;
        filtrar();
    });
});

// cada vez q el usuario escriba algo se actualiza el textoBusqueda y se llama a filtrar
buscador.addEventListener("input", () => {
    textoBusqueda = buscador.value.toLowerCase();
    filtrar();
});

// función principal
function filtrar(){
    //trae todos los autos y los recorre para mostrar u ocultar segun la categoria y el texto de busqueda
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
    
    // actualiza el contador de resultados
    const contador = document.getElementById("contador");
    contador.textContent = `Mostrando ${visibles} resultados`;
}

// ejecutar al cargar
filtrar();
